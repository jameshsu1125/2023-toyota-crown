import useTween from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';

const Position = memo(({ data, page }) => {
	const { index, onend } = page;
	const [position, setPosition] = useState('');
	const [style, setStyle] = useTween({ opacity: 0, y: 10 });

	useEffect(() => {
		setStyle({ opacity: 0, y: 10 }, 500);
		if (onend) {
			setPosition(data.positionName);
			setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: 400 });
		}
	}, [index, onend]);

	return (
		<div style={style} className='font-notoSans text-xl font-light text-[#AAAAAA] md:text-base'>
			{position}
		</div>
	);
});
export default Position;
