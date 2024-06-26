import Gtag from 'lesca-gtag';
import { memo, useCallback, useContext, useEffect, useRef } from 'react';
import useWheelHeavy from '../../hooks/useWheelHeavy';
import { Context, GtagConfig } from '../../settings/config';
import {
	ACTION,
	DIRECTION_STATE,
	PAGE_CONTEXT_NAME,
	PAYLOAD_STATUS,
} from '../../settings/constant';
import './index.less';

const WheelEventProvider = memo(({ children }) => {
	const ref = useRef();
	const touchRef = useRef(0);

	const [context, setContext] = useContext(Context);
	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const page = context[ACTION.page];
	const { index } = page;

	const [active, launcher, direction] = useWheelHeavy(true);

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.detailVideo) ref.current.style.display = 'none';
		else ref.current.style.display = 'block';

		const idx = index - 1;
		if (idx >= 0 && idx < GtagConfig.設計師頁.event.length) {
			Gtag.pv(`${GtagConfig.設計師頁.pv}-${GtagConfig.設計師頁.event[idx].breadcrumbs}`);
		}
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
		<div className='relative h-full w-full '>
			{children}
			<div
				ref={ref}
				onWheel={onWheel}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				className='absolute top-0 h-full w-full bg-[rgba(0,0,0,0)]'
			/>
		</div>
	);
});
export default WheelEventProvider;
