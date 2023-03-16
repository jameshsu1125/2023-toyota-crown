import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { BreakPoint, Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';
import Wave from './wave';

const Audio = memo(() => {
	const ref = useRef();
	const textRef = useRef();

	const [context] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const [style, setStyle] = useTween({ opacity: 0 });
	const [deviceType, setDeviceType] = useState(window.innerHeight >= BreakPoint);

	useEffect(() => {
		const resize = () => {
			// ... script here
			const { innerWidth } = window;
			if (innerWidth >= BreakPoint) textRef.current.style.visibility = 'visible';
			else textRef.current.style.visibility = 'hidden';
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
				<div className='relative flex h-full w-full max-w-7xl justify-end p-10 md:p-5'>
					<div className='content top-1/2 -mt-[25px] md:top-[30%]'>
						<Wave belong='footer' />
						<div ref={textRef} className='text'>
							<div className='gradient' />
						</div>
					</div>
				</div>
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
