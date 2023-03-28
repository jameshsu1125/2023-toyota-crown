import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { BreakPoint, Context, EventContext } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

const DEVICE = window.innerWidth >= BreakPoint;

const Mouse = memo(() => {
	const ref = useRef();
	const [context] = useContext(Context);
	const [eventContext] = useContext(EventContext);
	const { videoCFA, videoStop } = eventContext;
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const [style, setStyle] = useTween({ opacity: 0 });
	const { index, onend } = context[ACTION.page];

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro) {
			if (videoStop) {
				setStyle({ opacity: 1 });
			}
		}
	}, [videoStop, index]);

	useEffect(() => {
		if (index > PAGE_CONTEXT_NAME.intro && index < PAGE_CONTEXT_NAME.detailVideo) {
			if (onend && videoCFA) {
				setStyle(
					{ opacity: 1 },
					{
						onStart: () => {
							ref.current.style.transform = DEVICE ? 'translateY(40px)' : 'translateY(60px)';
						},
					},
				);
			} else {
				setStyle(
					{ opacity: 0 },
					{
						onComplete: () => {
							ref.current.style.transform = 'translateY(0px)';
						},
					},
				);
			}
		} else {
			setStyle(
				{ opacity: 0 },
				{
					onComplete: () => {
						ref.current.style.transform = 'translateY(0px)';
					},
				},
			);
		}
	}, [index, videoCFA, onend]);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
			setStyle({ opacity: 1 }, { delay: 400 });
		}
	}, [status]);

	return (
		<div className='Mouse'>
			<div ref={ref} style={style}>
				<div className='gradient'>
					<div className='arrows'>
						{[...new Array(2).keys()].map((e, i) => (
							<div className={`shadow${i}`} key={e} />
						))}
						<div className='icon' />
					</div>
				</div>
				<div className='text'>邀您下滑鑑賞</div>
			</div>
		</div>
	);
});
export default Mouse;
