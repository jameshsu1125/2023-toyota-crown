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

const WheelEventProvider = memo(({ children }) => {
	const touchRef = useRef(0);

	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const page = context[ACTION.page];

	const [active, launcher, direction] = useWheelHeavy(true);

	useEffect(() => {
		// console.table(page);
	}, [page]);

	useEffect(() => {
		if (active && status === PAYLOAD_STATUS.introVideoDidPlayed) {
			const { enabled, index, stopForward, skipEnabled } = page;
			if (enabled) {
				console.log('nor');
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
				console.log('skip');

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

	return (
		<div
			className='relative h-full w-full'
			onWheel={onWheel}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
		>
			{children}
		</div>
	);
});
export default WheelEventProvider;
