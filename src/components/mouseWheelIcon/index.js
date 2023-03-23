import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context, EventContext } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

const Mouse = memo(() => {
	const [context] = useContext(Context);
	const [eventContext] = useContext(EventContext);
	const { videoStop } = eventContext;

	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const [style, setStyle] = useTween({ opacity: 0 });

	const { index } = context[ACTION.page];

	useEffect(() => {
		if (videoStop) {
			if (index !== PAGE_CONTEXT_NAME.detailVideo) setStyle({ opacity: 1 });
		} else setStyle({ opacity: 0 });
	}, [videoStop]);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
			setStyle({ opacity: 1 }, { delay: 400 });
		}
	}, [status]);

	return (
		<div className='Mouse'>
			<div style={style}>
				<div className='gradient'>
					{[...new Array(2).keys()].map((e) => (
						<div className='shadow' key={e} />
					))}
					<div className='icon' />
				</div>
				{index === 0 && <div className='text'>邀您下滑鑑賞</div>}
			</div>
		</div>
	);
});
export default Mouse;
