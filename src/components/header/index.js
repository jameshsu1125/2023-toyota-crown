import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import BackgroundGrid from '../backgroundGrid';
import './index.less';

const DELAY = 1000;

const Logo = () => {
	const [context] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.introVideoDidPlayed) {
			setStyle({ opacity: 1 }, { delay: 1000 });
		}
	}, [status]);

	return (
		<div style={style} className='Header'>
			<div className='relative h-full w-full max-w-7xl p-10 md:p-5'>
				<div className='logo' />
			</div>
		</div>
	);
};

const MaterialHeader = () => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, onend } = page;
	const [style, setStyle] = useTween({ opacity: 0, y: -133 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro || index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0, y: -133 });
		} else if (onend) setStyle({ opacity: 1, y: 0 }, { duration: 1200, delay: DELAY });
	}, [index, onend]);

	return (
		<div style={style} className='Header header-material'>
			<div />
			<BackgroundGrid />
		</div>
	);
};

const Header = memo(() => (
	<>
		<MaterialHeader />
		<Logo />
	</>
));
export default Header;
