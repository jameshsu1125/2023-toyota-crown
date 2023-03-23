import { CoverSize } from 'lesca-number';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import './index.less';

const Car = memo(({ videoStop }) => {
	const vehicleRef = useRef();
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (videoStop) {
			setStyle({ opacity: 1 }, { delay: 600 });
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
			<div className='image' />
		</div>
	);
});
export default Car;
