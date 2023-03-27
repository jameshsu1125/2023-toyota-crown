import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useId, useMemo, useRef } from 'react';
import { AudioConfig, Context } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './index.less';

const Wave = memo(({ belong }) => {
	const id = useId();
	const ref = useRef();
	const [context, setContext] = useContext(Context);
	const audio = context[ACTION.audio];
	const audioRef = useRef();
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => setStyle({ opacity: 1 }), []);

	useEffect(() => {
		audioRef.current = audio;
	}, [audio]);

	useEffect(() => {
		if (audio.content.length) {
			Click.add(`#${id}`, () => {
				const { muted, content } = audioRef.current;
				if (!muted) {
					ref.current.classList.add('Wave-off');
					content.forEach((e, i) => {
						if (i === content.length - 1) e.fade(AudioConfig.defaultVolume, 0, 300);
						else e.fade(1, 0, 300);
					});
				} else {
					ref.current.classList.remove('Wave-off');
					content.forEach((e, i) => {
						if (i === content.length - 1) e.fade(0, AudioConfig.defaultVolume, 300);
						else e.fade(0, 1, 300);
					});
				}
				setContext({ type: ACTION.audio, state: { content, muted: !muted } });
			});
		}
	}, [audio]);

	const className = useMemo(() => {
		const classes = ['Wave'];
		if (belong === 'footer') classes.push('hidden md:block');
		else classes.push('block md:hidden');
		return classes.join(' ');
	}, [belong]);

	return <div style={style} ref={ref} id={id} className={className} />;
});
export default Wave;
