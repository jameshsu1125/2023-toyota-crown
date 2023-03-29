import { Howl } from 'howler';
import EnterFrame from 'lesca-enterframe';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { AudioConfig, Context, VideoConfig } from '../../settings/config';
import { ACTION, AUDIO_STATE, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';

const STATE = {
	playing: 'playing',
	pause: 'pause',
	end: 'end',
};

let timeout;
let skipAbleTimeout;

const AudioProvider = memo(({ children }) => {
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { video, audio, status } = payLoad;

	const page = context[ACTION.page];
	const { index, onend, skip } = page;
	const pageRef = useRef(page);

	const audioContext = context[ACTION.audio];
	const { muted } = audioContext;
	const mutedRef = useRef(muted);

	const [targets, setTarget] = useState([]);
	const audioRef = useRef([]);
	const indexRef = useRef(index);
	const stateRef = useRef();
	const bgmRef = useRef();

	const [voIndex, setVoIndex] = useState(false);
	const lastIndex = useRef();

	useEffect(() => {
		pageRef.current = page;
	}, [page]);

	useEffect(() => {
		mutedRef.current = muted;
	}, [muted]);

	useEffect(() => {
		// play bgm when user clicked button
		if (status === PAYLOAD_STATUS.userDidActive) bgmRef.current.play();
	}, [status]);

	useEffect(() => {
		// stop last sound track when user skip video
		if (skip) {
			setVoIndex(false);
			audioRef.current[lastIndex.current].stop();
		}
	}, [skip]);

	useEffect(() => {
		// resume sound when user out / in focus
		const blur = () => {
			const idx = indexRef.current - 1;
			if (idx < 0 || idx >= AudioConfig.targets.length) return;
			if (stateRef.current === STATE.playing) {
				audioRef.current[idx].pause();
				bgmRef.current.pause();
			}
		};

		const focus = () => {
			const idx = indexRef.current - 1;
			if (idx < 0 || idx >= AudioConfig.targets.length) return;
			if (stateRef.current === STATE.pause) {
				audioRef.current[idx].play();
				bgmRef.current.play();
			}
		};
		window.addEventListener('blur', blur);
		window.addEventListener('focus', focus);
	}, []);

	useEffect(() => {
		// set VO index state
		if (voIndex !== false) {
			setContext({ type: ACTION.page, state: { ...page, voIndex } });
		}
	}, [voIndex]);

	useEffect(() => {
		// play sound track when video end
		indexRef.current = index;
		if (onend) {
			const idx = index - 1;
			if (idx < 0 || idx >= AudioConfig.targets.length) return;

			clearTimeout(timeout);
			clearTimeout(skipAbleTimeout);
			timeout = setTimeout(() => {
				audioRef.current[idx].volume(0);
				audioRef.current[idx].seek(0);
				audioRef.current[idx].play();
				// fadeout if not user not muted
				if (!mutedRef.current) {
					requestAnimationFrame(() => {
						audioRef.current[idx].fade(0, 1, 2000);
					});
					bgmRef.current.fade(AudioConfig.defaultVolume, AudioConfig.minScaleVolume, 1000);
				}

				lastIndex.current = idx;

				// 避免onplay沒促發
				// skipAbleTimeout = setTimeout(() => {
				// 	setContext({ type: ACTION.page, state: { ...pageRef.current, skipEnabled: true } });
				// }, 1000);
			}, AudioConfig.delay);
		}
	}, [index, onend]);

	useEffect(() => {
		// ? start loading mp3 when video content 2 loaded
		if (video === VideoConfig.preloadToIndex) {
			setTarget((S) => {
				if (S.length === 0) return [AudioConfig.targets[0]];
				return S;
			});
		}
	}, [video]);

	const onloadBGM = () => {
		setContext({ type: ACTION.payLoad, state: { ...payLoad, bgm: 1 } });
		setContext({
			type: ACTION.audio,
			state: { ...AUDIO_STATE, content: [...audioRef.current, bgmRef.current] },
		});

		// start tracking vo index by sound current time;
		EnterFrame.add(() => {
			if (
				indexRef.current !== PAGE_CONTEXT_NAME.intro &&
				indexRef.current !== PAGE_CONTEXT_NAME.detailVideo
			) {
				if (stateRef.current === STATE.playing) {
					const idx = indexRef.current - 1 < 0 ? 0 : indexRef.current - 1;
					const currentTime = audioRef.current[idx].seek();
					const audioProperty = AudioConfig.targets[idx].pos.filter(
						(pos) => currentTime >= pos.time,
					);

					if (audioProperty.length) {
						const last = audioProperty[audioProperty.length - 1];
						setVoIndex(last.index);
					}
				}
			}
		});
	};

	const onload = (e) => {
		// load mp3 one by one
		if (e === AudioConfig.targets.length - 1) {
			if (bgmRef.current) return;
			bgmRef.current = new Howl({
				src: [AudioConfig.bgm],
				autoplay: false,
				loop: true,
				volume: AudioConfig.defaultVolume,
				onload: onloadBGM,
			});
		} else {
			setTarget((S) => {
				const { length } = S;
				const u = AudioConfig.targets[length];
				if (u) return [...S, u];
				return S;
			});
		}
		setContext({ type: ACTION.payLoad, state: { ...payLoad, audio: audio + 1 } });
	};

	useEffect(() => {
		// howler loader
		if (targets.length > AudioConfig.targets.length) return;
		if (targets.length > 0) {
			const idx = targets.length - 1 < 0 ? 0 : targets.length - 1;
			audioRef.current.push(
				new Howl({
					src: [targets[idx].url],
					autoplay: false,
					loop: false,
					onload: () => onload(idx),
					onplay: () => {
						stateRef.current = STATE.playing;
					},
					onpause: () => {
						stateRef.current = STATE.pause;
					},
					onend: () => {
						stateRef.current = STATE.end;
						if (!mutedRef.current) {
							bgmRef.current.fade(AudioConfig.minScaleVolume, AudioConfig.defaultVolume, 1000);
						}
					},
				}),
			);
		}
	}, [targets]);

	return children;
});
export default AudioProvider;
