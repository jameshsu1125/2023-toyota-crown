import { memo } from 'react';
import './index.less';

const Player = memo(({ url }) => (
	<iframe
		src={`https://www.youtube.com/embed/${url}?controls=0`}
		title='YouTube video player'
		frameBorder='0'
		allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
		allowFullScreen
		style={{ width: '100%', height: '100%' }}
	/>
));
export default Player;
