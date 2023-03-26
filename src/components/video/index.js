import { CoverSize } from 'lesca-number';
import useTween from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AudioConfig, BreakPoint, Context, VideoConfig } from '../../settings/config';
import { ACTION, DIRECTION_STATE, PAGE_CONTEXT_NAME } from '../../settings/constant';
import DarkScreen from './darkScreen';
import './index.less';
import VideoRef from './videoRef';

let fixVideoOnEndBug = true;

const Video = memo(({ onLoaded, onEnded, onStop, fadeIn = false, test = false }) => {
	const [context, setContext] = useContext(Context);
	const { stopForward, index, direction } = context[ACTION.page];

	const audio = context[ACTION.audio];
	const { content } = audio;

	const [targets, setTarget] = useState([VideoConfig.targets[0]]);
	const videoRef = useRef([]);
	const darkScreenRef = useRef();
	const indexRef = useRef(index);

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (content.length === AudioConfig.targets.length + 1) {
			setTarget((S) => {
				const { length } = S;
				const u = VideoConfig.targets[length];
				if (u) return [...S, u];
				return S;
			});
		}
	}, [content]);

	useEffect(() => {
		if (test) {
			videoRef.current[PAGE_CONTEXT_NAME.intro].hide();
			videoRef.current[PAGE_CONTEXT_NAME.detailVideo].show();
			videoRef.current[PAGE_CONTEXT_NAME.detailVideo].play();
			darkScreenRef.current.play();
		}
	}, [test]);

	useEffect(() => {
		if (fadeIn) videoRef.current[PAGE_CONTEXT_NAME.intro].play();
	}, [fadeIn]);

	const onload = () => {
		onLoaded(targets[targets.length - 1]);

		if (targets.length === PAGE_CONTEXT_NAME.content_2) {
			videoRef.current[PAGE_CONTEXT_NAME.intro].show();
		} else if (targets.length === VideoConfig.targets.length) {
			setContext({ type: ACTION.video, state: videoRef.current });
		} else {
			setTarget((S) => {
				const { length } = S;
				const u = VideoConfig.targets[length];
				if (u) return [...S, u];
				return S;
			});
		}

		// if (targets.length === VideoConfig.targets.length) {
		// 	videoRef.current[PAGE_CONTEXT_NAME.intro].show();
		// 	setContext({ type: ACTION.video, state: videoRef.current });
		// } else {
		// 	setTarget((S) => {
		// 		const { length } = S;
		// 		const u = VideoConfig.targets[length];
		// 		if (u) return [...S, u];
		// 		return S;
		// 	});
		// }
	};

	useEffect(() => {
		// 重新設定影片尺寸
		const videoSize =
			window.innerWidth >= BreakPoint ? { width: 1680, height: 945 } : { width: 590, height: 1050 };
		const resize = () => {
			const size = CoverSize(videoSize, { width: window.innerWidth, height: window.innerHeight });
			videoRef.current.forEach((e) => e.setSize(size));
		};
		if (targets.length === VideoConfig.targets.length) {
			resize();
			window.addEventListener('resize', resize);
		}
		return () => window.removeEventListener('resize', resize);
	}, [targets]);

	useEffect(() => {
		if (stopForward) {
			let idx = index;
			if (direction === DIRECTION_STATE.next) idx -= 1;
			else idx += 1;
			videoRef.current[idx].play();
			darkScreenRef.current.play();
		}
	}, [stopForward]);

	const onend = useCallback(() => {
		if (!fixVideoOnEndBug) return;
		fixVideoOnEndBug = false;

		onEnded?.();

		let idx = index;
		if (direction === DIRECTION_STATE.next) idx -= 1;
		else idx += 1;

		videoRef.current[idx].hide();
		videoRef.current[index].show();
		videoRef.current[index].replay();
		darkScreenRef.current.play();
		indexRef.current = index;

		setTimeout(() => {
			fixVideoOnEndBug = true;
		}, 500);
	}, [index]);

	/* useEffect(() => {
		const blur = () => {
			if (videoRef.current[indexRef.current].getState() === 'playing') {
				videoRef.current[indexRef.current].pause();
			}
		};

		const focus = () => {
			if (videoRef.current[indexRef.current].getState() === 'pause') {
				if (!videoRef.current[indexRef.current].getStopState()) {
					videoRef.current[indexRef.current].play();
				}
			}
		};
		window.addEventListener('blur', blur);
		window.addEventListener('focus', focus);
		return () => {};
	}, []); */

	useEffect(() => {
		if (fadeIn) {
			setStyle({ opacity: 1 }, { duration: VideoConfig.fadeInDuration });
		} else {
			setStyle({ opacity: 0 });
		}
	}, [fadeIn]);

	return (
		<div style={style} className='Video'>
			{targets.map((e, i) => (
				<VideoRef
					ref={(target) => {
						videoRef.current[i] = target;
					}}
					key={e.url}
					url={e.url}
					onload={onload}
					onEnded={onend}
				/>
			))}
			<DarkScreen ref={darkScreenRef} videoRef={videoRef} onStop={onStop} />
		</div>
	);
});
export default Video;
