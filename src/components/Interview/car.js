import { CoverSize } from 'lesca-number';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import './index.less';
import { InterviewState } from './setting';

// 960x401
// 422x176

const Image = ({ children, state }) => {
	const [style, setStyle] = useTween({ width: '960px', height: '401px' });
	useEffect(() => {
		if (state === InterviewState.buttonDidClick) {
			setStyle({ width: '422px', height: '176px' }, { easing: Bezier.easeInOutQuart });
		}
	}, [state]);
	return (
		<div style={style} className='image'>
			{children}
		</div>
	);
};

const Car = memo(({ children, videoStop, state }) => {
	const vehicleRef = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: 30 });

	useEffect(() => {
		if (videoStop) {
			setStyle({ opacity: 1, y: 0 }, { delay: 600 });
		}
	}, [videoStop]);

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
			<Image state={state}>{children}</Image>
		</div>
	);
});
export default Car;
