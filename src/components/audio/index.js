import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';
import Wave from './wave';

const Audio = memo(() => {
	const ref = useRef();

	const [context] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onReady) {
			setStyle({ opacity: 1 }, 1000);
		}
	}, [status]);

	return (
		<div ref={ref} style={style} className='Audio flex justify-center'>
			<div className='relative flex h-full w-full max-w-7xl justify-end p-10 md:p-5'>
				<div className='content top-1/2 -mt-[25px] md:top-[30%]'>
					<Wave belong='footer' />
					<div className='text'>
						<div className='gradient' />
					</div>
				</div>
			</div>
		</div>
	);
});
export default Audio;
