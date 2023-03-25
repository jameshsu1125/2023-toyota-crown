import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { VideoConfig } from '../../settings/config';
import { PAGE_CONTEXT_NAME } from '../../settings/constant';
import { InterviewState } from './setting';

const DarkScreen = memo(({ active, video, setState }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (active) {
			const onstart = () => {
				setStyle(
					{ opacity: 1 },
					{
						duration: 500,
						onComplete: () => {
							setState(InterviewState.videoDidFadeOut);
						},
					},
				);
			};
			const frame = () => {
				const time = video[PAGE_CONTEXT_NAME.detailVideo].getTime();
				const total = video[PAGE_CONTEXT_NAME.detailVideo].getTotal();
				const startTime = time > total - VideoConfig.transitionDuration * 0.002;
				if (!startTime) requestAnimationFrame(frame);
				else onstart();
			};
			frame();
		}
	}, [active]);

	return <div ref={ref} style={style} className='absolute top-0 h-full w-full bg-black' />;
});
export default DarkScreen;
