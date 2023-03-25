import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { InterviewState } from './setting';

const Gradient = memo(({ state }) => {
	const [style, setStyle] = useTween({ opacity: 0, height: '0px', y: 0 });
	useEffect(() => {
		if (state === InterviewState.buttonDidClick) {
			setStyle({ y: 130 }, { easing: Bezier.easeInOutQuart });
		}
	}, [state]);

	useEffect(() => {
		if (state === InterviewState.videoDidFadeOut) {
			setStyle({ opacity: 0.8, height: '211px' }, { delay: 500 });
		}
	}, [state]);

	return <div style={style} className='Gradient' />;
});
export default Gradient;
