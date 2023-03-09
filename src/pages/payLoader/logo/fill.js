import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const Fill = memo(() => {
	const [context, setContext] = useContext(PayLoaderContext);
	const { steps } = context;

	const [style, setStyle] = useTween({ opacity: 0, y: 0 });

	useEffect(() => {
		if (steps === PayLoaderSteps.loaded) {
			setStyle(
				{ opacity: 1 },
				{
					delay: 1500,
					duration: 2000,
					onComplete: () => {
						setContext((S) => ({ ...S, steps: PayLoaderSteps.logoDidFadeIn }));
					},
				},
			);
		}
	}, [steps]);

	return (
		<div className='fill' style={style}>
			<div style={style} className='gradient' />
		</div>
	);
});
export default Fill;
