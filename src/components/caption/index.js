import { memo, useContext, useEffect, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import CaptionSVG from './caption';
import './index.less';

const Caption = memo(() => {
	const [context] = useContext(Context);
	const { status } = context[ACTION.payLoad];

	const [active, setActive] = useState(false);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.onContextDidFadeIn) {
			setActive(true);
		}
	}, [status]);

	useEffect(() => {}, []);
	return (
		<div className='Caption w-full scale-90'>
			<CaptionSVG active={active} />
		</div>
	);
});
export default Caption;
