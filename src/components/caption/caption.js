import { memo, useContext, useMemo, useState } from 'react';
import { AuthorInformation, CaptionConfig, Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import './index.less';
import SVG from './svg';
import TranslatePath from './translatePath';

const GradientCaption = ({ author, show = false }) => {
	const className = useMemo(() => {
		const classes = ['h-full w-full caption', `caption${author}`];
		if (show) classes.push('block');
		else classes.push('hidden');
		return classes.join(' ');
	}, [show, author]);

	return (
		<div className={className}>
			<div className='gradient' />
		</div>
	);
};

const CaptionSVG = memo(({ active = false }) => {
	const [context] = useContext(Context);
	const { author } = context[ACTION.page];
	const [show, setShow] = useState(false);

	const Paths = useMemo(() => {
		const property = AuthorInformation[author];

		const onComplete = () => {
			setShow(true);
		};

		return property.captions.map((e, index) => (
			<TranslatePath
				key={JSON.stringify(e + index)}
				delay={CaptionConfig.eachCharacterDelay * index}
				active={active}
				onComplete={index === property.captions.length - 1 ? onComplete : () => {}}
			>
				{e}
			</TranslatePath>
		));
	}, [author, active]);

	return (
		<div className='relative h-[200px] w-[550px]'>
			<SVG>{Paths}</SVG>
			<GradientCaption show={show} author={author} />
		</div>
	);
});
export default CaptionSVG;
