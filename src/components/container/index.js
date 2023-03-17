import ImagePreloader from 'lesca-image-onload';
import { memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Context, VideoConfig } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import Footer from '../footer';
import Header from '../header';
import Video from '../video';
import './index.less';

const Container = memo(({ children }) => {
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const ref = useRef();
	const [fadeIn, setFadeIn] = useState(false);

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
			if (status === PAYLOAD_STATUS.logoDidFadeIn) {
				setFadeIn(true);
			}
		}
	}, [status]);

	const onLoaded = useCallback(() => {
		setContext({ type: ACTION.payLoad, state: { ...payLoad, video: 1 } });
	}, [payLoad]);

	const onEnded = (p) => {
		if (VideoConfig.urls.indexOf(p.url) === PAGE_CONTEXT_NAME.intro) {
			setContext({
				type: ACTION.payLoad,
				state: { ...payLoad, status: PAYLOAD_STATUS.introVideoDidPlayed },
			});
		}
	};

	return (
		<div ref={ref} className='Container absolute top-0 h-full w-full'>
			{payLoad.total !== 0 && payLoad.loaded !== 0 && payLoad.total === payLoad.loaded && (
				<Video onLoaded={onLoaded} fadeIn={fadeIn} onEnded={onEnded} />
			)}
			{children}
			<Footer />
			<Header />
		</div>
	);
});
export default Container;
