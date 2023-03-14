import { Children, cloneElement, memo, useCallback, useContext, useEffect } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';

const PayLoaderContainer = memo(({ children }) => {
	useEffect(() => {}, []);
	const [payLoadContext, setPayLoadContext] = useContext(PayLoaderContext);
	const { steps } = payLoadContext;

	const onWheel = useCallback(
		(e) => {
			if (steps === PayLoaderSteps.iconDidFadeIn) {
				console.log(e.delta);
			}
		},
		[steps],
	);

	return Children.map(children, (child) => cloneElement(child, { ...child.props, onWheel }));
});
export default PayLoaderContainer;
