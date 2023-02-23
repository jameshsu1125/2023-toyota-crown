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
	index: 0,
};

const Video = forwardRef((props, ref) => {
	const videoRef = useRef();

	const [context] = useContext(TestContext);
	const [video, setVideo] = useState(context.video);
	const [append, setAppend] = useState(true);
	const [property, setProperty] = useState(defaultProperty);

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
		if (videoRef.current && property.index % 3 === 0) {
			videoRef.current.currentTime = Number(property.scrollTop.toFixed(2));
		}
	}, [property.index, property.scrollTop]);

	const onWheel = (event) => {
		const { deltaY } = event;
		setProperty((S) => {
			const offset = S.scrollTop + deltaY * 0.001;
			let scrollTop = offset < 0 ? 0 : offset;
			if (offset > S.total) scrollTop = S.total;
			const percent = (scrollTop / S.total) * 100;
			const index = S.index + 1;
			return { ...S, scrollTop, percent, index };
		});
	};

	useImperativeHandle(ref, () => ({
		unmount() {
			setAppend(false);
		},
	}));

	return (
		<>
			{append && (
				<video
					preload='auto'
					onLoadedData={(e) => {
						setProperty((S) => ({ ...S, loaded: true, total: e.target.duration }));
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
			<div className='videoMask pointer-events-none absolute top-0 h-full w-full' />
			<div className='absolute bottom-0 h-10 w-full'>
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
