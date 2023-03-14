import { useEffect, useMemo, useReducer, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Video from '../../components/video';
import { Context, initialState, reducer } from '../../settings/config';
import '../../settings/global.less';

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	const ref = useRef();

	useEffect(() => {
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
		<div className='absolute h-full w-full min-w-[447px]'>
			<Context.Provider {...{ value }}>
				<div className='h-full w-full'>
					<Video ref={ref} />
					<div className='absolute flex flex-col'>
						<div className='form-control'>
							<div className='input-group'>
								<input type='text' placeholder='Seeking to...' className='input-bordered input' />
								<button className='btn-square btn' type='button'>
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
			</Context.Provider>
		</div>
	);
};
createRoot(document.getElementById('app')).render(<App />);
