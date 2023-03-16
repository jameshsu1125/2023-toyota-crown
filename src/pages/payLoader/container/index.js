import { memo, useCallback, useContext, useEffect } from 'react';
import useWheelHeavy from '../../../hooks/useWheelHeavy';
import { Context } from '../../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../../settings/constant';
import { PayLoaderContext, PayLoaderSteps } from '../setting';

const PayLoaderContainer = memo(({ children }) => {
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];

	const [payLoadContext, setPayLoadContext] = useContext(PayLoaderContext);
	const { steps } = payLoadContext;

	const [active, launcher] = useWheelHeavy();

	useEffect(() => {
		if (active) {
			setPayLoadContext((S) => ({ ...S, steps: PayLoaderSteps.userDidActive }));
			setContext({
				type: ACTION.payLoad,
				state: { ...payLoad, status: PAYLOAD_STATUS.userDidActive },
			});
		}
	}, [active]);

	const onWheel = useCallback(
		(e) => {
			if (steps === PayLoaderSteps.iconDidFadeIn) {
				launcher(e.deltaY);
			}
		},
		[steps],
	);

	return (
		<div className='absolute top-0 h-full w-full' onWheel={onWheel}>
			{children}
		</div>
	);
});
export default PayLoaderContainer;
