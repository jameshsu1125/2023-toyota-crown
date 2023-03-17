import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const Text = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 50 });

	useEffect(() => {
		if (steps === PayLoaderSteps.contextLoaded) {
			setStyle({ opacity: 1, y: 5 }, { duration: 1000, delay: 200 });
		}
	}, [steps]);

	return (
		<div style={style} className='text'>
			邀您下滑鑑賞
		</div>
	);
};

const Mouse = memo(() => {
	const [payLoadContext, setContext] = useContext(PayLoaderContext);
	const { steps } = payLoadContext;
	const [style, setStyle] = useTween({ opacity: 0, y: 50 });

	useEffect(() => {
		if (steps === PayLoaderSteps.contextLoaded) {
			setStyle(
				{ opacity: 1, y: 0 },
				{
					duration: 1000,
					onComplete: () => {
						setContext((S) => ({ ...S, steps: PayLoaderSteps.iconDidFadeIn }));
					},
				},
			);
		}
	}, [steps]);

	return (
		<div className='Mouse'>
			<div style={style} className='gradient'>
				{[...new Array(2).keys()].map((e) => (
					<div className='shadow' key={e} />
				))}
				<div className='icon' />
			</div>
			<Text steps={steps} />
		</div>
	);
});
export default Mouse;
