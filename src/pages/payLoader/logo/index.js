import { Bezier, TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import Fill from './fill';
import './index.less';
import Outline from './outline';

const SubTitle = memo(() => {
	const [context] = useContext(PayLoaderContext);
	const { steps } = context;

	const [tweenStyle, setTweenStyle] = useState(false);

	useEffect(() => {
		if (steps === PayLoaderSteps.loaded) {
			setTweenStyle({ opacity: 1, y: 0 });
		} else if (steps === PayLoaderSteps.contextLoaded) {
			setTweenStyle({ opacity: 0, y: 0 });
		}
	}, [steps]);

	return (
		<>
			<TweenProvider
				defaultStyle={{ opacity: 0, y: 40 }}
				tweenStyle={tweenStyle}
				options={{ delay: steps === PayLoaderSteps.loaded ? 1000 : 0, duration: 1000 }}
			>
				<span>跟随別人，還是跟從内心？ 不凡的信念，從不受限於凡庸的標準</span>
			</TweenProvider>
			<TweenProvider
				defaultStyle={{ opacity: 0, y: 40 }}
				tweenStyle={tweenStyle}
				options={{ delay: steps === PayLoaderSteps.loaded ? 1250 : 0, duration: 1000 }}
			>
				<span>成就你對完美的不妥協，為每個不甘於平凡的靈魂加冕</span>
			</TweenProvider>
		</>
	);
});

const Logo = memo(() => {
	const [context] = useContext(PayLoaderContext);
	const { steps } = context;

	const [tweenStyle, setTweenStyle] = useState(false);

	useEffect(() => {
		if (steps === PayLoaderSteps.contextLoaded) {
			setTweenStyle({ y: -100, scale: 0.6 });
		}
	}, [steps]);

	return (
		<div className='Logo flex h-full w-full flex-col items-center justify-center'>
			<TweenProvider
				defaultStyle={{ y: 0, opacity: 1, scale: 1 }}
				tweenStyle={tweenStyle}
				options={{ delay: 500, easing: Bezier.easeInOutQuad, duration: 1200 }}
			>
				<div className='logo -mt-24'>
					<Fill />
					<Outline />
				</div>
			</TweenProvider>
			<div className='flex flex-col items-center font-notoSansRegular text-sm leading-6 text-primary'>
				<SubTitle />
			</div>
		</div>
	);
});
export default Logo;
