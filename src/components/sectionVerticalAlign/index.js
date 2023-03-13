import { memo, useEffect } from 'react';
import './index.less';

const SectionVerticalAlign = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='flex h-full w-full items-start md:items-center'>
			<div className='h-auto w-full'>{children}</div>
		</div>
	);
});
export default SectionVerticalAlign;
