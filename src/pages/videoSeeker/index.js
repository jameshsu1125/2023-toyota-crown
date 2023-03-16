import { useContext, useEffect, useMemo, useReducer, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Video from '../../components/video';
import useWheelHeavy from '../../hooks/useWheelHeavy';
import { Context, initialState, reducer } from '../../settings/config';
import { ACTION, DIRECTION_STATE, PAYLOAD_STATE, PAYLOAD_STATUS } from '../../settings/constant';
import '../../settings/global.less';

const Provider = ({ children }) => {
	const [context, setContext] = useContext(Context);
	const [active, launcher, direction] = useWheelHeavy(true);

	useEffect(() => {
		if (active) {
			const { index, enabled } = context[ACTION.page];

			if (!enabled) return;

			let i = index;

			if (direction === DIRECTION_STATE.next) i += 1;
			else i -= 1;

			setContext({
				type: ACTION.page,
				state: { ...context[ACTION.page], index: i, enabled: false },
			});
		}
	}, [active, direction]);

	return (
		<div
			className='absolute h-full w-full min-w-[447px]'
			role='none'
			onWheel={(e) => {
				launcher(e.deltaY);
			}}
		>
			{children}
		</div>
	);
};

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	const ref = useRef();
	const inputRef = useRef();

	useEffect(() => {
		setState({
			type: ACTION.payLoad,
			state: { ...PAYLOAD_STATE, status: PAYLOAD_STATUS.userDidActive },
		});

		const onKeyDown = (e) => {
			const { keyCode } = e;
			switch (keyCode) {
				case 37: // <-
					ref.current.next();
					break;
				case 39: // ->
					ref.current.prev();
					break;

				case 32: // space
					ref.current.playPause();
					break;
				default:
			}

			console.log(ref.current.getTime());
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	return (
		<Context.Provider {...{ value }}>
			<Provider>
				<div className='h-full w-full'>
					<Video ref={ref} />
					<div className='absolute flex flex-col'>
						<div className='form-control'>
							<div className='input-group'>
								<input
									ref={inputRef}
									type='text'
									placeholder='Seeking to...'
									className='input-bordered input'
								/>
								<button
									className='btn-square btn'
									type='button'
									onClick={() => {
										const { value: v } = inputRef.current;
										ref.current.seek(Number(v));
									}}
								>
									<svg
										className='h-6 w-6'
										fill='none'
										stroke='currentColor'
										strokeWidth='1.5'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</Provider>
		</Context.Provider>
	);
};
createRoot(document.getElementById('app')).render(<App />);
