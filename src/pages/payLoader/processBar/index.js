/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { AudioConfig, Context, VideoConfig } from '../../../settings/config';
import { ACTION, PAYLOAD_STATE, PAYLOAD_STATUS } from '../../../settings/constant';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';
import Mouse from './mouse';

const Bar = memo(() => {
	const [context, setContext] = useContext(Context);
	const [, setPayLoadContext] = useContext(PayLoaderContext);
	const payLoad = context[ACTION.payLoad];
	const { loaded, total, video, audio, bgm } = payLoad;
	const [style, setStyle] = useTween({ width: '0%', opacity: 1 });
	const onCompleteOnce = useRef(false);

	useEffect(() => {
		if (loaded !== 0 && total !== 0) {
			const v = Math.min(video, VideoConfig.preloadToIndex);
			const width = `${Math.floor(
				((loaded + v + audio + bgm) /
					(total + VideoConfig.preloadToIndex + AudioConfig.targets.length)) *
					100,
			)}%`;

			const duration = 300;
			const easing = Bezier.linear;
			const onComplete =
				width === '100%'
					? () => {
							if (onCompleteOnce.current) return;
							onCompleteOnce.current = true;
							setContext({
								type: ACTION.payLoad,
								state: { ...payLoad, status: PAYLOAD_STATUS.onLoaded },
							});
							setPayLoadContext((S) => ({ ...S, steps: PayLoaderSteps.contextLoaded }));
					  }
					: () => {};

			setStyle({ width }, { duration, easing, onComplete });
		}
	}, [loaded, total, video, audio, bgm]);
	return <div style={style} className='bar' />;
});

const Text = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 1 });
	useEffect(() => {
		if (steps === PayLoaderSteps.contextLoaded) {
			setStyle({ opacity: 0 }, 500);
		}
	}, [steps]);
	return (
		<div style={style} className='text'>
			<div className='text-lg'>loading</div>
			<div className='text-lg tracking-wider md:text-sm'>請開啟音效體驗最佳瀏覽效果</div>
		</div>
	);
};

const ProcessBar = memo(() => {
	const [, setContext] = useContext(Context);
	const [payLoadContext] = useContext(PayLoaderContext);
	const { steps } = payLoadContext;

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (steps === PayLoaderSteps.authorDidFadeIn) {
			setContext({
				type: ACTION.payLoad,
				state: { ...PAYLOAD_STATE, status: PAYLOAD_STATUS.onPayLoaderFadeIn },
			});
			setStyle({ opacity: 1 }, 500);
		} else if (steps === PayLoaderSteps.userDidActive) {
			setStyle({ opacity: 0 }, 1000);
		}
	}, [steps]);

	return (
		<div className='ProcessBar' style={style}>
			<Bar />
			<Text steps={steps} />
			{steps >= PayLoaderSteps.contextLoaded && steps < PayLoaderSteps.logoDidStay && <Mouse />}
		</div>
	);
});
export default ProcessBar;
