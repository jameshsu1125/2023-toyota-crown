import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import CaptionSVG from './caption';
import './index.less';

const Caption = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, onend } = page;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro || index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0 });
		} else setStyle({ opacity: 1 });
	}, [index, onend]);

	return (
		<div style={style} className='Caption w-full scale-75 md:scale-90'>
			<CaptionSVG active />
		</div>
	);
});
export default Caption;
