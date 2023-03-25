/* eslint-disable no-lonely-if */
/* eslint-disable react/no-array-index-key */
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { AuthorInformation, BreakPoint, CaptionConfig, Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME } from '../../settings/constant';
import './index.less';
import SVG from './svg';
import TranslatePath from './translatePath';

const DEVICE = window.innerWidth >= BreakPoint;

const GradientCaption = ({ author, show = false }) => {
	const className = useMemo(() => {
		const idx = author - 1;
		const classes = [
			'h-full w-full caption',
			`caption${idx < 0 || idx >= AuthorInformation.length ? 0 : idx}`,
		];
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

	const [height, setHeight] = useState(-22);

	const [show, setShow] = useState(false);
	useEffect(() => setShow(false), [index]);

	useEffect(() => {
		if (DEVICE) {
			if (index !== PAGE_CONTEXT_NAME.content_7) {
				setHeight(106);
			} else {
				setHeight(167);
			}
		} else {
			if (index !== PAGE_CONTEXT_NAME.content_7) {
				setHeight(107);
			} else {
				setHeight(170);
			}
		}
	}, [index]);

	const Paths = useMemo(() => {
		const idx = index - 1;
		if (idx < 0 || idx >= AuthorInformation.length) return '';

		const property = AuthorInformation[idx];

		const onComplete = () => {
			setShow(true);
		};

		return property?.captions.map((e, i) => (
			<TranslatePath
				key={JSON.stringify(e) + i}
				delay={CaptionConfig.eachCharacterDelay * i}
				active={active}
				onComplete={i === property.captions.length - 1 ? onComplete : () => {}}
			>
				{e}
			</TranslatePath>
		));
	}, [index, active]);

	return (
		<div className='relative w-[600px]' style={{ height: `${height}px` }}>
			<SVG>{Paths}</SVG>
			<GradientCaption show={show} author={index} />
		</div>
	);
});
export default CaptionSVG;