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
	const { index, onend } = context[ACTION.page];
	const [height, setHeight] = useState(-22);
	const [show, setShow] = useState(false);

	const [enabled, setEnabled] = useState(false);
	const [Paths, setPaths] = useState('');
	const [authorIndex, setAuthorIndex] = useState(index);

	useEffect(() => {
		if (onend) {
			const idx = index - 1;
			if (idx < 0 || idx >= AuthorInformation.length) return;
			const property = AuthorInformation[idx];
			const onComplete = () => setShow(true);
			const op = property?.captions.map((e, i) => (
				<TranslatePath
					key={JSON.stringify(e) + i}
					delay={CaptionConfig.eachCharacterDelay * i}
					active={active}
					onComplete={i === property.captions.length - 1 ? onComplete : () => {}}
				>
					{e}
				</TranslatePath>
			));
			setPaths(op);
			setAuthorIndex(index);
		}
		if (!enabled) {
			setPaths('');
		}
	}, [enabled]);

	useEffect(() => {
		setShow(false);
		setEnabled(false);
	}, [index]);

	useEffect(() => {
		if (onend) setEnabled(true);
	}, [onend]);

	useEffect(() => {
		if (DEVICE) {
			if (index !== PAGE_CONTEXT_NAME.content_7) setHeight(106);
			else setHeight(106);
		} else {
			if (index !== PAGE_CONTEXT_NAME.content_7) setHeight(107);
			else setHeight(155);
		}
	}, [index]);

	return (
		<div className='relative w-[750px]' style={{ height: `${height}px` }}>
			<SVG>{Paths}</SVG>
			<GradientCaption show={show} author={authorIndex} />
		</div>
	);
});
export default CaptionSVG;
