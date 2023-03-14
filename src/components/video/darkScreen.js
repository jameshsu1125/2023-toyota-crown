import { forwardRef, useImperativeHandle, useRef } from 'react';

const DarkScreen = forwardRef((props, ref) => {
	const domRef = useRef();
	useImperativeHandle(ref, () => ({
		opacity(value) {
			domRef.current.style.opacity = value;
		},
	}));
	return <div ref={domRef} className='absolute top-0 left-0 h-full w-full bg-black opacity-0' />;
});

export default DarkScreen;
