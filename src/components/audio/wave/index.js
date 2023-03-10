import { memo, useMemo } from 'react';
import './index.less';

const Wave = memo(({ belong }) => {
	const className = useMemo(() => {
		const classes = ['Wave'];
		if (belong === 'footer') classes.push('hidden md:block');
		else classes.push('block md:hidden');
		return classes.join(' ');
	}, [belong]);
	return <div className={className} />;
});
export default Wave;
