import { memo, useEffect } from 'react';
import './index.less';

const Section = memo(() => {
	useEffect(() => {}, []);
	return <div className='absolute top-[115px]'>Section</div>;
});
export default Section;
