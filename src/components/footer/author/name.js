import useTween from 'lesca-use-tween';
import { memo, useEffect, useMemo, useState } from 'react';

const Name = memo(({ data, page }) => {
	const { index, onend } = page;
	const [name, setName] = useState('');
	const [style, setStyle] = useTween({ opacity: 0, y: 10 });

	useEffect(() => {
		setStyle({ opacity: 0, y: 10 }, 500);
		if (onend) {
			setName(data.name);
			setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: 300 });
		}
	}, [index, onend]);

	const currentName = useMemo(() => {
		const isSpecialCharacter = name.indexOf('宍') >= 0;
		if (isSpecialCharacter) {
			const spanCharacter = name.slice(0, 1);
			const restCharacter = name.slice(1);
			return (
				<>
					<span>{spanCharacter}</span>
					{restCharacter}
				</>
			);
		}
		return name;
	}, [name]);

	return (
		<div
			style={style}
			className='name font-NotoSerifJP text-3xl font-bold text-[#F8E8DB] md:text-2xl'
		>
			{currentName}
		</div>
	);
});
export default Name;
