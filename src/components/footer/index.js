/* eslint-disable no-lonely-if */
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { BreakPoint, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import BackgroundGrid from '../backgroundGrid';
import Author from './author';
import './index.less';

const Footer = memo(() => {
	const ref = useRef();

	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index } = page;
	const [style, setStyle] = useTween({ opacity: 0, y: 300 });

	const [device, setDevice] = useState('unset');
	const { status } = context[ACTION.payLoad];

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
		if (status < PAYLOAD_STATUS.introVideoDidPlayed) return;

		if (device) {
			if (index > PAGE_CONTEXT_NAME.intro && index < PAGE_CONTEXT_NAME.detailVideo) {
				if (ref.current.style.opacity !== '1') setStyle({ opacity: 1, y: 0 });
			} else {
				if (ref.current.style.opacity !== '0') setStyle({ opacity: 0, y: 3000 });
			}
		} else {
			if (ref.current.style.opacity !== '1') setStyle({ opacity: 1, y: 0 });
		}
	}, [device, status, index]);

	return (
		<div ref={ref} style={style} className='Footer'>
			<div />
			<BackgroundGrid />
			<div>
				<div className='square'>
					<Author />
				</div>
			</div>
		</div>
	);
});
export default Footer;
