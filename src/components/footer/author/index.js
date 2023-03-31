import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo } from 'react';
import { AuthorInformation, Context } from '../../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../../settings/constant';
import Avatar from './avatar';
import './index.less';
import Name from './name';
import Position from './position';

const Author = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, onend } = page;
	const [style, setStyle] = useTween({ opacity: 0 });

	const authorData = useMemo(() => {
		const idx = index - 1;
		if (idx < 0 || idx >= AuthorInformation.length) {
			return { className: '', name: '', positionName: '' };
		}
		return AuthorInformation[idx];
	}, [index]);

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro || index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0 });
		} else setStyle({ opacity: 1 });
	}, [index, onend]);

	return (
		<div
			style={style}
			className='Author flex flex-col items-start justify-start space-y-3 px-10 md:flex-row md:space-y-0 md:space-x-6 md:px-5'
		>
			<Avatar data={authorData} page={page} />
			<div className='flex w-auto flex-col items-start justify-center'>
				<div className='font-notoSansLight text-2xl text-white md:text-base'>導覽者</div>
				<Name data={authorData} page={page} />
				<Position data={authorData} page={page} />
			</div>
		</div>
	);
});
export default Author;
