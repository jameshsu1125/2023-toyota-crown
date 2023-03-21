import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../settings/config';
import { ACTION, PAGE_CONTEXT_NAME, PAYLOAD_STATUS } from '../../settings/constant';
import './index.less';

const Text = ({ status, index, onend }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 30 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro) {
			if (onend) setStyle({ opacity: 1, y: 0 }, { duration: 1000, delay: 200 });
		} else setStyle({ opacity: 0, y: 30 }, { duration: 1000, delay: 200 });
	}, [index, onend]);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
			setStyle({ opacity: 1, y: 0 }, { duration: 1000, delay: 200 });
		}
	}, [status]);

	return (
		<div style={style} className='text'>
			邀您下滑鑑賞
		</div>
	);
};

const Mouse = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const { index, onend } = page;

	const payLoad = context[ACTION.payLoad];
	const { status } = payLoad;
	const [style, setStyle] = useTween({ opacity: 0, y: 50 });

	useEffect(() => {
		if (index === PAGE_CONTEXT_NAME.intro) {
			if (onend) setStyle({ opacity: 1, y: 0 });
		} else setStyle({ opacity: 0, y: 50 });
	}, [index, onend]);

	useEffect(() => {
		if (status === PAYLOAD_STATUS.introVideoDidPlayed) {
			setStyle({ opacity: 1, y: 0 }, { delay: 400 });
		}
	}, [status]);

	return (
		<div className='pointer-events-none absolute left-0 bottom-0 flex h-[200px] w-full justify-center'>
			<div className='Mouse'>
				<div style={style} className='gradient'>
					{[...new Array(2).keys()].map((e) => (
						<div className='shadow' key={e} />
					))}
					<div className='icon' />
				</div>
				<Text status={status} index={index} onend={onend} />
			</div>
		</div>
	);
});
export default Mouse;
