import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { Context } from '../../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../../settings/constant';
import { PayLoaderContext, PayLoaderLogoTypeStayTime, PayLoaderSteps } from '../setting';
import './index.less';

const TypeWord = memo(() => {
	const ref = useRef();
	const [context] = useContext(PayLoaderContext);
	const { steps } = context;
	const [style, setStyle] = useTween({ opacity: 0, scale: 0.8 });
	useEffect(() => {
		if (steps === PayLoaderSteps.userDidActive) {
			ref.current.classList.add('brushed');
			setStyle(
				{ opacity: 1, scale: 1 },
				{ duration: 4000, delay: 800, easing: Bezier.easeOutQuart },
			);
		}
	}, [steps]);

	return (
		<div style={style} className='typeWord'>
			<div ref={ref} className='gradient' />
		</div>
	);
});

const SubTitle = memo(() => {
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];

	const [payLoaderContext, setPayLoaderContext] = useContext(PayLoaderContext);
	const { steps } = payLoaderContext;
	const [style, setStyle] = useTween({ opacity: 0, y: 20 });

	useEffect(() => {
		if (steps === PayLoaderSteps.userDidActive) {
			setStyle(
				{ opacity: 1, y: 0 },
				{
					duration: 2000,
					delay: 2800,
					onComplete: () => {
						setTimeout(() => {
							setPayLoaderContext((S) => ({ ...S, steps: PayLoaderSteps.logoDidStay }));
							setContext({
								type: ACTION.payLoad,
								state: { ...payLoad, status: PAYLOAD_STATUS.logoDidFadeIn },
							});
						}, PayLoaderLogoTypeStayTime);
					},
				},
			);
		}
	}, [steps]);

	return (
		<div style={style} className='pt-10 font-notoSans text-xl tracking-[0.5rem]'>
			工藝之最 藝術特展
		</div>
	);
});

const LogoType = memo(() => (
	<div className='LogoType'>
		<TypeWord />
		<SubTitle />
	</div>
));
export default LogoType;
