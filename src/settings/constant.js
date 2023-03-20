export const ACTION = {
	payLoad: '預載內容',
	page: '設計師頁',
};

export const PAGE_CONTEXT_NAME = {
	intro: 0,
	content_0: 1,
	content_1: 2,
	content_2: 3,
	content_3: 4,
	content_4: 5,
	content_5: 6,
	content_6: 7,
	content_7: 8,
	detailVideo: 9,
};

export const DIRECTION_STATE = { unset: 0, next: 1, prev: 2 };

export const PAGE_STATE = {
	index: PAGE_CONTEXT_NAME.intro,
	direction: DIRECTION_STATE.unset,
	stopForward: false,
	enabled: false,
	onend: false,
	voIndex: false,
};

export const PAYLOAD_STATUS = {
	preset: 0, // initial value
	onReady: 1, // payLoader component loaded
	onPayLoaderFadeIn: 2, // payLoader Logo did fade in
	onLoaded: 3, // main content loaded
	userDidActive: 4, // user 開滑
	logoDidFadeIn: 5,
	introVideoDidPlayed: 6,
};

export const PAYLOAD_STATE = {
	status:
		PAYLOAD_STATUS[window.location.hash.split('#').join('') || 'preset'] || PAYLOAD_STATUS.preset,
	total: 0,
	loaded: 0,
	video: 0,
	audio: 0,
};

export const TRANSITION = {
	unset: 0,
	fadeIn: 1,
	fadeOut: 2,
	fadeInEnd: 3,
	fadeOutEnd: 4,
	loop: 5,
};
