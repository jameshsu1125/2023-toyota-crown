import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { PAGE_CONTEXT_NAME } from '../../settings/constant';
import { videoFusionDelay } from './setting';

const DarkScreen = memo(({ active, index }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (active && index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle(
				{ opacity: 1 },
				{
					delay: videoFusionDelay,
				},
			);
		}
	}, [active, index]);
	return <div ref={ref} style={style} className='absolute top-0 h-full w-full bg-black' />;
});
export default DarkScreen;
