import { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import url from '../settings/video/0.mp4';
import '../settings/global.less';

const App = () => {
	const ref = useRef();
	return (
		<video ref={ref} playsInline muted autoPlay controls>
			<track kind='captions' />
			<source src={url} type='video/mp4' />
		</video>
	);
};

createRoot(document.getElementById('app')).render(<App />);
