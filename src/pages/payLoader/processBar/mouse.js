import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const Mouse = memo(() => {
	const [payLoadContext, setContext] = useContext(PayLoaderContext);
	const { steps } = payLoadContext;

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (steps === PayLoaderSteps.contextLoaded) {
			setStyle(
				{ opacity: 1 },
				{
					duration: 2000,
					delay: 1000,
					onComplete: () => {
						setContext((S) => ({ ...S, steps: PayLoaderSteps.iconDidFadeIn }));
					},
				},
			);
		}
	}, [steps]);

	return (
		<div style={style} className='Mouse'>
			<div className='gradient'>
				{[...new Array(2).keys()].map((e) => (
					<div className='shadow' key={e} />
				))}
				<div className='icon' />
			</div>
			<div className='text'>邀您下滑鑑賞</div>
		</div>
	);
});
export default Mouse;
