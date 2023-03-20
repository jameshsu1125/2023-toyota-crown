import Click from 'lesca-click';
import Landscape from 'lesca-react-landscape';
import { memo, useContext, useEffect, useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import Audio from '../components/audio';
import AudioProvider from '../components/audioProvider';
import Breadcrumbs from '../components/breadcrumbs';
import Caption from '../components/caption';
import Container from '../components/container';
import Section from '../components/section';
import SectionVerticalAlign from '../components/sectionVerticalAlign';
import VoiceOver from '../components/voiceOver';
import { Context, initialState, reducer } from '../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../settings/constant';
import '../settings/global.less';
import PayLoader from './payLoader';

Click.install();

const Pages = memo(() => {
	const [context] = useContext(Context);
	const payLoaderState = context[ACTION.payLoad];
	const { status } = payLoaderState;

	useEffect(() => {
		//	console.log(status);
		// console.log(payLoaderState.status);
	}, [status]);

	return (
		<div className='h-full w-full'>
			{payLoaderState.status < PAYLOAD_STATUS.introVideoDidPlayed && <PayLoader />}
			{payLoaderState.status >= PAYLOAD_STATUS.onPayLoaderFadeIn && (
				<Container>
					<AudioProvider>
						<Section>
							<SectionVerticalAlign>
								<Breadcrumbs />
								<Caption />
								<VoiceOver />
							</SectionVerticalAlign>
						</Section>
					</AudioProvider>
				</Container>
			)}
			<Audio />
		</div>
	);
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
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
