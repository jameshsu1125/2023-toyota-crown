import { CoverSize } from 'lesca-number';
import { TweenProvider } from 'lesca-use-tween';
import { memo, useEffect, useRef, useState } from 'react';
import { VideoConfig } from '../../settings/config';
import { PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';
import VideoRef from './videoRef';

const Video = memo(({ onLoaded, fadeIn = false, onEnded }) => {
	const [url, setUrl] = useState([VideoConfig.urls[0]]);
	const ref = useRef([]);

	const onload = () => {
		if (url.length === VideoConfig.urls.length) {
			ref.current[PAGE_CONTEXT_NAME.intro].show();
			onLoaded();
		} else {
			setUrl((S) => {
				const { length } = S;
				const u = VideoConfig.urls[length];
				if (u) return [...S, u];
				return S;
			});
		}
	};

	useEffect(() => {
		// 重新設定影片尺寸
		const resize = () => {
			const size = CoverSize(
				{ width: 1920, height: 1080 },
				{ width: window.innerWidth, height: window.innerHeight },
			);
			ref.current.forEach((e) => e.setSize(size));
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<TweenProvider
			defaultStyle={{ ...VideoConfig.offset, opacity: 0 }}
			tweenStyle={{
				...Object.fromEntries(
					Object.entries(VideoConfig.offset).map((e) => [e[0], e[0] === 'scale' ? 1 : 0]),
				),
				opacity: 1,
			}}
			options={{
				duration: VideoConfig.fadeInDuration,
				onStart: () => {
					ref.current[PAGE_CONTEXT_NAME.intro].play();
				},
			}}
			active={fadeIn}
		>
			<div className='Video'>
				{url.map((e, index) => (
					<VideoRef
						ref={(target) => {
							ref.current[index] = target;
						}}
						key={e}
						url={e}
						onload={onload}
						onEnded={onEnded}
					/>
				))}
			</div>
		</TweenProvider>
	);
});
export default Video;
