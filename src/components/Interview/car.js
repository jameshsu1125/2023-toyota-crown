import { CoverSize } from 'lesca-number';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';
import { InterviewState } from './setting';

const Image = ({ children, state, setState }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ width: '960px', height: '401px', y: 0 });
	useEffect(() => {
		if (state === InterviewState.buttonDidClick) {
			setStyle(
				{ width: '422px', height: '176px', y: 190 },
				{
					easing: Bezier.easeInOutQuart,
					onComplete: () => {
						setState(InterviewState.carDidGoDown);
					},
				},
			);
		}
	}, [state]);
	return (
		<div ref={ref} style={style} className='image'>
			{children}
		</div>
	);
};

const Car = memo(({ children, videoStop, state, setState, index }) => {
	const vehicleRef = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: 30 });

	useEffect(() => {
		if (videoStop && index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 1, y: 0 }, { delay: 600 });
		}
	}, [videoStop, index]);

	useEffect(() => {
		const resize = () => {
			const { width, height } = CoverSize(
				{ width: 1920, height: 1080 },
				{ width: window.innerWidth, height: window.innerHeight },
			);
			vehicleRef.current.style.width = `${width}px`;
			vehicleRef.current.style.height = `${height}px`;
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<div style={style} ref={vehicleRef} className='vehicle'>
			<Image state={state} setState={setState} index={index}>
				{children}
			</Image>
		</div>
	);
});
export default Car;
