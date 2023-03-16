/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../../settings/config';
import { ACTION, PAYLOAD_STATE, PAYLOAD_STATUS } from '../../../settings/constant';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';
import Mouse from './mouse';

const Bar = memo(() => {
	const [context, setContext] = useContext(Context);
	const [, setPayLoadContext] = useContext(PayLoaderContext);
	const payLoad = context[ACTION.payLoad];
	const { loaded, total, video } = payLoad;

	const [style, setStyle] = useTween({ width: '0%', opacity: 1 });

	useEffect(() => {
		if (loaded !== 0 && total !== 0) {
			const width = `${Math.floor(((loaded + video) / (total + 1)) * 100)}%`;
			const duration = 300;
			const easing = Bezier.linear;
			const onComplete =
				width === '100%'
					? () => {
							setContext({
								type: ACTION.payLoad,
								state: { ...payLoad, status: PAYLOAD_STATUS.onLoaded },
							});
							setPayLoadContext((S) => ({ ...S, steps: PayLoaderSteps.contextLoaded }));
					  }
					: () => {};

			setStyle({ width }, { duration, easing, onComplete });
		}
	}, [loaded, total, video]);
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
		<div
			style={style}
			className='text flex flex-col font-sourceSansPro capitalize tracking-wide text-white'
		>
			<div className='text-lg'>loading</div>
			<div className='text-sm'>請開啟音效體驗最佳瀏覽效果</div>
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
			<Mouse />
		</div>
	);
});
export default ProcessBar;
