import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { InterviewState } from './setting';
import './interviewLogoType.less';

const H1 = memo(({ state }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: 30 });
	useEffect(() => {
		if (state === InterviewState.videoDidFadeOut) {
			setStyle({ opacity: 1, y: 0 }, { delay: 300 });
		} else if (state === InterviewState.userDidGoAway) {
			setStyle({ opacity: 0 });
		}
	}, [state]);
	return (
		<div style={style} className='title'>
			<div ref={ref} className='gradient' />
		</div>
	);
});

const H2 = memo(({ state }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 30 });
	useEffect(() => {
		if (state === InterviewState.videoDidFadeOut) {
			setStyle({ opacity: 1, y: 0 }, { delay: 600 });
		} else if (state === InterviewState.userDidGoAway) {
			setStyle({ opacity: 0 });
		}
	}, [state]);
	return (
		<div
			style={style}
			className='pt-10 font-notoSans text-[1.75rem] md:text-xl tracking-[0.5rem] md:mt-[-570px] mt-[-510px]'
		>
			工藝之最 藝術特展
		</div>
	);
});

const Title = memo(({ state }) => (
	<div className='InterviewLogoType pointer-events-none absolute top-0 flex h-full w-full items-center flex-col justify-center'>
		<H1 state={state} />
		<H2 state={state} />
	</div>
));

export default Title;
