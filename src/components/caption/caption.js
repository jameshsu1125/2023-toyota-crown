/* eslint-disable react/no-array-index-key */
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
	const { index } = context[ACTION.page];
	const [show, setShow] = useState(false);

	const Paths = useMemo(() => {
		const property = AuthorInformation[index];

		const onComplete = () => {
			setShow(true);
		};

		return property.captions.map((e, idx) => (
			<TranslatePath
				key={JSON.stringify(e) + idx}
				delay={CaptionConfig.eachCharacterDelay * idx}
				active={active}
				onComplete={idx === property.captions.length - 1 ? onComplete : () => {}}
			>
				{e}
			</TranslatePath>
		));
	}, [index, active]);

	return (
		<div className='relative h-[200px] w-[550px]'>
			<SVG>{Paths}</SVG>
			<GradientCaption show={show} author={index} />
		</div>
	);
});
export default CaptionSVG;
