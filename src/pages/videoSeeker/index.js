import { useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import Video from '../../components/video';
import { Context, initialState, reducer } from '../../settings/config';
import '../../settings/global.less';

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);

	return (
		<Context.Provider {...{ value }}>
			<div className='h-full w-full'>
				<Video />
			</div>
		</Context.Provider>
	);
};
createRoot(document.getElementById('app')).render(<App />);
