import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const BackgroundGrid = memo(() => {
	const [context] = useContext(PayLoaderContext);
	const { steps } = context;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (steps === PayLoaderSteps.logoDidFadeIn) {
			setStyle({ opacity: 0.3 }, 2000);
		}
	}, [steps]);
	return <div className='BackgroundGrid' style={style} />;
});
export default BackgroundGrid;
