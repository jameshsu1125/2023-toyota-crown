import useTween from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';

const Name = memo(({ data, page }) => {
	const { index, onend } = page;
	const [name, setName] = useState('');
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		setStyle({ opacity: 0 }, 500);
		if (onend) {
			setName(data.name);
			setStyle({ opacity: 1 }, { duration: 2000, delay: 300 });
		}
	}, [index, onend]);

	return (
		<div style={style} className='font-notoSerif text-3xl font-bold text-[#F8E8DB] md:text-2xl'>
			{name}
		</div>
	);
});
export default Name;
