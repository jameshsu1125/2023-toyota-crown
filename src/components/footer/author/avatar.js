import useTween from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';

const Avatar = memo(({ data, page }) => {
	const { index, onend } = page;
	const [className, setClassName] = useState('author-0');
	const [style, setStyle] = useTween({ opacity: 0, y: 96 });

	useEffect(() => {
		setStyle({ opacity: 0, y: 96 }, 1000);
		if (onend) {
			setClassName(data.className);
			setStyle({ opacity: 1, y: 0 }, 1000);
		}
	}, [index, onend]);

	return (
		<div className='avatar -ml-[4rem] md:ml-0'>
			<div className='w-24 rounded-full'>
				<div style={style} className={`${className} avatars h-full w-full`} />
			</div>
		</div>
	);
});
export default Avatar;
