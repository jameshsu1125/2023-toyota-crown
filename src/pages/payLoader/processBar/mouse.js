import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { BreakPoint, Context } from '../../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../../settings/constant';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const DEVICE = window.innerWidth >= BreakPoint;

const Mouse = memo(() => {
	const ref = useRef();
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];

	const [payLoadContext, setPayLoadContext] = useContext(PayLoaderContext);
	const { steps } = payLoadContext;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (steps === PayLoaderSteps.contextLoaded) {
			setStyle(
				{ opacity: 1 },
				{
					duration: 1000,
					onStart: () => {
						ref.current.style.cursor = 'pointer';
					},
					onComplete: () => {
						setPayLoadContext((S) => ({ ...S, steps: PayLoaderSteps.iconDidFadeIn }));
						Click.add('#mouse', () => {
							setPayLoadContext((S) => ({ ...S, steps: PayLoaderSteps.userDidActive }));
							setContext({
								type: ACTION.payLoad,
								state: { ...payLoad, status: PAYLOAD_STATUS.userDidActive },
							});
							Click.remove('#mouse');
						});
					},
				},
			);
		}
	}, [steps]);

	return (
		<div ref={ref} style={style} className='Mouses'>
			<div id='mouse'>
				<div className='gradient'>
					<div className='icon' />
				</div>
				<div className='text'>
					{!DEVICE && (
						<>
							請開啟音效體驗最佳瀏覽效果
							<br />
						</>
					)}
					邀您點擊鑑賞
				</div>
			</div>
		</div>
	);
});
export default Mouse;
