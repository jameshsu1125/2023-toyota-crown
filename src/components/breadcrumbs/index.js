import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { AuthorInformation, Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

const Breadcrumbs = memo(() => {
	const [context] = useContext(Context);
	const { author } = context[ACTION.page];
	const { status } = context[ACTION.payLoad];

	const [tweenStyle, setTweenStyle] = useState(false);
	const [index, setIndex] = useState(false);
	const [didFadeIn, setDidFadeIn] = useState(false);

	const property = useMemo(() => {
		const data = AuthorInformation[author];
		if (didFadeIn) setIndex(data.index);
		return data;
	}, [author, didFadeIn]);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.onContextDidFadeIn) {
			setTweenStyle({ opacity: 1 });
		}
	}, [status]);

	return (
		<TweenProvider
			defaultStyle={{ opacity: 0 }}
			tweenStyle={tweenStyle}
			options={{
				delay: 1000,
				onComplete: () => {
					setDidFadeIn(true);
				},
			}}
		>
			<div className='Breadcrumbs mb-12 flex w-full flex-col items-start space-y-3 md:mb-20'>
				<div className='font-notoSans'>{property.breadcrumbs}</div>
				<div className='bars flex flex-row space-x-1'>
					{AuthorInformation.map((e, i) => (
						<div key={JSON.stringify(e)} className={i === index ? 'active' : ''} />
					))}
				</div>
			</div>
		</TweenProvider>
	);
});
export default Breadcrumbs;
