import Click from 'lesca-click';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useEffect, useMemo, useRef } from 'react';
import { BreakPoint } from '../../../settings/config';
import { ButtonTransitionProperty, InterviewState } from '../setting';
import './index.less';

const DEVICE = window.innerWidth >= BreakPoint ? 'desktop' : 'mobile';

const Button = memo(({ data, sn, onFadeIn, state, setYoutubeIndex, setState }) => {
	const ref = useRef();
	const property = useMemo(() => ButtonTransitionProperty[sn][DEVICE], [sn]);
	const stateRef = useRef(state);

	useEffect(() => {
		stateRef.current = state;
	}, [state]);

	const defaultTweenProps = useMemo(() => {
		const style = {
			opacity: 0,
			y: 50,

			[`margin${property.dir === 'left' ? 'Left' : 'Right'}`]: `${property.p1.x}px`,
		};
		let ext;
		if (DEVICE === 'desktop') {
			ext = {
				[`margin${property.dir === 'right' ? 'Top' : 'Top'}`]: `${property.p1.y}px`,
				[`padding${property.dir === 'left' ? 'Left' : 'Right'}`]: `${property.p1.w}px`,
			};
		} else {
			ext = {
				[`padding${property.dir === 'left' ? 'Top' : 'Bottom'}`]: `${property.p1.w}px`,
				[`margin${property.dir === 'right' ? 'Top' : 'Bottom'}`]: `${property.p1.y}px`,
			};
		}
		return { ...style, ...ext };
	}, [property]);

	const tweenToProps = useMemo(() => {
		const style = {
			[`margin${property.dir === 'left' ? 'Left' : 'Right'}`]: `${property.p2.x}px`,
		};
		let ext;
		if (DEVICE === 'desktop') {
			ext = {
				[`margin${property.dir === 'right' ? 'Top' : 'Top'}`]: `${property.p2.y}px`,
				[`padding${property.dir === 'left' ? 'Left' : 'Right'}`]: `${property.p2.w}px`,
			};
		} else {
			ext = {
				[`margin${property.dir === 'right' ? 'Top' : 'Bottom'}`]: `${property.p2.y}px`,
				[`padding${property.dir === 'left' ? 'Top' : 'Bottom'}`]: `${property.p2.w}px`,
			};
		}
		return { ...style, ...ext };
	}, [property]);

	const [style, setStyle] = useTween(defaultTweenProps);

	useEffect(() => {
		if (state === InterviewState.videoDidFadeOut) {
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
	}, [state]);

	useEffect(() => {
		if (state === InterviewState.buttonDidFadeIn) {
			setTimeout(() => {
				ref.current?.classList.add('on');
				Click.add(`#youtube${sn}`, () => {
					setYoutubeIndex(sn);
					if (stateRef.current < InterviewState.buttonDidClick) {
						setState(InterviewState.buttonDidClick);
					}
				});
			}, 1000);
		} else if (state === InterviewState.buttonDidClick) {
			setStyle(tweenToProps, {
				easing: Bezier.easeInOutQuart,
			});
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
