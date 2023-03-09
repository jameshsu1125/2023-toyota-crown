import ImagePreloader from 'lesca-image-onload';
import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATE, PAYLOAD_STATUS } from '../../settings/constant';
import BackgroundGrid from './backgroundGrid';
import CarOutline from './carOutline';
import ForegroundGradient from './foregroundGradient';
import './index.less';
import Logo from './logo';
import LogoType from './logoType';
import ProcessBar from './processBar';
import { initialPayLoaderState, PayLoaderContext, PayLoaderSteps } from './setting';

const PayLoader = memo(() => {
	const ref = useRef();
	const [, setContext] = useContext(Context);
	const [state, setState] = useState(initialPayLoaderState);
	const value = useMemo(() => [state, setState], [state]);
	const [tweenStyle, setTweenStyle] = useState(false);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => {
			setContext({
				type: ACTION.payLoad,
				state: { ...PAYLOAD_STATE, status: PAYLOAD_STATUS.onReady },
			});
			setState((S) => ({ ...S, steps: PayLoaderSteps.loaded }));
		});
	}, []);

	useEffect(() => {
		if (state.steps === PayLoaderSteps.logoDidStay) {
			setTweenStyle({ opacity: 0 });
		}
	}, [state.steps]);

	return (
		<TweenProvider
			defaultStyle={{ opacity: 1 }}
			tweenStyle={tweenStyle}
			options={{ duration: 5000 }}
		>
			<div ref={ref} className='PayLoader relative h-full w-full'>
				<PayLoaderContext.Provider value={value}>
					<BackgroundGrid />
					<CarOutline />
					<Logo />
					<LogoType />
					<ProcessBar />
					<ForegroundGradient />
				</PayLoaderContext.Provider>
			</div>
		</TweenProvider>
	);
});
export default PayLoader;
