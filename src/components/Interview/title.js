import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { PAGE_CONTEXT_NAME } from '../../settings/constant';

const Title = memo(({ videoStop, index }) => {
	const ref = useRef();

	const [style, setStyle] = useTween({ opacity: 0, y: 30 });
	useEffect(() => {
		if (videoStop && index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 1, y: 0 }, { delay: 300 });
		} else if (index !== PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0 });
		}
	}, [videoStop, index]);

	return (
		<div className='pointer-events-none absolute top-0 flex h-full w-full justify-center'>
			<div style={style} className='title'>
				<div ref={ref} className='gradient' />
			</div>
		</div>
	);
});

export default Title;
