import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { InterviewState } from './setting';

const Title = memo(({ state }) => {
	const ref = useRef();

	const [style, setStyle] = useTween({ opacity: 0, y: 30 });
	useEffect(() => {
		if (state === InterviewState.videoDidFadeOut) {
			setStyle({ opacity: 1, y: 0 }, { delay: 300 });
		} else if (state === InterviewState.userDidGoAway) {
			setStyle({ opacity: 0 });
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
