import { memo } from 'react';
import './index.less';

const Section = memo(({ children }) => (
	<div className='absolute flex h-full w-full flex-col'>
		<div className='h-[115px] md:h-[133px]' />
		<div className='flex w-full flex-1 justify-center'>
			<div className='h-full w-full max-w-7xl p-10 md:p-5'>{children}</div>
		</div>
		<div className='h-[155px] md:h-[212px]' />
	</div>
));
export default Section;
