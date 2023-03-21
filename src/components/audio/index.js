/* eslint-disable no-lonely-if */
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { BreakPoint, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';
import Wave from './wave';

const Text = ({ status, device, index }) => {
	const textRef = useRef();
	const [visibility, setVisibility] = useState('visible');
	const [align, setAlign] = useState('justify-end');

	useEffect(() => {
		if (device) {
			setVisibility('visible');
			setAlign('justify-end');
		} else {
			if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
				if (index === PAGE_CONTEXT_NAME.intro) {
					setVisibility('visible');
					setAlign('justify-center');
				} else {
					setVisibility('visible');
					setAlign('justify-end');
				}
			} else {
				setVisibility('hidden');
			}
		}
	}, [status, device, index]);

	return (
		<div className={`relative flex h-full w-full max-w-7xl ${align} p-10 md:p-5`}>
			<div className='content top-1/2 -mt-[25px] md:top-[30%]'>
				<Wave belong='footer' />
				<div ref={textRef} className='text' style={{ visibility }}>
					<div className='gradient' />
				</div>
			</div>
		</div>
	);
};

const Audio = memo(() => {
	const ref = useRef();

	const [context] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const { index } = context[ACTION.page];

	const [style, setStyle] = useTween({ opacity: 0 });
	const [deviceType, setDeviceType] = useState(window.innerWidth >= BreakPoint);

	useEffect(() => {
		const resize = () => {
			const { innerWidth } = window;
			setDeviceType(innerWidth >= BreakPoint);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onReady) {
			setStyle({ opacity: 1 }, 1000);
		}
	}, [status]);

	return (
		<>
			<div ref={ref} style={style} className='Audio flex justify-center'>
				<Text status={status} device={deviceType} index={index} />
			</div>
			{!deviceType && (
				<div className='absolute right-10 top-10'>
					<Wave />
				</div>
			)}
		</>
	);
});
export default Audio;
