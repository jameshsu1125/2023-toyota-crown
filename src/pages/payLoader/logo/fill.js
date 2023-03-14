import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const Gradient = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 1 });

	useEffect(() => {
		if (steps === PayLoaderSteps.userDidActive) {
			setStyle({ opacity: 0 }, { delay: 2000, duration: 2000 });
		}
	}, [steps]);

	return <div className='gradient' style={style} />;
};

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
			<Gradient steps={steps} />
		</div>
	);
});
export default Fill;
