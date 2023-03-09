/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../../settings/config';
import { ACTION, PAYLOAD_STATE, PAYLOAD_STATUS } from '../../../settings/constant';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const Bar = memo(() => {
	const [context, setContext] = useContext(Context);
	const [, setPayLoadContext] = useContext(PayLoaderContext);
	const payLoad = context[ACTION.payLoad];
	const { loaded, total } = payLoad;

	const [style, setStyle] = useTween({ width: '0%', opacity: 1 });

	useEffect(() => {
		if (loaded !== 0 && total !== 0) {
			const width = `${Math.floor((loaded / total) * 100)}%`;
			const duration = 300;
			const easing = Bezier.linear;
			const onComplete =
				width === '100%'
					? () => {
							setContext({
								type: ACTION,
								state: { ...PAYLOAD_STATE, status: PAYLOAD_STATUS.onLoaded },
							});
							setStyle(
								{ opacity: 0 },
								{
									duration: 1000,
									onComplete: () => {
										setPayLoadContext((S) => ({ ...S, steps: PayLoaderSteps.contextLoaded }));
									},
								},
							);
					  }
					: () => {};

			setStyle({ width }, { duration, easing, onComplete });
		}
	}, [loaded, total]);
	return <div style={style} className='bar' />;
});

const ProcessBar = memo(() => {
	const [, setContext] = useContext(Context);
	const [payLoadContext] = useContext(PayLoaderContext);
	const { steps } = payLoadContext;

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (steps === PayLoaderSteps.logoDidFadeIn) {
			setContext({
				type: ACTION.payLoad,
				state: { ...PAYLOAD_STATE, status: PAYLOAD_STATUS.onPayLoaderFadeIn },
			});
			setStyle({ opacity: 1 }, 500);
		} else if (steps === PayLoaderSteps.contextLoaded) {
			setStyle({ opacity: 0 }, 1000);
		}
	}, [steps]);

	return (
		<div className='ProcessBar' style={style}>
			<Bar />
			<div className='text font-sourceSansPro text-lg capitalize'>loading</div>
		</div>
	);
});
export default ProcessBar;
