import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useRef } from 'react';
import { AuthorInformation, BreakPoint, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';

let firstVisited = false;
const device = window.innerWidth < BreakPoint;

const Text = ({ children, index, voIndex, i }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 30 });
	const voIndexRef = useRef();
	const oldIndexRef = useRef();
	const ref = useRef();

	const show = () => {
		if (device && i === oldIndexRef.current) {
			setStyle(
				{ opacity: 0, y: 30 },
				{
					duration: 1,
					onStart: () => {
						if (device) {
							ref.current.style.display = 'none';
						}
					},
				},
			);
		}
		if (i === voIndex) {
			setStyle(
				{ opacity: 1, y: 0 },
				{
					duration: 500,
					easing: Bezier.easeInQuart,
					onStart: () => {
						if (device) {
							ref.current.style.display = 'block';
						}
					},
				},
			);
			oldIndexRef.current = voIndex;
		}
	};

	useEffect(() => {
		// todo fadeOut
		setStyle(
			{ opacity: 0 },
			{
				duration: 500,
				onComplete: () => {
					setStyle({ opacity: 0.3, y: 0 }, 500);
				},
			},
		);
		voIndexRef.current = false;
	}, [index]);

	useEffect(() => {
		// todo fadeout
		if (voIndex !== false) {
			if (voIndexRef.current === false) {
				voIndexRef.current = voIndex;
				if (!firstVisited) {
					firstVisited = true;
					show();
				}
				return;
			}
			show();
		}
	}, [voIndex]);
	return (
		<div ref={ref} style={style}>
			{children}
		</div>
	);
};

const VoiceOver = memo(() => {
	const [context] = useContext(Context);
	const { index, voIndex } = context[ACTION.page];

	const vo = useMemo(() => {
		const idx = index - 1;
		if (idx < 0 || idx >= AuthorInformation.length) return [];
		return AuthorInformation[idx].vo;
	}, [index]);

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro || index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0 }, { duration: 500 });
		} else {
			setStyle({ opacity: 1 }, { delay: 500, duration: 500 });
		}
	}, [index]);

	return (
		<div
			style={style}
			className='VoiceOver -mt-16 h-36 space-y-2 font-notoSans text-2xl font-light text-white md:-mt-0 md:text-lg'
		>
			{vo.map((e, i) => (
				<Text i={i} index={index} voIndex={voIndex} key={e}>
					{e}
				</Text>
			))}
		</div>
	);
});
export default VoiceOver;
