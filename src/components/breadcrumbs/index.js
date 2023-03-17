import { TweenProviderMemo } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { AuthorInformation, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';

const Breadcrumbs = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, onend } = page;

	const [tweenStyle, setTweenStyle] = useState(false);
	const [idx, setIndex] = useState(false);
	const [didFadeIn, setDidFadeIn] = useState(false);

	const property = useMemo(() => {
		const sn = index - 1;
		const data = AuthorInformation[sn < 0 ? 0 : sn];
		if (didFadeIn) setIndex(data.index - 1);
		return data;
	}, [index, didFadeIn]);

	useEffect(() => {
		if (index !== PAGE_CONTEXT_NAME.intro || index !== PAGE_CONTEXT_NAME.detailVideo) {
			if (onend) setTweenStyle({ opacity: 1 });
		} else setTweenStyle({ opacity: 0 });
	}, [index, onend]);

	return (
		<TweenProviderMemo
			defaultStyle={{ opacity: 0 }}
			tweenStyle={tweenStyle}
			options={{
				delay: 500,
				onStart: () => {
					setDidFadeIn(false);
				},
				onComplete: () => {
					setDidFadeIn(true);
				},
			}}
		>
			<div className='Breadcrumbs mb-12 flex w-full flex-col items-start space-y-3 md:mb-20'>
				<div className='font-notoSans'>{property.breadcrumbs}</div>
				<div className='bars flex flex-row space-x-1'>
					{AuthorInformation.map((e, i) => (
						<div key={JSON.stringify(e)} className={i === idx ? 'active' : ''} />
					))}
				</div>
			</div>
		</TweenProviderMemo>
	);
});
export default Breadcrumbs;
