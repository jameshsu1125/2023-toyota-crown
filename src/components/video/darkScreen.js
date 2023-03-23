import BezierEasing from 'bezier-easing';
import EnterFrame from 'lesca-enterframe';
import { Bezier } from 'lesca-use-tween';
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { Context, EventContext, VideoConfig } from '../../settings/config';
import { ACTION } from '../../settings/constant';

const DarkScreen = forwardRef(({ videoRef, onStop }, ref) => {
	// contexts
	const [context] = useContext(Context);
	const { status } = context[ACTION.payLoad];
	const page = context[ACTION.page];
	const { stopForward, skip } = page;

	// event context
	const [, setEventContext] = useContext(EventContext);

	// refs
	const domRef = useRef();
	const stopForwardRef = useRef(stopForward);
	const onStopRef = useRef(onStop);
	const skipRef = useRef({ skip, time: 0 });

	useEffect(() => {
		stopForwardRef.current = stopForward;
	}, [stopForward]);

	useEffect(() => {
		if (skip) {
			const all = videoRef.current.filter((e) => e.isPlaying());
			const [playingTarget] = all;
			if (playingTarget) {
				const time = playingTarget.getTime();
				skipRef.current = { skip, time };
			}
		}
	}, [skip]);

	useEffect(() => {
		onStopRef.current = onStop;
	}, [onStop]);

	useEffect(() => {
		EnterFrame.add(() => {
			if (videoRef.current.length === VideoConfig.targets.length) {
				const [playingTarget] = videoRef.current.filter((e) => e.isPlaying());
				if (playingTarget) {
					const duration = playingTarget.getTotal();
					const { transitionDuration } = VideoConfig;
					if (!skipRef.current.skip) {
						if (duration) {
							const time = playingTarget.getTime();
							const min = duration - transitionDuration * 0.001;
							const max = transitionDuration * 0.001;

							// set video opacity
							let opacity;
							if (time < transitionDuration * 0.001) {
								const property = {
									percent: time / max,
									easingFunction: Bezier.easeInQuart,
								};
								const easing = BezierEasing(
									property.easingFunction[0],
									property.easingFunction[1],
									property.easingFunction[2],
									property.easingFunction[3],
								);
								opacity = 1 - easing(property.percent);
							} else if (time > min) {
								const property = {
									percent: (time - min) / (duration - min),
									easingFunction: Bezier.easeOutQuart,
								};
								const easing = BezierEasing(
									property.easingFunction[0],
									property.easingFunction[1],
									property.easingFunction[2],
									property.easingFunction[3],
								);
								opacity = easing(property.percent);
							} else opacity = 0;
							domRef.current.style.opacity = opacity;

							// set video stop
							const stopTime = duration - transitionDuration * 0.0011;
							if (!stopForwardRef.current) {
								if (time > stopTime) {
									playingTarget.pause();
									playingTarget.setStopState();
									EnterFrame.stop();
									onStopRef.current?.(playingTarget);
									setEventContext((S) => ({ ...S, videoStop: true }));
								}
							}
						}
					} else {
						const currentTime = playingTarget.getTime();
						const { time } = skipRef.current;
						const percent = (currentTime - time) / (transitionDuration * 0.001);
						if (percent >= 1) {
							// todo jump to end
							domRef.current.style.opacity = 1;
							skipRef.current.skip = false;
							playingTarget.skip();
						} else {
							// todo tween
							const easingFunction = Bezier.easeOutQuart;
							const easing = BezierEasing(
								easingFunction[0],
								easingFunction[1],
								easingFunction[2],
								easingFunction[3],
							);
							domRef.current.style.opacity = easing(percent);
						}
					}
				}
			}
		});
		return () => EnterFrame.destroy();
	}, []);

	useEffect(() => {
		if (status === VideoConfig.fadeInTiming) {
			EnterFrame.play();
		}
	}, [status]);

	useImperativeHandle(ref, () => ({
		opacity(value) {
			domRef.current.style.opacity = value;
		},
		play() {
			EnterFrame.play();
		},
	}));
	return <div ref={domRef} className='absolute top-0 left-0 h-full w-full bg-black opacity-0' />;
});

export default DarkScreen;
