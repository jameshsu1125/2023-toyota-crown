import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { videoFusionDelay } from './setting';

const DarkScreen = memo(({ active }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (active) {
			setStyle({ opacity: 1 }, { delay: videoFusionDelay });
		}
	}, [active]);
	return <div style={style} className='absolute top-0 h-full w-full bg-black' />;
});
export default DarkScreen;
