import Click from 'lesca-click';
import Gtag from 'lesca-gtag';
import Landscape from 'lesca-react-landscape';
import { memo, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Audio from '../components/audio';
import AudioProvider from '../components/audioProvider';
import Breadcrumbs from '../components/breadcrumbs';
import Caption from '../components/caption';
import Container from '../components/container';
import Interview from '../components/Interview';
import Section from '../components/section';
import SectionVerticalAlign from '../components/sectionVerticalAlign';
import VoiceOver from '../components/voiceOver';
import {
	BreakPoint,
	Context,
	EventContext,
	initialEventState,
	initialState,
	reducer,
} from '../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../settings/constant';
import '../settings/global.less';
import PayLoader from './payLoader';
import PS from './ps';

Click.install();
Gtag.install('G-NRK2EL50PD');
Gtag.install('UA-262107147-1');

const keys = 'asd';

const Pages = memo(() => {
	const [context] = useContext(Context);
	const payLoaderState = context[ACTION.payLoad];
	const { status } = payLoaderState;

	const value = useState(initialEventState);
	const [key, setKey] = useState(true);

	const [containerEnabled, setContainerEnabled] = useState(false);
	const [payLoadContent, setPayLoadContent] = useState(true);

	useEffect(() => {
		// console.log(status);
		if (status >= PAYLOAD_STATUS.introVideoDidPlayed) {
			setPayLoadContent(false);
		}
	}, [status]);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.onReady) {
			setContainerEnabled(true);
		}
	}, [status]);

	return (
		<div className='h-full w-full'>
			{payLoadContent && <PayLoader key={keys} />}
			{containerEnabled && (
				<EventContext.Provider value={value}>
					<Container>
						<AudioProvider>
							<Section>
								<SectionVerticalAlign>
									<Breadcrumbs />
									<Caption />
									<VoiceOver />
								</SectionVerticalAlign>
							</Section>
							<Interview key={key} setKey={setKey} />
							{status >= PAYLOAD_STATUS.introVideoDidPlayed && <PS />}
						</AudioProvider>
					</Container>
				</EventContext.Provider>
			)}
			<Audio />
		</div>
	);
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);

	const { index } = state[ACTION.page];

	const [device, setDevice] = useState(window.innerWidth >= BreakPoint);
	const deviceRef = useRef(device);

	useEffect(() => {
		if (deviceRef.current !== device) {
			if (index !== PAGE_CONTEXT_NAME.detailVideo) window.location.reload();
		}
	}, [device]);

	useEffect(() => {
		const resize = () => setDevice(window.innerWidth >= BreakPoint);
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<div className='app absolute h-full w-full min-w-[447px]'>
			<Context.Provider {...{ value }}>
				<Pages />
			</Context.Provider>
			<Landscape style={{ zIndex: 99 }} />
		</div>
	);
};

createRoot(document.getElementById('app')).render(<App />);
