import { CoverSize } from 'lesca-number';
import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';
import VideoURL from './video/combinedVideo.mp4';

const VideoQueue = memo(() => {
	const [context] = useContext(Context);
	const { status } = context[ACTION.payLoad];
	const [tweenStyle, setTweenStyle] = useState(false);

	const ref = useRef();
	const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const resize = () => {
			const { width, height } = CoverSize(
				{ width: 1920, height: 1080 },
				{ width: window.innerWidth, height: window.innerWidth },
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
		}
	}, [status]);

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
				<video ref={ref} muted width={size.width} height={size.height}>
					<track kind='captions' />
					<source src={VideoURL} type='video/mp4' />
				</video>
			</TweenProvider>
		</div>
	);
});
export default VideoQueue;
