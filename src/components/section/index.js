import { memo } from 'react';
import './index.less';

const Section = memo(({ children }) => (
	<div className='Section absolute flex h-full w-full flex-col'>
		<div />
		<div className='flex w-full flex-1 justify-center'>
			<div className='h-full w-full max-w-7xl p-10 md:p-5'>{children}</div>
		</div>
		<div className='' />
	</div>
));
export default Section;
