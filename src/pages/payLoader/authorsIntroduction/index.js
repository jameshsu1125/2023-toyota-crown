import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Authors } from '../../../settings/config';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const Title = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 100 });

	useEffect(() => {
		if (steps === PayLoaderSteps.logoDidFadeIn) {
			setStyle({ opacity: 1, y: 0 }, { delay: 500 });
		} else if (steps === PayLoaderSteps.userDidActive) {
			setStyle({ opacity: 0 }, 500);
		}
	}, [steps]);

	return (
		<div style={style} className='title'>
			- 導覽者：來自TOYOTA，開發CROWN的工藝家 -
		</div>
	);
};

const Author = ({ data, index, steps, onComplete }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 100 });

	useEffect(() => {
		if (steps === PayLoaderSteps.logoDidFadeIn) {
			setStyle(
				{ opacity: 1, y: 0 },
				{
					delay: 500 + 100 * index,
					onComplete: () => {
						if (Authors.length - 1 === index) {
							onComplete();
						}
					},
				},
			);
		} else if (steps === PayLoaderSteps.userDidActive) {
			setStyle({ opacity: 0 }, 500);
		}
	}, [steps]);

	return (
		<div style={style} className='author'>
			<div className='avatar'>
				<div className='w-24 rounded-full'>
					<div className={`auth ${data.className}`} />
				</div>
			</div>
			<div className='name'>{data.name}</div>
			<div className='positionName'>{data.positionName}</div>
		</div>
	);
};

const AuthorIntroduction = memo(() => {
	const [context, setContext] = useContext(PayLoaderContext);
	const { steps } = context;
	return (
		<div className='AuthorIntroduction'>
			<div className='align'>
				<Title steps={steps} />
				<div className='authors'>
					{Authors.map((data, index) => (
						<Author
							key={JSON.stringify(data)}
							data={data}
							steps={steps}
							index={index}
							onComplete={() => {
								setContext((S) => ({ ...S, steps: PayLoaderSteps.authorDidFadeIn }));
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
});
export default AuthorIntroduction;
