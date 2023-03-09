import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const ForegroundGradient = memo(() => {
	const [context] = useContext(PayLoaderContext);
	const { steps } = context;

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (steps === PayLoaderSteps.loaded) {
			setStyle({ opacity: 1 });
		}
	}, [steps]);

	return <div style={style} className='ForegroundGradient' />;
});
export default ForegroundGradient;
