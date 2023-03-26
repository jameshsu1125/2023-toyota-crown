import { memo, useCallback, useContext, useEffect, useRef } from 'react';
import useWheelHeavy from '../../hooks/useWheelHeavy';
import { Context } from '../../settings/config';
import {
	ACTION,
	DIRECTION_STATE,
	PAGE_CONTEXT_NAME,
	PAYLOAD_STATUS,
} from '../../settings/constant';
import './index.less';
import { InterviewState } from './setting';

const WheelEventProvider = memo(({ setState }) => {
	const ref = useRef();
	const touchRef = useRef(0);

	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const page = context[ACTION.page];
	const { index } = page;

	const [active, launcher, direction] = useWheelHeavy(true);

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.detailVideo) ref.current.style.display = 'block';
		else ref.current.style.display = 'none';
	}, [index]);

	useEffect(() => {
		if (active && status === PAYLOAD_STATUS.introVideoDidPlayed) {
			const { enabled, stopForward, skipEnabled } = page;
			if (enabled) {
				const idx = index + (direction === DIRECTION_STATE.next ? 1 : -1);
				if (idx < 0 || idx > PAGE_CONTEXT_NAME.detailVideo) return;
				setContext({
					type: ACTION.page,
					state: {
						...page,
						direction,
						index: idx,
						enabled: false,
						stopForward: true,
						onend: false,
						skip: false,
						skipEnabled: false,
					},
				});
			} else {
				if (stopForward) return;
				if (!skipEnabled) return;

				const idx = index + (direction === DIRECTION_STATE.next ? 1 : -1);
				if (idx < 0 || idx > PAGE_CONTEXT_NAME.detailVideo) return;

				setContext({
					type: ACTION.page,
					state: {
						...page,
						direction,
						index: idx,
						enabled: false,
						stopForward: false,
						onend: false,
						skip: true,
						skipEnabled: false,
					},
				});
			}
			if (direction === DIRECTION_STATE.prev) {
				setState(InterviewState.userDidGoAway);
			}
		}
	}, [active]);

	const onWheel = useCallback(
		(e) => {
			if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
				launcher(e.deltaY);
			}
		},
		[status],
	);

	const onTouchStart = useCallback(
		(e) => {
			if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
				touchRef.current = e.targetTouches[0].clientY;
			}
		},
		[status],
	);

	const onTouchMove = useCallback(
		(e) => {
			if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
				const deltaY = touchRef.current - e.targetTouches[0].clientY;
				launcher(deltaY * 1.5);
				touchRef.current = e.targetTouches[0].clientY;
			}
		},
		[status],
	);

	useEffect(() => {}, []);

	return (
		<div
			ref={ref}
			onWheel={onWheel}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			className='absolute top-0 h-full w-full bg-[rgba(0,0,0,0)]'
		/>
	);
});
export default WheelEventProvider;
