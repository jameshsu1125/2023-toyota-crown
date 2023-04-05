/* eslint-disable no-unreachable */
import { memo } from 'react';

const PayLoaderContainer = memo(({ children }) => (
	<div className='absolute top-0 h-full w-full'>{children}</div>
));
export default PayLoaderContainer;
