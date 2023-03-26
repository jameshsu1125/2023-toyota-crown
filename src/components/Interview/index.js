import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { BreakPointHeight, Context, InterviewConfig } from '../../settings/config';
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

const RWDProvider = ({ children }) => {
	const [scale, setScale] = useState(1);
	useEffect(() => {
		const resize = () => {
			const { innerHeight } = window;
			if (innerHeight > BreakPointHeight) {
				setScale(1);
			} else {
				const scaler = innerHeight / BreakPointHeight;
				setScale(scaler);
			}
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<div className='h-full w-full' style={{ transform: `scale(${scale})` }}>
			{children}
		</div>
	);
};

const Interview = memo(({ setKey }) => {
	const [context, setContext] = useContext(Context);
	const page = context[ACTION.page];
	const { index, direction } = page;

	const video = context[ACTION.video];

	const [active, setActive] = useState(false);

	const [state, setState] = useState(InterviewState.unset);
	const [youtubeIndex, setYoutubeIndex] = useState(InterviewYoutube.unset);

	const [style, setStyle] = useTween({ opacity: 0 });
	const [fadeOutStyle, setFadeOutStyle] = useTween({ opacity: 1 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 1 }, 500);
			setContext({ type: ACTION.page, state: { ...page, enabled: false, skipEnabled: false } });
			saveRef = true;
			const checkVideoReset = () => {
				const time = video[PAGE_CONTEXT_NAME.detailVideo].getTime();
				if (time > 2) requestAnimationFrame(checkVideoReset);
				else setActive(true);
			};
			checkVideoReset();
		} else if (index === PAGE_CONTEXT_NAME.content_7 && direction === DIRECTION_STATE.prev) {
			if (saveRef) {
				saveRef = false;
				setFadeOutStyle(
					{ opacity: 0 },
					{
						duration: 500,
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
			<DarkScreen active={active} video={video} setState={setState} />
			<RWDProvider>
				<div className='cistern'>
					<div
						style={fadeOutStyle}
						className='absolute flex h-full w-full items-center justify-center'
					>
						<Gradient state={state} />
						<WheelEventProvider setState={setState} />
						{state >= InterviewState.carDidGoDown && (
							<Carousel state={state} setState={setState} youtubeIndex={youtubeIndex} />
						)}
						<Car state={state} setState={setState}>
							{InterviewConfig.map((e, i) => (
								<Button
									state={state}
									key={JSON.stringify(e)}
									data={e}
									sn={i}
									onFadeIn={onFadeIn}
									setYoutubeIndex={setYoutubeIndex}
									setState={setState}
								/>
							))}
						</Car>
					</div>
				</div>
				<Title state={state} />
			</RWDProvider>
		</div>
	);
});
export default Interview;
