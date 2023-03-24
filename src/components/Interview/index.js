import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Context, EventContext, InterviewConfig } from '../../settings/config';
import { ACTION, DIRECTION_STATE, PAGE_CONTEXT_NAME } from '../../settings/constant';
import Button from './buttons';
import Car from './car';
import Carousel from './carousel';
import DarkScreen from './darkScreen';
import Gradient from './gradient';
import './index.less';
import { InterviewState, InterviewYoutube } from './setting';
import Title from './title';
import WheelEventProvider from './wheelEventProvider';

let saveRef = true;

const Interview = memo(({ setKey }) => {
	const [context, setContext] = useContext(Context);
	const page = context[ACTION.page];
	const { index, direction } = page;

	const [eventContext] = useContext(EventContext);
	const { videoStop } = eventContext;

	const [active, setActive] = useState(false);

	const [state, setState] = useState(InterviewState.unset);
	const [youtubeIndex, setYoutubeIndex] = useState(InterviewYoutube.unset);

	const [style, setStyle] = useTween({ opacity: 0 });
	const [fadeOutStyle, setFadeOutStyle] = useTween({ opacity: 1 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 1 }, 500);
			setActive(true);
			setContext({ type: ACTION.page, state: { ...page, enabled: false, skipEnabled: false } });
			saveRef = true;
		} else if (index === PAGE_CONTEXT_NAME.content_7 && direction === DIRECTION_STATE.prev) {
			if (saveRef) {
				saveRef = false;
				setFadeOutStyle(
					{ opacity: 0 },
					{
						duration: 1000,
						onComplete: () => {
							setKey(new Date());
						},
					},
				);
			}
		}
	}, [index]);

	const onFadeIn = (sn) => {
		if (sn === InterviewConfig.length - 1) {
			setState((S) => {
				if (S > InterviewState.buttonDidFadeIn) return S;
				return InterviewState.buttonDidFadeIn;
			});
		}
	};

	return (
		<div style={style} className='Interview'>
			<div className='cistern'>
				<DarkScreen active={active} videoStop={videoStop} index={index} />
				<div
					style={fadeOutStyle}
					className='absolute flex h-full w-full items-center justify-center'
				>
					<Gradient videoStop={videoStop} state={state} index={index} />
					<WheelEventProvider />
					{state >= InterviewState.carDidGoDown && (
						<Carousel state={state} setState={setState} youtubeIndex={youtubeIndex} index={index} />
					)}
					<Car videoStop={videoStop} state={state} setState={setState} index={index}>
						{InterviewConfig.map((e, i) => (
							<Button
								index={index}
								state={state}
								key={JSON.stringify(e)}
								data={e}
								videoStop={videoStop}
								sn={i}
								onFadeIn={onFadeIn}
								setYoutubeIndex={setYoutubeIndex}
								setState={setState}
							/>
						))}
					</Car>
				</div>
			</div>
			<Title videoStop={videoStop} index={index} />
		</div>
	);
});
export default Interview;
