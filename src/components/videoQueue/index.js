import { CoverSize } from 'lesca-number';
import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATE, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';
import VideoURL from './video/combinedVideo3.mp4';

const VideoQueue = memo(() => {
	const [context, setContext] = useContext(Context);
	const { status } = context[ACTION.payLoad];
	const [tweenStyle, setTweenStyle] = useState(false);

	const ref = useRef();
	const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const resize = () => {
			const { width, height } = CoverSize(
				{ width: 1920, height: 1080 },
				{ width: window.innerWidth, height: window.innerHeight },
			);
			setSize({ width, height });
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.onLoaded) {
			setTweenStyle({ opacity: 1 });
		} else if (status === PAYLOAD_STATUS.onContextDidFadeIn) {
			// ref.current.muted = false;
			// ref.current.currentTime = 4.5;
			// ref.current.style.opacity = 1;
		}
	}, [status]);

	const onTimeUpdate = (e) => {
		const { currentTime } = e.target;
		if (currentTime >= 5) {
			setContext({
				type: ACTION.payLoad,
				state: { ...PAYLOAD_STATE, status: PAYLOAD_STATUS.onContextDidFadeIn },
			});
		} else if (currentTime >= 24) {
			ref.current.pause();
		}
	};

	return (
		<div className='VideoQueue absolute flex h-full w-full items-center justify-center'>
			<TweenProvider
				defaultStyle={{ opacity: 0 }}
				tweenStyle={tweenStyle}
				options={{
					duration: 5000,
					delay: 1000,
					onStart: () => {
						ref.current.play();
					},
				}}
			>
				<video
					ref={ref}
					playsInline
					muted
					autoPlay
					preload='auto'
					onLoadedData={(e) => {
						e.target.pause();
					}}
					onTimeUpdateCapture={onTimeUpdate}
					width={size.width}
					height={size.height}
				>
					<track kind='captions' />
					<source src={VideoURL} type='video/mp4' />
				</video>
			</TweenProvider>
			<div className='absolute top-0 left-0 h-full w-full bg-black opacity-80' />
		</div>
	);
});
export default VideoQueue;
