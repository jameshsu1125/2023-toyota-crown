import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';

const Title = memo(({ state }) => {
	const ref = useRef();

	const [style, setStyle] = useTween({ opacity: 0, y: 30 });
	useEffect(() => {
		if (state) {
			setStyle({ opacity: 1, y: 0 });
		}
	}, [state]);

	return (
		<div className='pointer-events-none absolute top-0 flex h-full w-full justify-center'>
			<div style={style} className='title'>
				<div ref={ref} className='gradient' />
			</div>
		</div>
	);
});

export default Title;
