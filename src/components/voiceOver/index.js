import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AuthorInformation, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';

const DELAY = 0;

const EachVO = ({ children, index, didFadeIn }) => {
	const [context] = useContext(Context);
	const { voIndex } = context[ACTION.page];
	const ref = useRef();

	const [style, setStyle] = useTween({ opacity: 0, y: 50 });

	useEffect(() => {
		if (didFadeIn) setStyle({ opacity: 0.2, y: 0 }, { duration: 500, delay: DELAY + index * 50 });
		else setStyle({ opacity: 0, y: 50 }, { duration: 500, delay: index * 50 });
	}, [didFadeIn]);

	useEffect(() => {
		if (index === voIndex) {
			setStyle(
				{ opacity: 1, y: 0 },
				{
					duration: 1000,
					easing: Bezier.easeInOutQuart,
					onComplete: () => {
						ref.current.style.opacity = 1;
						ref.current.style.transform = 'translateY(0px)';
					},
				},
			);
		} else if (index < voIndex) {
			setStyle({ opacity: 1 });
		}
	}, [voIndex, index]);

	return (
		<div ref={ref} style={style}>
			{children}
		</div>
	);
};

const VoiceOver = memo(() => {
	const [context] = useContext(Context);
	const { index } = context[ACTION.page];
	const { vo } = useMemo(() => {
		const idx = index - 1;
		return AuthorInformation[idx < 0 || idx >= AuthorInformation.length ? 0 : idx];
	}, [index]);
	const [style, setStyle] = useTween({ opacity: 0 });

	const [didFadeIn, setDidFadeIn] = useState(false);

	useEffect(() => {
		setDidFadeIn(false);
		if (index === PAGE_CONTEXT_NAME.intro || index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0 }, { duration: 500, onComplete: () => setDidFadeIn(true) });
		} else setStyle({ opacity: 1 }, { duration: 500, onComplete: () => setDidFadeIn(true) });
	}, [index]);

	return (
		<div
			style={style}
			className='VoiceOver -mt-16 h-36 space-y-2 font-notoSans text-2xl font-light text-white md:-mt-0 md:text-lg'
		>
			{vo.map((e, i) => (
				<EachVO key={e} index={i} didFadeIn={didFadeIn}>
					{e}
				</EachVO>
			))}
		</div>
	);
});
export default VoiceOver;
