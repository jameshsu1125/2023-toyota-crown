import { memo, useContext, useEffect, useState } from 'react';
import { Context, EventContext } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import Car from './car';
import DarkScreen from './darkScreen';
import Gradient from './gradient';
import './index.less';

const Interview = memo(() => {
	const [context] = useContext(Context);
	const { index } = context[ACTION.page];

	const [eventContext] = useContext(EventContext);
	const { videoStop } = eventContext;

	const [active, setActive] = useState(false);

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.detailVideo) {
			setActive(true);
		}
	}, [index]);

	return (
		<div className='Interview'>
			<div className='cistern'>
				<DarkScreen active={active} videoStop={videoStop} />
				<Gradient videoStop={videoStop} />
				<Car videoStop={videoStop} />
			</div>
		</div>
	);
});
export default Interview;
