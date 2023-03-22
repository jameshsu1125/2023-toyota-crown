import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo } from 'react';
import { AuthorInformation, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';

const VoiceOver = memo(() => {
	const [context] = useContext(Context);
	const { index } = context[ACTION.page];

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
			{JSON.stringify(vo)}
		</div>
	);
});
export default VoiceOver;
