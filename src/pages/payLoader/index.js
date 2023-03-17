import ImagePreloader from 'lesca-image-onload';
import { TweenProviderMemo } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import BackgroundGrid from '../../components/backgroundGrid';
import Mouse from '../../components/mouseWheelIcon';
import { Context, VideoConfig } from '../../settings/config';
import { ACTION, PAYLOAD_STATE, PAYLOAD_STATUS } from '../../settings/constant';
import CarOutline from './carOutline';
import PayLoaderContainer from './container';
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
		<TweenProviderMemo
			defaultStyle={{ opacity: 1 }}
			tweenStyle={tweenStyle}
			options={{ duration: VideoConfig.fadeInDuration }}
		>
			<div ref={ref} className='PayLoader'>
				<PayLoaderContext.Provider value={value}>
					<PayLoaderContainer>
						<BackgroundGrid />
						<CarOutline />
						<Logo />
						<LogoType />
						<ProcessBar />
						<Mouse />
						<ForegroundGradient />
					</PayLoaderContainer>
				</PayLoaderContext.Provider>
			</div>
		</TweenProviderMemo>
	);
});
export default PayLoader;
