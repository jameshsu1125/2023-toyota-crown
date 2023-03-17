import BezierEasing from 'bezier-easing';
import EnterFrame from 'lesca-enterframe';
import { CoverSize } from 'lesca-number';
import { Bezier } from 'lesca-use-tween';
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { Context, VideoConfig } from '../../settings/config';
import { ACTION, PAGE_STATE } from '../../settings/constant';
import DarkScreen from './darkScreen';
import './index.less';
import VideoRef from './videoRef';

const Video = forwardRef(({ onVideoDown, onload }, ref) => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, direction } = page;

	const videoRef = useRef();
	const screenRef = useRef();
	const indexRef = useRef({
		lastIndex: PAGE_STATE.index,
		index: PAGE_STATE.index,
		do: 0,
		direction,
	});

	useEffect(() => {
		// 重新設定影片尺寸
		const resize = () => {
			const size = CoverSize(
				{ width: 1920, height: 1080 },
				{ width: window.innerWidth, height: window.innerHeight },
			);
			videoRef.current?.setSize(size);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	useEffect(() => {
		indexRef.current.index = index;
		indexRef.current.direction = direction;
		if (indexRef.current.do > 0) {
			EnterFrame.play();
			videoRef.current.play();
		}
		indexRef.current.do += 1;
	}, [index]);

	useEffect(() => {
		EnterFrame.add(() => {
			const currentTime = videoRef.current.getTime();
			const { transitionDuration: duration } = VideoConfig;

			// 設定影片FadeIn | FadeOut
			const [checkPoint] = VideoConfig.checkPoint.filter((e) => {
				if (currentTime > e - duration * 0.001 && currentTime < e + duration * 0.001) return true;
				return false;
			});

			if (checkPoint) {
				const min = checkPoint - duration * 0.001;
				const max = checkPoint + duration * 0.001;
				const property = {
					percent: (currentTime - checkPoint) / (max - checkPoint),
					easingFunction: Bezier.easeInSine,
				};
				if (currentTime < checkPoint) {
					property.percent = (currentTime - min) / (checkPoint - min);
					property.easingFunction = Bezier.easeOutQuart;
				}
				const easing = BezierEasing(
					property.easingFunction[0],
					property.easingFunction[1],
					property.easingFunction[2],
					property.easingFunction[3],
				);
				const opacity =
					currentTime < checkPoint ? easing(property.percent) : 1 - easing(property.percent);
				screenRef.current.opacity(opacity);

				// 設定停止畫面
				const { index: idx, lastIndex: lastIdx } = indexRef.current;
				const stopTime = VideoConfig.checkPoint[idx] - VideoConfig.transitionDuration * 0.0011;

				if (currentTime > stopTime) {
					videoRef.current.pause();
					EnterFrame.stop();
					onVideoDown?.(idx);
					indexRef.current.lastIndex = idx;
				}
			}

			// 設定停止畫面
			// const stopTime =
			// 	VideoConfig.checkPoint[indexRef.current.index] - VideoConfig.transitionDuration * 0.0011;
			// console.log(stopTime);

			// // if (indexRef.current.direction === DIRECTION_STATE.next) {
			// if (currentTime > stopTime) {
			// 	videoRef.current.pause();
			// 	EnterFrame.stop();
			// 	onVideoDown?.(indexRef.current.index);
			// }
			// } else {
			// }

			// 設定是否跳轉
			// const endTime = VideoConfig.checkPoint[indexRef.current.lastIndex];
			// if (currentTime > endTime) {
			// 	if (indexRef.current.lastIndex > indexRef.current.index) {
			// 		const time = index < 0 ? 0 : VideoConfig.checkPoint[index];
			// 		videoRef.current.seek(time);
			// 		indexRef.current.lastIndex = indexRef.current.index;
			// 	}
			// }
		});
		EnterFrame.play();
	}, []);

	useImperativeHandle(ref, () => ({
		resume() {
			EnterFrame.play();
			videoRef.current.play();
		},
		seek(time) {
			videoRef.current.seek(time);
		},
		nextFrame() {
			const { currentTime } = videoRef.current;
			videoRef.current.nextFrame(currentTime - 0.01);
		},
		prevFrame() {
			const { currentTime } = videoRef.current;
			videoRef.current.prevFrame(currentTime + 0.01);
		},
		playPause() {
			videoRef.current.playPause();
		},
		muted(bool) {
			videoRef.current.muted(bool);
		},
		getTime() {
			return videoRef.current.getTime();
		},
	}));

	return (
		<div className='Video'>
			<VideoRef ref={videoRef} onload={onload} />
			<DarkScreen ref={screenRef} />
		</div>
	);
});

export default Video;
