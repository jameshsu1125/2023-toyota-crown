import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { InterviewState } from '../setting';
import './index.less';

const Button = memo(({ data, videoStop, sn, onFadeIn, state, setYoutubeIndex, setState }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: 50 });

	useEffect(() => {
		if (videoStop) {
			setStyle(
				{ opacity: 1, y: 0 },
				{
					delay: 600 + sn * 200,
					onComplete: () => {
						onFadeIn?.(sn);
					},
				},
			);
		}
	}, [videoStop]);

	useEffect(() => {
		if (state === InterviewState.buttonDidFadeIn) {
			setTimeout(() => {
				ref.current.classList.add('on');
				Click.add(`#youtube${sn}`, () => {
					setYoutubeIndex(sn);
					setState(InterviewState.buttonDidClick);
				});
			}, 2000);
		}
	}, [state]);

	return (
		<div style={style} className={`Button ${data.className}`}>
			<div ref={ref} className='target'>
				<div className='breadcrumbs'>{data.breadcrumbs}</div>
				<div className='name'>{data.name}</div>
				<div id={`youtube${sn}`} className='absolute top-0 h-[120%] w-full bg-transparent' />
			</div>
		</div>
	);
});
export default Button;
