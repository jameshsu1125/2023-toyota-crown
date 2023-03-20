import useTween from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';

const Position = memo(({ data, page }) => {
	const { index, onend } = page;
	const [position, setPosition] = useState('');
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		setStyle({ opacity: 0 }, 500);
		if (onend) {
			setPosition(data.positionName);
			setStyle({ opacity: 1 }, { duration: 2000, delay: 600 });
		}
	}, [index, onend]);

	return (
		<div style={style} className='font-notoSans text-xl font-light md:text-base'>
			{position}
		</div>
	);
});
export default Position;
