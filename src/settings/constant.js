export const ACTION = {
	payLoad: '預載內容',
	page: '設計師頁',
};

export const PAGE_CONTEXT_NAME = {
	author0: 0,
	author1: 1,
	author2: 2,
	author3: 3,
	author4: 4,
	author5: 5,
	author6: 6,
	author7: 7,
	detailPage: 8,
};

export const PAGE_STATE = {
	author: PAGE_CONTEXT_NAME.author0,
	enabled: false,
};

export const PAYLOAD_STATUS = {
	preset: 0, // initial value
	onReady: 1, // payLoader component loaded
	onPayLoaderFadeIn: 2, // payLoader Logo did fade in
	onLoaded: 3, // main content loaded
	onContextDidFadeIn: 4,
};

export const PAYLOAD_STATE = {
	status:
		PAYLOAD_STATUS[window.location.hash.split('#').join('') || 'preset'] || PAYLOAD_STATUS.preset,
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
