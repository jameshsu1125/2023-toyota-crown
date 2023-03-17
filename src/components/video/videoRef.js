import UserAgent from 'lesca-user-agent';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const VideoRef = forwardRef(({ onload, onEnded, url }, ref) => {
	const videoRef = useRef();

	useImperativeHandle(ref, () => ({
		setSize({ width, height }) {
			if (videoRef.current.style.display === 'block') {
				videoRef.current.width = width;
				videoRef.current.height = height;
				videoRef.current.style.width = `${width}px`;
				if (UserAgent.get() === 'desktop') videoRef.current.style.height = 'auto';
				else videoRef.current.style.height = 'inherit';
			}
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
		replay() {
			videoRef.current.currentTime = 0;
			videoRef.current.play();
		},
		play() {
			if (videoRef.current.currentTime !== videoRef.current.duration) videoRef.current.play();
		},
		playPause() {
			if (videoRef.current.paused) {
				if (videoRef.current.currentTime !== videoRef.current.duration) videoRef.current.play();
			} else videoRef.current.pause();
		},
		muted(bool) {
			videoRef.current.muted = bool;
		},
		getTime() {
			return videoRef.current.currentTime;
		},
		getTotal() {
			return videoRef.current.duration;
		},
		show() {
			videoRef.current.style.display = 'block';
		},
		hide() {
			videoRef.current.style.display = 'none';
		},
		isPlaying() {
			return videoRef.current.style.display === 'block';
		},
		getURL() {
			return url;
		},
	}));

	return (
		<video
			ref={videoRef}
			playsInline
			muted
			autoPlay
			preload='auto'
			style={{ display: 'none' }}
			onLoadedData={(event) => {
				event.target.pause();
				event.target.setAttribute('autoplay', false);
				onload?.({ event, url });
			}}
			onEnded={(event) => {
				onEnded?.({ event, url });
			}}
		>
			<track kind='captions' />
			<source src={url} type='video/mp4' />
		</video>
	);
});

export default VideoRef;
