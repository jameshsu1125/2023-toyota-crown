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

const AudioProvider = memo(({ children }) => {
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { video, audio, status } = payLoad;

	const page = context[ACTION.page];
	const { index, onend, skip } = page;

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
		mutedRef.current = muted;
	}, [muted]);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.userDidActive) {
			bgmRef.current.play();
		}
	}, [status]);

	useEffect(() => {
		if (skip) {
			setVoIndex(false);
			audioRef.current[lastIndex.current].stop();
		}
	}, [skip]);

	useEffect(() => {
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
		return () => {};
	}, []);

	useEffect(() => {
		if (voIndex !== false) {
			setContext({ type: ACTION.page, state: { ...page, voIndex } });
		}
	}, [voIndex]);

	useEffect(() => {
		indexRef.current = index;
		if (onend) {
			const idx = index - 1;
			if (idx < 0 || idx >= AudioConfig.targets.length) return;

			setTimeout(() => {
				audioRef.current[idx].seek(0);
				if (!mutedRef.current) {
					audioRef.current[idx]?.fade(0, 1, 1000);
					bgmRef.current.fade(AudioConfig.defaultVolume, AudioConfig.minScaleVolume, 1000);
				}
				audioRef.current[idx]?.play();
				lastIndex.current = idx;
				setContext({ type: ACTION.page, state: { ...page, skipEnabled: true } });
			}, AudioConfig.delay);
		}
	}, [index, onend]);

	useEffect(() => {
		if (video === VideoConfig.targets.length) {
			// TODO => setLoading
			setTarget([AudioConfig.targets[0]]);
		}
	}, [video]);

	const onloadBGM = () => {
		setContext({ type: ACTION.payLoad, state: { ...payLoad, bgm: 1 } });
		setContext({
			type: ACTION.audio,
			state: { ...AUDIO_STATE, content: [...audioRef.current, bgmRef.current] },
		});
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
		if (e === AudioConfig.targets.length - 1) {
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
		if (targets.length > 0) {
			const idx = targets.length - 1 < 0 ? 0 : targets.length - 1;
			audioRef.current[idx] = new Howl({
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
			});
		}
	}, [targets]);

	return children;
});
export default AudioProvider;
