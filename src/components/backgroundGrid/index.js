import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

const BackgroundGrid = memo(({ opacity }) => {
	const [context] = useContext(Context);
	const { status } = context[ACTION.payLoad];
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onReady) {
			setStyle({ opacity: opacity || 0.3 }, 2000);
		}
	}, [status]);
	return <div className={`BackgroundGrid${opacity ? '' : ' BGHide'}`} style={style} />;
});
export default BackgroundGrid;
