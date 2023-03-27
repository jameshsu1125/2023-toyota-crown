import { createRoot } from 'react-dom/client';

const App = () => {
	return (
		<div className='app absolute flex h-full w-full min-w-[447px] items-center justify-center'>
			ads
		</div>
	);
};

createRoot(document.getElementById('preloader')).render(<App />);
