import { memo } from 'react';
import './index.less';

const SectionVerticalAlign = memo(({ children }) => (
	<div className='SectionVerticalAlign flex h-full w-full items-start md:items-center'>
		<div className='flex h-full max-h-[28rem] w-full flex-col md:max-h-[26rem]'>{children}</div>
	</div>
));
export default SectionVerticalAlign;
