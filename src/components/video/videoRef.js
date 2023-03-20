import { forwardRef, useImperativeHandle, useRef } from 'react';
import { VideoConfig } from '../../settings/config';

const VideoRef = forwardRef(({ onload, onEnded, url }, ref) => {
	const videoRef = useRef();

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
			if (videoRef.current.currentTime !== videoRef.current.duration) videoRef.current.play();

			// TODO remove it before publish
			if (url === VideoConfig.targets[0].url && window.location.hash === '#introVideoDidPlayed') {
				setTimeout(() => {
					videoRef.current.play();
				}, 200);
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
