import { memo } from 'react';
import './index.less';

const Player = memo(({ url }) => (
	<div className='pointer-events-auto h-full w-full bg-transparent'>
		<iframe
			src={`https://www.youtube.com/embed/${url}`}
			title='YouTube video player'
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			allowFullScreen
			style={{ width: '101%', height: '101%' }}
		/>
	</div>
));
export default Player;
