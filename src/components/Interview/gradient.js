import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { PAGE_CONTEXT_NAME } from '../../settings/constant';
import { InterviewState } from './setting';

const Gradient = memo(({ videoStop, state, index }) => {
	const [style, setStyle] = useTween({ opacity: 0, height: '0px', y: 0 });
	useEffect(() => {
		if (state === InterviewState.buttonDidClick) {
			setStyle({ y: 130 }, { easing: Bezier.easeInOutQuart });
		}
	}, [state]);

	useEffect(() => {
		if (videoStop && index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 1, height: '211px' }, { delay: 500 });
		}
	}, [videoStop, index]);

	return <div style={style} className='Gradient' />;
});
export default Gradient;
