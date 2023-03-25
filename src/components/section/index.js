import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';

const DELAY = 1000;

const Section = memo(({ children }) => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, onend } = page;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro || index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0 });
		} else if (onend) setStyle({ opacity: 1 }, { duration: 1200, delay: DELAY });
	}, [index, onend]);

	return (
		<div className='Section absolute flex h-full w-full flex-col'>
			<div />
			<div className='relative flex w-full flex-1 justify-center'>
				<div style={style} className='bg-gradient-dark absolute top-0 h-full w-full' />
				<div className='h-full w-full max-w-7xl p-10 md:p-5'>{children}</div>
			</div>
			<div />
		</div>
	);
});
export default Section;
