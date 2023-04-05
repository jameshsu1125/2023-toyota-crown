import { CoverSize } from 'lesca-number';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect, useMemo, useRef } from 'react';
import { BreakPoint } from '../../settings/config';
import './index.less';
import { InterviewState } from './setting';

const DEVICE = window.innerWidth >= BreakPoint;
const DefaultTweenProperty = {
	width: '960px',
	height: '401px',
	y: 0,
	scale: DEVICE ? 1 : 0.58,
};

const Image = ({ children, state, setState }) => {
	const ref = useRef();
	const [style, setStyle] = useTween(DefaultTweenProperty);

	const tweenProps = useMemo(() => {
		if (DEVICE) return { width: '422px', height: '176px', y: 190 };
		return { width: '720px', height: '301px', y: 150 };
	}, []);

	useEffect(() => {
		if (state === InterviewState.buttonDidClick) {
			setStyle(tweenProps, {
				easing: Bezier.easeInOutQuart,
				onComplete: () => {
					setState(InterviewState.carDidGoDown);
				},
			});
		}
	}, [state]);
	return (
		<div ref={ref} style={style} className='image'>
			{children}
		</div>
	);
};

const Car = memo(({ children, state, setState }) => {
	const vehicleRef = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: 30 });

	useEffect(() => {
		if (state === InterviewState.videoDidFadeOut) {
			setStyle({ opacity: 1, y: 0 });
		}
	}, [state]);

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
			<Image state={state} setState={setState}>
				{children}
			</Image>
		</div>
	);
});
export default Car;
