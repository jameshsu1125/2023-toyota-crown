import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

const BackgroundGrid = memo(() => {
	const [context] = useContext(Context);
	const { status } = context[ACTION.payLoad];
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onReady) {
			setStyle({ opacity: 0.5 }, 2000);
		}
	}, [status]);
	return <div className='BackgroundGrid' style={style} />;
});
export default BackgroundGrid;
