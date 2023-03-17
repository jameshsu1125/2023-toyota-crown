import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { AuthorInformation, Context } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

const VoiceOver = memo(() => {
	const [context] = useContext(Context);
	const { index } = context[ACTION.page];
	const { vo } = useMemo(() => AuthorInformation[index], [index]);

	const { status } = context[ACTION.payLoad];
	const [tweenStyle, setTweenStyle] = useState(false);
	useEffect(() => {
		// if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
		// 	setTweenStyle({ opacity: 1, y: 0 });
		// }
	}, [status]);

	return (
		<TweenProvider
			defaultStyle={{ opacity: 0, y: 50 }}
			tweenStyle={tweenStyle}
			options={{ delay: 2000 }}
		>
			<div className='VoiceOver -mt-16 space-y-2 font-notoSans text-2xl font-light text-white md:-mt-0 md:text-lg'>
				{vo.map((e) => (
					<div key={e}>{e}</div>
				))}
			</div>
		</TweenProvider>
	);
});
export default VoiceOver;
