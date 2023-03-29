import Click from 'lesca-click';
import Gtag from 'lesca-gtag';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useId, useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';
import { AudioConfig, GtagConfig, InterviewConfig } from '../../../settings/config';
import { InterviewState } from '../setting';
import './index.less';
import Player from './youtube';

const Slick = ({ data, i, index, state }) => {
	const className = useMemo(() => {
		const styles = { opacity20: 'opacity-20', opacity100: 'opacity-100' };
		if (i === index) return styles.opacity100;
		return styles.opacity20;
	}, [index, i]);

	const player = useMemo(() => {
		if (state === InterviewState.carouselDidFadeIn && i === index) {
			return <Player url={data.youtube} />;
		}
		return null;
	}, [index, i, state]);

	return (
		<div className='yt'>
			<div className={`yt-c ${data.youtubeCover} ${className}`}>
				<div>{player}</div>
			</div>
		</div>
	);
};

const Arrows = ({ direction, onClick }) => {
	const id = useId();
	useEffect(() => Click.add(`#${id}`, onClick), []);
	return <div id={id} className={`${direction ? 'arrow next' : 'arrow'}`} />;
};

const Carousel = memo(({ state, setState, youtubeIndex, audio, setYoutubeIndex }) => {
	const slickRef = useRef();
	const [style, setStyle] = useTween({ opacity: 0, x: 300 });
	const [idx, setIndex] = useState(youtubeIndex);

	const audioRef = useRef();

	useEffect(() => {
		audioRef.current = audio;
	}, [audio]);

	useEffect(() => {
		slickRef.current.slickGoTo(youtubeIndex);
		try {
			Gtag.event(GtagConfig.深度了解.pv, GtagConfig.深度了解.event[youtubeIndex].breadcrumbs);
		} catch (e) {
			console.log(e);
		}
	}, [youtubeIndex]);

	const settings = {
		className: 'center',
		infinite: true,
		slidesToShow: 1,
		speed: 500,
		dots: false,
		initialSlide: youtubeIndex,
		nextArrow: <Arrows direction onClick={() => slickRef.current.slickNext()} />,
		prevArrow: <Arrows onClick={() => slickRef.current.slickPrev()} />,
		afterChange: (e) => {
			setYoutubeIndex(e);
			setIndex(e);
		},
		onInit: () => setIndex(youtubeIndex),
	};

	useEffect(() => {
		if (state === InterviewState.carDidGoDown) {
			setStyle(
				{ opacity: 1, x: 0 },
				{
					duration: 2000,
					onComplete: () => {
						setState(InterviewState.carouselDidFadeIn);
						const { muted, content } = audioRef.current;
						const bgm = content[content.length - 1];
						if (!muted) {
							bgm.fade(AudioConfig.minScaleVolume, 0, 1000);
						}
					},
				},
			);
		}
	}, [state]);

	return (
		<div className='Carousel'>
			<div style={style} className='content'>
				<Slider ref={slickRef} {...settings}>
					{InterviewConfig.map((e, i) => (
						<Slick key={JSON.stringify(e)} data={e} i={i} index={idx} state={state} />
					))}
				</Slider>
			</div>
		</div>
	);
});
export default Carousel;
