import Gtag from 'lesca-gtag';
import ImagePreloader from 'lesca-image-onload';
import { Bezier, TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import BackgroundGrid from '../../components/backgroundGrid';
import { BreakPointHeight, Context, GtagConfig, VideoConfig } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import CarOutline from './carOutline';
import PayLoaderContainer from './container';
import ForegroundGradient from './foregroundGradient';
import './index.less';
import Logo from './logo';
import LogoType from './logoType';
import ProcessBar from './processBar';
import { initialPayLoaderState, PayLoaderContext, PayLoaderSteps } from './setting';

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

const PayLoader = memo(() => {
	const ref = useRef();
	const [context, setContext] = useContext(Context);
	const [state, setState] = useState(initialPayLoaderState);
	const value = useMemo(() => [state, setState], [state]);
	const [tweenStyle, setTweenStyle] = useState(false);

	const payLoad = context[ACTION.payLoad];
	const payLoadRef = useRef();

	useEffect(() => {
		payLoadRef.current = payLoad;
	}, [payLoad]);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => {
			setContext({
				type: ACTION.payLoad,
				state: { ...payLoadRef.current, status: PAYLOAD_STATUS.onReady },
			});
			setState((S) => ({ ...S, steps: PayLoaderSteps.loaded }));
		});
		Gtag.pv(GtagConfig.首頁.pv);
	}, []);

	useEffect(() => {
		if (state.steps === PayLoaderSteps.logoDidStay) {
			setTweenStyle(
				{ opacity: 0 },
				{ duration: VideoConfig.fadeInDuration, easing: Bezier.outQuart },
			);
		}
	}, [state.steps]);

	return (
		<TweenProvider
			initStyle={{ opacity: 1 }}
			tweenStyle={tweenStyle}
			options={{ duration: VideoConfig.fadeInDuration }}
		>
			<div ref={ref} className='PayLoader'>
				<PayLoaderContext.Provider value={value}>
					<PayLoaderContainer>
						<BackgroundGrid />
						<CarOutline />
						<RWDProvider>
							<Logo />
							<LogoType />
						</RWDProvider>
						<ProcessBar />
						<ForegroundGradient />
					</PayLoaderContainer>
				</PayLoaderContext.Provider>
			</div>
		</TweenProvider>
	);
});
export default PayLoader;
