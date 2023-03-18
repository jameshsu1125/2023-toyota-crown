import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { AuthorInformation, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';

const DELAY = 1000;

const EachVO = ({ children, index, didFadeIn }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 50 });
	useEffect(() => {
		if (didFadeIn) setStyle({ opacity: 0.5, y: 0 }, { duration: 500, delay: DELAY + index * 50 });
		else setStyle({ opacity: 0, y: 50 }, { duration: 500, delay: index * 50 });
	}, [didFadeIn]);
	return <div style={style}>{children}</div>;
};

const VoiceOver = memo(() => {
	const [context] = useContext(Context);
	const { index } = context[ACTION.page];
	const { vo } = useMemo(() => AuthorInformation[index - 1 < 0 ? 0 : index - 1], [index]);
	const [style, setStyle] = useTween({ opacity: 0 });

	const [didFadeIn, setDidFadeIn] = useState(false);

	useEffect(() => {
		setDidFadeIn(false);
		if (index === PAGE_CONTEXT_NAME.intro || index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0 }, { onComplete: () => setDidFadeIn(true) });
		} else setStyle({ opacity: 1 }, { onComplete: () => setDidFadeIn(true) });
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
