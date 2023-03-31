import ImagePreloader from 'lesca-image-onload';
import { memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AutoPlay, Context, VideoConfig } from '../../settings/config';
import {
	ACTION,
	DIRECTION_STATE,
	PAGE_CONTEXT_NAME,
	PAYLOAD_STATUS,
} from '../../settings/constant';
import Footer from '../footer';
import Header from '../header';
import Mouse from '../mouseWheelIcon';
import Video from '../video';
import './index.less';
import WheelEventProvider from './wheelEventProvider';

const Container = memo(({ children }) => {
	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const payLoadRef = useRef();

	const page = context[ACTION.page];
	const { status } = payLoad;

	const ref = useRef();
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		payLoadRef.current = payLoad;
	}, [payLoad]);

	useEffect(() => {
		new ImagePreloader()
			.load(ref.current, {
				onUpdate: (e) => {
					const { loaded, total } = e;
					setContext({
						type: ACTION.payLoad,
						state: { ...payLoadRef.current, loaded, total },
					});
				},
			})
			.then((e) => {
				const { loaded, total } = e;
				setContext({
					type: ACTION.payLoad,
					state: { ...payLoadRef.current, loaded, total },
				});
			});
	}, []);

	useEffect(() => {
		// show container when content loaded
		if (status === VideoConfig.fadeInTiming) {
			ref.current.style.visibility = 'visible';
			setFadeIn(true);
		}
	}, [status]);

	const onLoaded = useCallback(() => {
		const { video } = payLoad;
		setContext({ type: ACTION.payLoad, state: { ...payLoad, video: video + 1 } });
	}, [payLoad]);

	const onEnded = () => {
		setContext({
			type: ACTION.page,
			state: {
				...page,
				onend: true,
				stopForward: false,
				voIndex: false,
				skipEnabled: false,
				skip: false,
			},
		});
	};

	const onStop = (playingTarget) => {
		const [target] = VideoConfig.targets.filter((e) => e.url === playingTarget.getURL());
		if (target.name === PAGE_CONTEXT_NAME.intro) {
			setContext({
				type: ACTION.payLoad,
				state: { ...payLoad, status: PAYLOAD_STATUS.introVideoDidPlayed },
			});
			setContext({
				type: ACTION.page,
				state: { ...page, enabled: true, skip: false, skipEnabled: false },
			});
		} else {
			setContext({
				type: ACTION.page,
				state: { ...page, enabled: true, skip: false, skipEnabled: false },
			});
			if (AutoPlay) {
				const { index } = page;
				const idx = index + 1;
				if (idx < 0 || idx > PAGE_CONTEXT_NAME.detailVideo) return;
				setContext({
					type: ACTION.page,
					state: {
						...page,
						direction: DIRECTION_STATE.next,
						index: idx,
						enabled: false,
						stopForward: true,
						onend: false,
					},
				});
			}
		}
	};

	useEffect(() => {
		if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
			setContext({
				type: ACTION.page,
				state: { ...page, enabled: true },
			});
		}
	}, [status]);

	return (
		<div ref={ref} className='Container absolute top-0 h-full w-full'>
			<WheelEventProvider>
				{payLoad.total !== 0 && payLoad.loaded !== 0 && payLoad.total === payLoad.loaded && (
					<Video onLoaded={onLoaded} fadeIn={fadeIn} onEnded={onEnded} onStop={onStop} />
				)}
				{children}
				<Footer />
				<Header />
				<Mouse />
			</WheelEventProvider>
		</div>
	);
});
export default Container;
