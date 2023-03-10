import ImagePreloader from 'lesca-image-onload';
import { memo, useContext, useEffect, useRef } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATE, PAYLOAD_STATUS } from '../../settings/constant';
import Footer from '../footer';
import Header from '../header';
import VideoQueue from '../videoQueue';
import './index.less';

const Container = memo(({ children }) => {
	const [context, setContext] = useContext(Context);
	const { status } = context[ACTION.payLoad];

	const ref = useRef();
	useEffect(() => {
		new ImagePreloader()
			.load(ref.current, {
				onUpdate: (e) => {
					const { loaded, total } = e;
					setContext({ type: ACTION.payLoad, state: { ...PAYLOAD_STATE, status, loaded, total } });
				},
			})
			.then((e) => {
				const { loaded, total } = e;
				setContext({ type: ACTION.payLoad, state: { ...PAYLOAD_STATE, status, loaded, total } });
			});
	}, []);

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onLoaded) {
			ref.current.style.visibility = 'visible';
		}
	}, [status]);

	return (
		<div ref={ref} className='Container absolute top-0 h-full w-full'>
			<VideoQueue />
			{children}
			<Footer />
			<Header />
		</div>
	);
});
export default Container;
