import { memo, useEffect } from 'react';

const PS = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='fixed bottom-[11.2rem] md:bottom-10 right-10 text-sm text-[#c19c89] z-50'>
			*以實車為準
		</div>
	);
});
export default PS;
