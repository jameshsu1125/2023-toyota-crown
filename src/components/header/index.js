import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import BackgroundGrid from '../backgroundGrid';
import './index.less';

const Header = memo(() => {
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;

	const [tweenStyle, setTweenStyle] = useState(false);

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onContextDidFadeIn) {
			setTweenStyle({ y: 0 });
		}
	}, [status]);

	return (
		<TweenProvider
			defaultStyle={{ y: -133 }}
			tweenStyle={tweenStyle}
			options={{
				delay: 1000,
				onComplete: () => {
					setContext({
						type: ACTION.page,
						state: { ...context[ACTION.page], enabled: true },
					});
				},
			}}
		>
			<div className='Header flex justify-center'>
				<BackgroundGrid />
				<div className='relative h-full w-full max-w-7xl p-10 md:p-5'>
					<div className='logo' />
				</div>
			</div>
		</TweenProvider>
	);
});
export default Header;
