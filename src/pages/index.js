import { lazy, memo, Suspense, useContext, useEffect, useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context, initialState, reducer } from '../settings/config';
import { ACTION, PAGE } from '../settings/constant';
import '../settings/global.less';

const Pages = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];

	const Page = useMemo(() => {
		const [target] = Object.values(PAGE).filter((data) => data === page);
		const Element = lazy(() => import(`.${target}/`));
		if (target) {
			return (
				<Suspense fallback='loading'>
					<Element />
				</Suspense>
			);
		}
		return '';
	}, [page]);

	useEffect(() => {
		console.log(page);
	}, [page]);
	return (
		<>
			<Routes>
				<Route path='/' element={<div />} />
			</Routes>
			{Page}
		</>
	);
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	return (
		<div className='App'>
			<Context.Provider {...{ value }}>
				<BrowserRouter>
					<Pages />
				</BrowserRouter>
			</Context.Provider>
		</div>
	);
};

createRoot(document.getElementById('app')).render(<App />);
