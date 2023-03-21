import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const VideoRef = forwardRef(({ onload, onEnded, url }, ref) => {
	const videoRef = useRef(undefined);
	const videoState = useRef();

	useEffect(() => {
		videoRef.current.defaultMuted = true;
	});

	useImperativeHandle(ref, () => ({
		setSize({ width, height }) {
			videoRef.current.width = width;
			videoRef.current.height = height;
			videoRef.current.style.width = `${width}px`;
			videoRef.current.style.height = `${height}px`;
			videoRef.current.style.maxWidth = `${width}px`;
			videoRef.current.style.maxHeight = `${height}px`;
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
			if (videoRef.current.currentTime !== videoRef.current.duration) {
				videoRef.current.play();
			}
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
			videoRef.current.pause();
		},
		isPlaying() {
			return videoState.current === 'playing';
		},
		getURL() {
			return url;
		},
		skip() {
			videoRef.current.currentTime = videoRef.current.duration;
		},
		url,
	}));

	return (
		<video
			ref={videoRef}
			playsInline
			muted
			autoPlay
			preload='auto'
			style={{ display: 'none' }}
			onPlay={() => {
				// console.log(url, 'playing');
				videoState.current = 'playing';
			}}
			onPause={() => {
				// console.log(url, 'pause');
				videoState.current = 'pause';
			}}
			onLoadedData={(event) => {
				event.target.pause();
				event.target.setAttribute('autoplay', false);
				onload?.({ event, url });
			}}
			onEnded={(event) => {
				// console.log(url, 'end');
				videoState.current = 'end';
				onEnded?.({ event, url });
			}}
		>
			<source src={url} type='video/mp4' />
		</video>
	);
});

export default VideoRef;
