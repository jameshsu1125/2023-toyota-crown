import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';

const Gradient = memo(({ videoStop }) => {
	const [style, setStyle] = useTween({ opacity: 0, height: '0px' });
	useEffect(() => {
		if (videoStop) {
			setStyle({ opacity: 1, height: '211px' }, { delay: 500 });
		}
	}, [videoStop]);

	return <div style={style} className='Gradient' />;
});
export default Gradient;
