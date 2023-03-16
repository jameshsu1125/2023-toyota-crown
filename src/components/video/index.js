import BezierEasing from 'bezier-easing';
import EnterFrame from 'lesca-enterframe';
import { CoverSize } from 'lesca-number';
import { Bezier, TweenProvider } from 'lesca-use-tween';
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Context, VideoConfig } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import DarkScreen from './darkScreen';
import './index.less';
import VideoURL from './video/video.mp4';

const Video = forwardRef(({ onLoaded }, ref) => {
	const [context, setContext] = useContext(Context);
	const { status } = context[ACTION.payLoad];
	const page = context[ACTION.page];
	const { index } = page;
	const indexRef = useRef(index);

	const [tweenStyle, setTweenStyle] = useState(false);

	const videoRef = useRef();
	const screenRef = useRef();
	const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		indexRef.current = index;
	}, [index]);

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
		EnterFrame.add(() => {
			const { currentTime } = videoRef.current;
			const { transitionDuration } = VideoConfig;
			const [checkPoint] = VideoConfig.checkPoint.filter((e) => {
				if (
					currentTime > e - transitionDuration * 0.001 &&
					currentTime < e + transitionDuration * 0.001
				) {
					return true;
				}
				return false;
			});
			if (checkPoint) {
				const min = checkPoint - transitionDuration * 0.001;
				const max = checkPoint + transitionDuration * 0.001;
				let opacity = 0;
				if (currentTime < checkPoint) {
					const percent = (currentTime - min) / (checkPoint - min);
					const easingFunction = Bezier.easeOutQuart;
					const easing = BezierEasing(
						easingFunction[0],
						easingFunction[1],
						easingFunction[2],
						easingFunction[3],
					);
					opacity = easing(percent);
				} else {
					const percent = (currentTime - checkPoint) / (max - checkPoint);
					const easingFunction = Bezier.easeInSine;
					const easing = BezierEasing(
						easingFunction[0],
						easingFunction[1],
						easingFunction[2],
						easingFunction[3],
					);
					opacity = 1 - easing(percent);
				}
				screenRef.current.opacity(opacity);
			}
			const stopTime =
				VideoConfig.checkPoint[indexRef.current] - VideoConfig.transitionDuration * 0.0011;
			if (currentTime > stopTime) {
				videoRef.current.pause();
				EnterFrame.stop();
			}
		});
	}, []);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.userDidActive) {
			setTweenStyle({ opacity: 1 }, { duration: 2000, easing: Bezier.easeOutQuart });
			EnterFrame.play();
		}
	}, [status]);

	useImperativeHandle(ref, () => ({
		resume() {
			EnterFrame.play();
			videoRef.current.play();
		},
		seek(time) {
			videoRef.current.currentTime = time;
		},
		next() {
			const { currentTime } = videoRef.current;
			videoRef.current.currentTime = currentTime - 0.01;
		},
		prev() {
			const { currentTime } = videoRef.current;
			videoRef.current.currentTime = currentTime + 0.01;
		},
		playPause() {
			if (videoRef.current.paused) videoRef.current.play();
			else videoRef.current.pause();
		},
		muted(bool) {
			videoRef.current.muted = bool;
		},
		getTime() {
			return videoRef.current.currentTime;
		},
	}));

	return (
		<div className='Video'>
			<TweenProvider
				defaultStyle={{ opacity: 0 }}
				tweenStyle={tweenStyle}
				options={{
					duration: 5000,
					delay: 1000,
					onStart: () => {
						videoRef.current.play();
					},
				}}
			>
				<video
					ref={videoRef}
					playsInline
					muted
					autoPlay
					preload='auto'
					onLoadedData={(e) => {
						e.target.pause();
						onLoaded?.();
					}}
					width={size.width}
					height={size.height}
				>
					<track kind='captions' />
					<source src={VideoURL} type='video/mp4' />
				</video>
				<DarkScreen ref={screenRef} />
			</TweenProvider>
		</div>
	);
});

export default Video;
