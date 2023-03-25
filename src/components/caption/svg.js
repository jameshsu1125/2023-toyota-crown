import { memo } from 'react';
import { CaptionConfig } from '../../settings/config';
import './index.less';

const SVG = memo(({ children }) => (
	<svg
		className='absolute top-0'
		xmlns='http://www.w3.org/2000/svg'
		width='600'
		height='200'
		viewBox='0 0 600 200'
		fill={CaptionConfig.color}
	>
		{children}
	</svg>
));
export default SVG;
