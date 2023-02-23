import { memo, useMemo, useRef, useState } from 'react';
import { initialState, TestContext, videoProperty } from './config';
import Video from './video';

const Test = memo(() => {
	const videoRef = useRef();

	const [context, setContext] = useState(initialState);
	const value = useMemo(() => [context, setContext], [context]);

	const onChange = (e) => {
		videoRef.current.unmount();
		const video = Object.entries(videoProperty)
			.filter((item) => item[1].url === e.target.value)
			.map((item) => item[1])[0];

		setContext((S) => ({ ...S, video }));
	};

	return (
		<TestContext.Provider value={value}>
			<div className='flex h-screen w-full items-center justify-center overflow-hidden'>
				<Video ref={videoRef} />
				<div className='absolute top-0 right-0'>
					<select
						className='select-bordered select w-full max-w-xs'
						defaultValue={initialState.url}
						onChange={onChange}
					>
						<option disabled>select video quality?</option>
						{Object.entries(videoProperty).map((e) => (
							<option key={JSON.stringify(e)} value={e[1].url}>
								{e[1].size}
								{`(${e[1].type})`}
							</option>
						))}
					</select>
				</div>
			</div>
		</TestContext.Provider>
	);
});
export default Test;
