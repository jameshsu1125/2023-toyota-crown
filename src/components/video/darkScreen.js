import BezierEasing from 'bezier-easing';
import EnterFrame from 'lesca-enterframe';
import { Bezier } from 'lesca-use-tween';
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { Context, VideoConfig } from '../../settings/config';
import { ACTION, PAYLOAD_STATUS } from '../../settings/constant';

const DarkScreen = forwardRef(({ videoRef, onStop }, ref) => {
	const [context] = useContext(Context);
	const { status } = context[ACTION.payLoad];
	const page = context[ACTION.page];
	const { stopForward } = page;
	const domRef = useRef();
	const stopForwardRef = useRef(stopForward);
	const onStopRef = useRef(onStop);

	useEffect(() => {
		stopForwardRef.current = stopForward;
	}, [stopForward]);

	useEffect(() => {
		onStopRef.current = onStop;
	}, [onStop]);

	useEffect(() => {
		EnterFrame.add(() => {
			if (videoRef.current.length === VideoConfig.targets.length) {
				const [playingTarget] = videoRef.current.filter((e) => e.isPlaying());
				if (playingTarget) {
					const duration = playingTarget.getTotal();
					if (duration) {
						const { transitionDuration } = VideoConfig;
						const time = playingTarget.getTime();
						const min = duration - transitionDuration * 0.001;
						const max = transitionDuration * 0.001;

						// set video opacity
						let opacity;
						if (time < transitionDuration * 0.001) {
							const property = {
								percent: time / max,
								easingFunction: Bezier.easeOutQuart,
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
								EnterFrame.stop();
								onStopRef.current(playingTarget);
							}
						}
					}
				}
			}
		});
		return () => EnterFrame.destroy();
	}, []);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.logoDidFadeIn) {
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
