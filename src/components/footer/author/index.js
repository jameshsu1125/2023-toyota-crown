import { memo, useContext, useMemo } from 'react';
import { AuthorInformation, Context } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './index.less';

const Author = memo(() => {
	const [context] = useContext(Context);
	const { author } = context[ACTION.page];
	const authorData = useMemo(() => AuthorInformation[author], [author]);
	return (
		<div className='Author -mt-[5.2rem] flex flex-col items-center justify-start space-y-4 px-10 md:mt-0 md:mt-0 md:flex-row md:space-y-0 md:space-x-6 md:px-5'>
			<div className='avatar -ml-20 md:ml-0'>
				<div className='w-24 rounded-full'>
					<div className='avatar-0 h-full w-full' />
				</div>
			</div>
			<div className='flex w-auto flex-col items-start justify-center'>
				<div className='font-notoSans text-2xl font-light md:text-base'>導覽者</div>
				<div className='font-notoSerif text-3xl font-semibold md:text-xl'>{authorData.name}</div>
				<div className='font-notoSans text-xl font-light md:text-base'>
					{authorData.positionName}
				</div>
			</div>
		</div>
	);
});
export default Author;
