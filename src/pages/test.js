import Click from 'lesca-click';
import Landscape from 'lesca-react-landscape';
import { useEffect, useMemo, useReducer, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Video from '../components/video';
import Interview from '../components/Interview';
import {
	Context,
	EventContext,
	initialEventState,
	initialState,
	reducer,
} from '../settings/config';
import { ACTION, DIRECTION_STATE, PAGE_CONTEXT_NAME } from '../settings/constant';
import '../settings/global.less';

Click.install();

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	const values = useState(initialEventState);

	const [test, setTest] = useState(false);
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setState({
				type: ACTION.page,
				state: {
					index: PAGE_CONTEXT_NAME.detailVideo,
					direction: DIRECTION_STATE.next,
					enabled: false,
					stopForward: false,
					onend: false,
					skip: false,
					skipEnabled: false,
				},
			});
			setTest(true);
			setFadeIn(true);
		}, 1500);
	}, []);

	return (
		<div className='app absolute flex h-full w-full min-w-[447px] items-center justify-center'>
			<Context.Provider {...{ value }}>
				<EventContext.Provider value={values}>
					<Video fadeIn={fadeIn} onLoaded={() => {}} test={test} />
					<Interview />
				</EventContext.Provider>
			</Context.Provider>
			<Landscape style={{ zIndex: 99 }} />
		</div>
	);
};

createRoot(document.getElementById('app')).render(<App />);
