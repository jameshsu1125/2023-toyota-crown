import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

const Audio = memo(() => {
	const ref = useRef();

	const [context] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (status === PAYLOAD_STATUS.onReady) {
			setStyle({ opacity: 1 }, 1000);
		}
	}, [status]);

	return (
		<div ref={ref} style={style} className='Audio'>
			<div className='content'>
				<div className='symbol' />
				<div className='text'>
					<div className='gradient' />
				</div>
			</div>
		</div>
	);
});
export default Audio;
