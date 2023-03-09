export const ACTION = {
	page: '頁面',
	transition: '動態',
	payLoad: '預載內容',
};

export const PAGE_CONTEXT_NAME = {
	landing: '/landing',
	ending: '/ending',
};

export const PAGE_STATE = {
	context: PAGE_CONTEXT_NAME.landing,
	enabled: true,
};

export const PAYLOAD_STATUS = {
	preset: 0, // initial value
	onReady: 1, // payLoader component loaded
	onPayLoaderFadeIn: 2, // payLoader Logo did fade in
	onLoaded: 3, // main content loaded
};

export const PAYLOAD_STATE = {
	status: PAYLOAD_STATUS.preset,
	total: 0,
	loaded: 0,
};

export const TRANSITION = {
	unset: 0,
	fadeIn: 1,
	fadeOut: 2,
	fadeInEnd: 3,
	fadeOutEnd: 4,
	loop: 5,
};

export default {};
