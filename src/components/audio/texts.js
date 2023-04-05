/* eslint-disable no-lonely-if */
import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useId, useRef } from 'react';
import { LinkForTry } from '../../settings/config';
import { PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

export const LinkTryText = memo(({ status, device, index }) => {
	const id = useId();
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (device) {
			setStyle(
				{ opacity: 1 },
				{
					onComplete: () => {
						ref.current.style.display = 'block';
					},
				},
			);
		} else {
			if (
				status === PAYLOAD_STATUS.introVideoDidPlayed &&
				index > PAGE_CONTEXT_NAME.intro &&
				index < PAGE_CONTEXT_NAME.detailVideo
			) {
				ref.current.parentNode.parentNode.style.justifyContent = 'flex-end';
				if (ref.current.style.opacity !== '1') {
					setStyle(
						{ opacity: 1 },
						{
							onComplete: () => {
								ref.current.style.display = 'block';
							},
						},
					);
				}
			} else {
				if (ref.current.style.opacity !== '0') {
					setStyle(
						{ opacity: 0 },
						{
							onComplete: () => {
								if (index === PAGE_CONTEXT_NAME.intro) {
									ref.current.style.display = 'none';
								} else {
									setStyle(
										{ opacity: 1 },
										{
											onStart: () => {
												ref.current.parentNode.parentNode.style.justifyContent = 'center';
											},
										},
									);
								}
							},
						},
					);
				}
			}
		}
	}, [status, device, index]);

	useEffect(() => Click.add(`#${id}`, () => window.open(LinkForTry)), [status]);

	return <div ref={ref} style={style} id={id} className='text' />;
});

export const CallForActionText = memo(({ status, device, index }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: 10 });

	useEffect(() => {
		if (!device) {
			if (status === PAYLOAD_STATUS.introVideoDidPlayed && index === 0) {
				setStyle({ opacity: 1, y: 0 }, { delay: 500 });
			} else if (index > PAGE_CONTEXT_NAME.intro) {
				if (ref.current.style.opacity !== '0') setStyle({ opacity: 0, y: 10 });
			}
		}
	}, [status, device, index]);

	return (
		<div
			ref={ref}
			style={style}
			className='absolute top-0 flex h-full w-full items-center justify-center'
		>
			<div className='scrollDownText' />
		</div>
	);
});
