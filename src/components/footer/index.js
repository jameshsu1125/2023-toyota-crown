import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import BackgroundGrid from '../backgroundGrid';
import Author from './author';
import './index.less';

const Footer = memo(() => {
	const [context] = useContext(Context);
	const { status } = context[ACTION.payLoad];
	const [tweenStyle, setTweenStyle] = useState(false);

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onContextDidFadeIn) {
			setTweenStyle({ y: 0 });
		}
	}, [status]);
	return (
		<TweenProvider defaultStyle={{ y: 300 }} tweenStyle={tweenStyle} options={{ delay: 1000 }}>
			<div className='Footer h-[155px] md:h-[200px]'>
				<BackgroundGrid />
				<div>
					<div className='square'>
						<Author />
					</div>
				</div>
			</div>
		</TweenProvider>
	);
});
export default Footer;
