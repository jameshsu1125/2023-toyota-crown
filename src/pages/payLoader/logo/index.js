import useTween, { Bezier, TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { BreakPoint, BreakPointHeightMobile } from '../../../settings/config';
import AuthorIntroduction from '../authorsIntroduction';
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
		} else if (steps === PayLoaderSteps.userDidActive) {
			setTweenStyle({ opacity: 0, y: 0 });
		}
	}, [steps]);

	return (
		<div className='subtitle font-notoSans'>
			<TweenProvider
				initStyle={{ opacity: 0, y: 40 }}
				tweenStyle={tweenStyle}
				options={{ delay: steps === PayLoaderSteps.loaded ? 1000 : 0, duration: 1000 }}
			>
				<span>CROWN 榮耀登場</span>
			</TweenProvider>
			<TweenProvider
				initStyle={{ opacity: 0, y: 40 }}
				tweenStyle={tweenStyle}
				options={{ delay: steps === PayLoaderSteps.loaded ? 1250 : 0, duration: 1000 }}
			>
				<span>以日本極致造車工藝、精益求精的專注每處細節、每道工法</span>
			</TweenProvider>
			<TweenProvider
				initStyle={{ opacity: 0, y: 40 }}
				tweenStyle={tweenStyle}
				options={{ delay: steps === PayLoaderSteps.loaded ? 1500 : 0, duration: 1000 }}
			>
				<span>打造全新斜背跨界跑旅，邀您一起鑑賞</span>
			</TweenProvider>
		</div>
	);
});

const CrownLogo = ({ steps }) => {
	const [style, setStyle] = useTween({ y: 0, opacity: 1, scale: 1 });
	useEffect(() => {
		if (steps === PayLoaderSteps.userDidActive) {
			const { innerWidth } = window;
			const property = innerWidth >= BreakPoint ? { y: 0, scale: 0.6 } : { y: 70, scale: 0.45 };
			setStyle(property, { easing: Bezier.inOutQuart, duration: 2000 });
		}
	}, [steps]);

	return (
		<div style={style} className='logo'>
			<Fill />
			<Outline />
		</div>
	);
};

const Logo = memo(() => {
	const [context] = useContext(PayLoaderContext);
	const { steps } = context;
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (steps === PayLoaderSteps.logoDidFadeIn) {
			setActive(true);
		}
	}, [steps]);

	const [scale, setScale] = useState(1);

	useEffect(() => {
		const resize = () => {
			// ... script here
			const { innerHeight, innerWidth } = window;
			if (innerWidth < BreakPoint) {
				if (innerHeight > BreakPointHeightMobile) setScale(1);
				else {
					setScale(innerHeight / BreakPointHeightMobile);
				}
			}
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<TweenProvider
			initStyle={{ y: 200 }}
			tweenStyle={{ y: 0 }}
			active={active}
			options={{ easing: Bezier.inOutQuart }}
		>
			<div className='Logo'>
				<div className='scaler' style={{ transform: `scale(${scale})` }}>
					<CrownLogo steps={steps} />
					<SubTitle />
					<AuthorIntroduction />
				</div>
			</div>
		</TweenProvider>
	);
});
export default Logo;
