export const ACTION = {
	payLoad: '預載內容',
	page: '設計師頁',
};

export const PAGE_CONTEXT_NAME = {
	content_0: 0,
	content_1: 1,
	content_2: 2,
	content_3: 3,
	content_4: 4,
	content_5: 5,
	content_6: 6,
	content_7: 7,
	detailVideo: 8,
};

export const PAGE_STATE = {
	index: PAGE_CONTEXT_NAME.content_0,
	enabled: true,
};

export const PAYLOAD_STATUS = {
	preset: 0, // initial value
	onReady: 1, // payLoader component loaded
	onPayLoaderFadeIn: 2, // payLoader Logo did fade in
	onLoaded: 3, // main content loaded
	userDidActive: 4, // user 開滑
	onContextDidFadeIn: 5,
};

export const PAYLOAD_STATE = {
	status:
		PAYLOAD_STATUS[window.location.hash.split('#').join('') || 'preset'] || PAYLOAD_STATUS.preset,
	total: 0,
	loaded: 0,
	video: 0,
};

export const TRANSITION = {
	unset: 0,
	fadeIn: 1,
	fadeOut: 2,
	fadeInEnd: 3,
	fadeOutEnd: 4,
	loop: 5,
};

export const DIRECTION_STATE = { unset: 0, next: 1, prev: 2 };
