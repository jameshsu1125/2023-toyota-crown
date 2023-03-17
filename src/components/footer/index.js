import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import BackgroundGrid from '../backgroundGrid';
import Author from './author';
import './index.less';

const Footer = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, onend } = page;

	const [style, setStyle] = useTween({ opacity: 0, y: 300 });

	useEffect(() => {
		if (index !== PAGE_CONTEXT_NAME.intro || index !== PAGE_CONTEXT_NAME.detailVideo) {
			if (onend) setStyle({ opacity: 1, y: 0 }, { duration: 1200, delay: 1000 });
		} else setStyle({ opacity: 0, y: 300 });
	}, [index, onend]);

	return (
		<div style={style} className='Footer h-[155px] md:h-[200px]'>
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
