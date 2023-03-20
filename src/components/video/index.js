import { CoverSize } from 'lesca-number';
import { TweenProvider } from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Context, VideoConfig } from '../../settings/config';
import { ACTION, DIRECTION_STATE, PAGE_CONTEXT_NAME } from '../../settings/constant';
import DarkScreen from './darkScreen';
import './index.less';
import VideoRef from './videoRef';

const Video = memo(({ onLoaded, onEnded, onStop, fadeIn = false }) => {
	const [context] = useContext(Context);
	const { stopForward, index, direction } = context[ACTION.page];

	const [targets, setTarget] = useState([VideoConfig.targets[0]]);
	const videoRef = useRef([]);
	const darkScreenRef = useRef();

	useEffect(() => {
		if (fadeIn) videoRef.current[PAGE_CONTEXT_NAME.intro].play();
	}, [fadeIn]);

	const onload = () => {
		onLoaded(targets[targets.length - 1]);
		if (targets.length === VideoConfig.targets.length) {
			videoRef.current[PAGE_CONTEXT_NAME.intro].show();
		} else {
			setTarget((S) => {
				const { length } = S;
				const u = VideoConfig.targets[length];
				if (u) return [...S, u];
				return S;
			});
		}
	};

	useEffect(() => {
		// 重新設定影片尺寸
		const resize = () => {
			const size = CoverSize(
				{ width: 1920, height: 1080 },
				{ width: window.innerWidth, height: window.innerHeight },
			);
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
		onEnded?.();

		let idx = index;
		if (direction === DIRECTION_STATE.next) idx -= 1;
		else idx += 1;

		videoRef.current[idx].hide();
		videoRef.current[index].show();
		videoRef.current[index].replay();
	}, [index]);

	return (
		<TweenProvider
			defaultStyle={{ ...VideoConfig.offset, opacity: 0 }}
			tweenStyle={{
				...Object.fromEntries(
					Object.entries(VideoConfig.offset).map((e) => [e[0], e[0] === 'scale' ? 1 : 0]),
				),
				opacity: 1,
			}}
			options={{
				duration: VideoConfig.fadeInDuration,
			}}
			active={fadeIn}
		>
			<div className='Video'>
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
		</TweenProvider>
	);
});
export default Video;
