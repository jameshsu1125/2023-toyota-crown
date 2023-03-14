import ImagePreloader from 'lesca-image-onload';
import { memo, useCallback, useContext, useEffect, useRef } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import Footer from '../footer';
import Header from '../header';
import Video from '../video';
import './index.less';

const Container = memo(({ children }) => {
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const ref = useRef();

	useEffect(() => {
		new ImagePreloader()
			.load(ref.current, {
				onUpdate: (e) => {
					const { loaded, total } = e;
					setContext({
						type: ACTION.payLoad,
						state: { ...payLoad, loaded, total },
					});
				},
			})
			.then((e) => {
				const { loaded, total } = e;
				setContext({
					type: ACTION.payLoad,
					state: { ...payLoad, loaded, total },
				});
			});
	}, []);

	useEffect(() => {
		if (status >= PAYLOAD_STATUS.onLoaded) {
			ref.current.style.visibility = 'visible';
		}
	}, [status]);

	const onLoaded = useCallback(() => {
		setContext({ type: ACTION.payLoad, state: { ...payLoad, video: 1 } });
	}, [payLoad]);

	return (
		<div ref={ref} className='Container absolute top-0 h-full w-full'>
			{payLoad.total !== 0 && payLoad.loaded !== 0 && payLoad.total === payLoad.loaded && (
				<Video onLoaded={onLoaded} />
			)}
			{children}
			<Footer />
			<Header />
		</div>
	);
});
export default Container;
