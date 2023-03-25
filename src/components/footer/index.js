import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { BreakPoint, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import BackgroundGrid from '../backgroundGrid';
import Author from './author';
import './index.less';

const Footer = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, onend } = page;
	const [style, setStyle] = useTween({ opacity: 0, y: 300 });

	const [device, setDevice] = useState('unset');
	const { status } = context[ACTION.payLoad];

	useEffect(() => {
		if (
			!device &&
			status === PAYLOAD_STATUS.introVideoDidPlayed &&
			index === PAGE_CONTEXT_NAME.intro
		) {
			setStyle({ opacity: 1, y: 0 }, { duration: 500 });
		}
	}, [device, status, index]);

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
		if (index === PAGE_CONTEXT_NAME.intro) {
			setStyle({ opacity: 0, y: 300 });
		} else if (index === PAGE_CONTEXT_NAME.detailVideo) {
			if (device) setStyle({ opacity: 0, y: 300 });
		} else if (onend) setStyle({ opacity: 1, y: 0 }, { duration: 1200, delay: 1000 });
	}, [index, onend]);

	return (
		<div style={style} className='Footer'>
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
