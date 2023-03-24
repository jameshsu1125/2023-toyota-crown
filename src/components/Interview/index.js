import { memo, useContext, useEffect, useState } from 'react';
import { Context, EventContext, InterviewConfig } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import Button from './buttons';
import Car from './car';
import DarkScreen from './darkScreen';
import Gradient from './gradient';
import './index.less';
import { InterviewState, InterviewYoutube } from './setting';
import Title from './title';

const Interview = memo(() => {
	const [context] = useContext(Context);
	const { index } = context[ACTION.page];

	const [eventContext] = useContext(EventContext);
	const { videoStop } = eventContext;

	const [active, setActive] = useState(false);

	const [state, setState] = useState(InterviewState.unset);
	const [youtubeIndex, setYoutubeIndex] = useState(InterviewYoutube.unset);

	useEffect(() => {
		console.log('yt', youtubeIndex);
	}, [youtubeIndex]);

	useEffect(() => {
		console.log('state', state);
	}, [state]);

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.detailVideo) {
			setActive(true);
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
		<div className='Interview'>
			<div className='cistern'>
				<DarkScreen active={active} videoStop={videoStop} />
				<Gradient videoStop={videoStop} />
				<Car videoStop={videoStop} state={state}>
					{InterviewConfig.map((e, i) => (
						<Button
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
			<Title state={state} />
		</div>
	);
});
export default Interview;
