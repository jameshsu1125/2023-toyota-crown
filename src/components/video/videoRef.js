import { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { EventContext } from '../../settings/config';

const VideoRef = forwardRef(({ onload, onEnded, url }, ref) => {
	const [, setEventContext] = useContext(EventContext);
	const videoRef = useRef(undefined);
	const videoState = useRef();
	const videoStopRef = useRef(false);

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
			videoStopRef.current = false;
			setEventContext((S) => ({ ...S, videoStop: false }));
		},
		play() {
			if (videoRef.current.currentTime !== videoRef.current.duration) {
				videoRef.current.play();
				videoStopRef.current = false;
				setEventContext((S) => ({ ...S, videoStop: false }));
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
			videoState.current = 'end';
			onEnded?.({ url });
		},
		getState() {
			return videoState.current;
		},
		url,
		setStopState() {
			videoStopRef.current = true;
		},
		getStopState() {
			return videoStopRef.current;
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
			onPlay={() => {
				videoState.current = 'playing';
			}}
			onPause={() => {
				videoState.current = 'pause';
			}}
			onLoadedData={(event) => {
				event.target.pause();
				event.target.setAttribute('autoplay', false);
				onload?.({ event, url });
			}}
			onEnded={(event) => {
				videoState.current = 'end';
				onEnded?.({ event, url });
			}}
		>
			<source src={url} type='video/mp4' />
		</video>
	);
});

export default VideoRef;