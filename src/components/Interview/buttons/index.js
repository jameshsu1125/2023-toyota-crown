import Click from 'lesca-click';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect, useMemo, useRef } from 'react';
import { PAGE_CONTEXT_NAME } from '../../../settings/constant';
import { ButtonTransitionProperty, InterviewState } from '../setting';
import './index.less';

const Button = memo(
	({ data, videoStop, sn, onFadeIn, state, setYoutubeIndex, setState, index }) => {
		const ref = useRef();
		const buttonProperty = useMemo(() => ButtonTransitionProperty[sn], [sn]);

		const [style, setStyle] = useTween({
			opacity: 0,
			y: 50,
			marginTop: `${buttonProperty.p1.y}px`,
			[`margin${buttonProperty.dir === 'left' ? 'Left' : 'Right'}`]: `${buttonProperty.p1.x}px`,
			[`padding${buttonProperty.dir === 'left' ? 'Left' : 'Right'}`]: `${buttonProperty.p1.w}px`,
		});

		useEffect(() => {
			if (videoStop && index === PAGE_CONTEXT_NAME.detailVideo) {
				setStyle(
					{ opacity: 1, y: 0 },
					{
						delay: 600 + sn * 500,
						onComplete: () => {
							onFadeIn?.(sn);
						},
					},
				);
			}
		}, [videoStop, index]);

		useEffect(() => {
			if (state === InterviewState.buttonDidFadeIn) {
				setTimeout(() => {
					ref.current?.classList.add('on');
					Click.add(`#youtube${sn}`, () => {
						setYoutubeIndex(sn);
						setState(InterviewState.buttonDidClick);
					});
				}, 1000);
			} else if (state === InterviewState.buttonDidClick) {
				setStyle(
					{
						marginTop: `${buttonProperty.p2.y}px`,
						[`margin${
							buttonProperty.dir === 'left' ? 'Left' : 'Right'
						}`]: `${buttonProperty.p2.x}px`,
						[`padding${
							buttonProperty.dir === 'left' ? 'Left' : 'Right'
						}`]: `${buttonProperty.p2.w}px`,
					},
					{
						easing: Bezier.easeInOutQuart,
					},
				);
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
	},
);
export default Button;
