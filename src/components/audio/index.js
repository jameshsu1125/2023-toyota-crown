/* eslint-disable no-lonely-if */
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { BreakPoint, Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';
import { CallForActionText, LinkTryText } from './texts';
import Wave from './wave';

const Text = ({ status, device, index }) => (
	<>
		<div className='absolute top-0 flex h-full w-full max-w-7xl justify-end p-10 md:p-5'>
			<div className='content top-1/2 -mt-[25px] md:top-[30%]'>
				{status >= PAYLOAD_STATUS.userDidActive && <Wave belong='footer' />}
				<LinkTryText status={status} device={device} index={index} />
			</div>
		</div>
		<CallForActionText status={status} device={device} index={index} />
	</>
);

const Audio = memo(() => {
	const ref = useRef();
	const [context] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const { index } = context[ACTION.page];

	const [style, setStyle] = useTween({ opacity: 0 });
	const [device, setDevice] = useState(window.innerWidth >= BreakPoint);

	useEffect(() => {
		const resize = () => {
			const { innerWidth } = window;
			setDevice(innerWidth >= BreakPoint);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onReady) setStyle({ opacity: 1 }, 1000);
	}, [status]);

	return (
		<>
			<div ref={ref} style={style} className='Audio flex justify-center'>
				<Text status={status} device={device} index={index} />
			</div>
			{!device && status >= PAYLOAD_STATUS.userDidActive && (
				<div className='absolute right-10 top-10'>
					<Wave />
				</div>
			)}
		</>
	);
});
export default Audio;
