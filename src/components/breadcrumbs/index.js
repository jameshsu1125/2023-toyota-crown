import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo } from 'react';
import { AuthorInformation, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';

const Breadcrumbs = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index } = page;

	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro || index === PAGE_CONTEXT_NAME.detailVideo) {
			setStyle({ opacity: 0 });
		} else setStyle({ opacity: 1 });
	}, [index]);

	const property = useMemo(() => {
		const idx = index - 1;
		const data = AuthorInformation[idx < 0 || idx >= AuthorInformation.length ? 0 : idx];

		return data;
	}, [index]);

	return (
		<>
			<div style={style} className='Breadcrumbs'>
				<div className='font-notoSans'>{property.breadcrumbs}</div>
				<div className='bars flex flex-row space-x-1'>
					{AuthorInformation.map((e, i) => (
						<div key={JSON.stringify(e)} className={i === index - 1 ? 'active' : ''} />
					))}
				</div>
			</div>
			<div style={style} className='breadcrumbs-mobile-text'>
				{property.breadcrumbs}
			</div>
		</>
	);
});
export default Breadcrumbs;
