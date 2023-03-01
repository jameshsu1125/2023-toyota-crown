import { CoverSize } from 'lesca-number';
import {
	forwardRef,
	useContext,
	useEffect,
	useImperativeHandle,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { TestContext } from './config';
import './style.less';

const defaultProperty = {
	scrollTop: 0,
	total: 0,
	loaded: false,
	percent: 0,
	width: 1280,
	height: 678,
	isUpdate: false,
};

const Video = forwardRef((_, ref) => {
	const videoRef = useRef();

	const [context] = useContext(TestContext);
	const [video, setVideo] = useState(context.video);
	const [append, setAppend] = useState(false);
	const [property, setProperty] = useState(defaultProperty);

	const [touchProperty, setTouchProperty] = useState({
		sy: 0,
		ey: 0,
		isTouch: false,
	});

	const [videoSize, setVideoSize] = useState({
		width: 1280,
		height: 678,
		left: 0,
		top: 0,
	});

	useEffect(() => {
		setVideo(context.video);
		setProperty(defaultProperty);
		setTimeout(() => {
			setAppend(true);
		}, 100);
	}, [context.video]);

	useEffect(() => {
		const resize = () => {
			const offset = CoverSize(
				{ width: property.width, height: property.height },
				{ width: window.innerWidth, height: window.innerHeight },
			);
			setVideoSize(offset);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	useLayoutEffect(() => {
		if (videoRef.current) {
			if (!property.isUpdate) {
				const currentTimeCapture = Number(property.scrollTop.toFixed(2));
				if (videoRef.current.currentTime !== currentTimeCapture) {
					videoRef.current.currentTime = currentTimeCapture;
					setProperty((S) => ({ ...S, isUpdate: true }));
				}
			}
		}
	}, [property.isUpdate, property.scrollTop]);

	const onWheel = (event) => {
		const { deltaY } = event;
		setProperty((S) => {
			const offset = S.scrollTop + deltaY * 0.001;
			let scrollTop = offset < 0 ? 0 : offset;
			if (offset > S.total) scrollTop = S.total;
			const percent = (scrollTop / S.total) * 100;
			return { ...S, scrollTop, percent };
		});
	};

	useImperativeHandle(ref, () => ({
		unmount() {
			setAppend(false);
		},
	}));

	const onTouchMove = (e) => {
		const { isTouch, sy } = touchProperty;
		if (!isTouch) return;

		const [touchList] = e.touches;
		const { clientY } = touchList;
		const deltaY = sy - clientY;

		setProperty((S) => {
			const offset = S.scrollTop + deltaY * 0.001;
			let scrollTop = offset < 0 ? 0 : offset;
			if (offset > S.total) scrollTop = S.total;
			const percent = (scrollTop / S.total) * 100;
			return { ...S, scrollTop, percent };
		});
		touchProperty((S) => ({ ...S, sy: clientY }));
	};

	const onTimeUpdate = () => {
		// console.log(e.target.currentTime);
		setProperty((S) => ({ ...S, isUpdate: false, currentTimeCapture: true }));
	};

	return (
		<>
			{append && (
				<video
					playsInline
					muted
					preload='auto'
					autoPlay
					// onTimeUpdate={onTimeUpdate}
					onTimeUpdateCapture={onTimeUpdate}
					onLoadedData={(e) => {
						e.target.pause();
						setProperty((S) => ({ ...S, loaded: true, total: e.target.duration }));
					}}
					onTouchStart={(e) => {
						const [touchList] = e.touches;
						const { clientY } = touchList;
						setTouchProperty({ sy: clientY, ey: clientY, isTouch: true });
					}}
					onTouchMove={onTouchMove}
					onTouchEnd={() => {
						setTouchProperty((S) => ({ ...S, isTouch: false }));
					}}
					onWheel={property.loaded ? onWheel : () => {}}
					ref={videoRef}
					style={{
						width: videoSize.width,
						height: videoSize.height,
					}}
					className='max-h-none max-w-none'
				>
					<source type={video.type} src={video.url} />
					<track default kind='captions' />
				</video>
			)}
			<div className='videoMask pointer-events-none absolute top-0 hidden h-full w-full' />
			<div className='absolute bottom-0 h-10 w-full'>
				<div className='w-30 absolute -top-10 flex h-10 items-end overflow-hidden p-1 text-center'>
					{`${videoRef.current?.currentTime.toFixed(2)} / ${property.total || 0}`}
				</div>
				<div className='absolute top-0 h-full w-full bg-black opacity-50' />
				<div
					className='absolute top-0 h-full w-full bg-slate-300'
					style={{ width: `${property.percent}%` }}
				/>
			</div>
		</>
	);
});
export default Video;
