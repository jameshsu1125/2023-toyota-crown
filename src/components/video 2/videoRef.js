import { forwardRef, useImperativeHandle, useRef } from 'react';
import UserAgent from 'lesca-user-agent';
import VideoURL from './video/video.mp4';

const VideoRef = forwardRef(({ onload }, ref) => {
	const videoRef = useRef();

	useImperativeHandle(ref, () => ({
		setSize({ width, height }) {
			videoRef.current.width = width;
			videoRef.current.height = height;
			videoRef.current.style.width = `${width}px`;
			if (UserAgent.get() === 'desktop') videoRef.current.style.height = 'auto';
			else videoRef.current.style.height = 'inherit';
		},
		seek(time) {
			videoRef.current.currentTime = time;
		},
		nextFrame() {
			const { currentTime } = videoRef.current;
			videoRef.current.currentTime = currentTime - 0.01;
		},
		prevFrame() {
			const { currentTime } = videoRef.current;
			videoRef.current.currentTime = currentTime + 0.01;
		},
		pause() {
			videoRef.current.pause();
		},
		play() {
			videoRef.current.play();
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
		<video
			ref={videoRef}
			playsInline
			muted
			autoPlay
			preload='auto'
			onLoadedData={(e) => {
				e.target.pause();
				e.target.setAttribute('autoplay', false);
				onload?.(e);
			}}
		>
			<track kind='captions' />
			<source src={VideoURL} type='video/mp4' />
		</video>
	);
});

export default VideoRef;
