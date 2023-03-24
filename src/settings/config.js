import { createContext } from 'react';
import { CaptionsPaths } from './captionsPath';
import { ACTION, PAGE_CONTEXT_NAME, PAGE_STATE, PAYLOAD_STATE, PAYLOAD_STATUS } from './constant';
import desktopVideo0 from './video/desktop/0.mp4';
import desktopVideo1 from './video/desktop/1.mp4';
import desktopVideo2 from './video/desktop/2.mp4';
import desktopVideo3 from './video/desktop/3.mp4';
import desktopVideo4 from './video/desktop/4.mp4';
import desktopVideo5 from './video/desktop/5.mp4';
import desktopVideo6 from './video/desktop/6.mp4';
import desktopVideo7 from './video/desktop/7.mp4';
import desktopVideo8 from './video/desktop/8.mp4';
import desktopVideo9 from './video/desktop/9.mp4';
import mobileVideo0 from './video/mobile/0.mp4';
import mobileVideo1 from './video/mobile/1.mp4';
import mobileVideo2 from './video/mobile/2.mp4';
import mobileVideo3 from './video/mobile/3.mp4';
import mobileVideo4 from './video/mobile/4.mp4';
import mobileVideo5 from './video/mobile/5.mp4';
import mobileVideo6 from './video/mobile/6.mp4';
import mobileVideo7 from './video/mobile/7.mp4';
import mobileVideo8 from './video/mobile/8.mp4';
import mobileVideo9 from './video/mobile/9.mp4';
import bgm from './audio/bgm.mp3';
import audio1 from './audio/1.mp3';
import audio2 from './audio/2.mp3';
import audio3 from './audio/3.mp3';
import audio4 from './audio/4.mp3';
import audio5 from './audio/5.mp3';
import audio6 from './audio/6.mp3';
import audio7 from './audio/7.mp3';
import audio8 from './audio/8.mp3';

export const BreakPoint = 768;
export const BreakPointHeight = 900;
export const BreakPointHeightMobile = 1138;
export const BreakPointHeightDesktop = 1200;
export const AutoPlay = false;

export const Context = createContext();
export const EventContext = createContext();

export const initialState = {
	[ACTION.payLoad]: PAYLOAD_STATE,
	[ACTION.page]: PAGE_STATE,
};

export const initialEventState = {
	videoStop: false,
};

export const reducer = (state, action) => {
	if (action.state instanceof Object) {
		let stateStorage = {};
		Object.entries(action.state)
			.filter((actionState) => {
				const value = Object.values(ACTION).filter((actionValue) => actionValue === actionState[0]);
				if (value.length > 0 || action.type) return true;
				return false;
			})
			.map((actionState) => {
				const value = Object.values(ACTION).filter((actionValue) => actionValue === actionState[0]);
				if (value.length > 0) return actionState;
				return [action.type, Object.fromEntries([actionState])];
			})
			.forEach((actionState) => {
				const [key, value] = actionState;
				const prevValue = stateStorage[key];
				if (prevValue) stateStorage = { [key]: { ...prevValue, ...value } };
				else stateStorage = { [key]: value };
			});
		return { ...state, ...stateStorage };
	}
	if (action.type) return { ...state, [action.type]: action.state };
	return state;
};

export const Authors = [
	{
		name: '宍戶 惠子',
		positionName: 'Color Design',
		className: 'author-0',
	},
	{
		name: '宮崎 滿則',
		positionName: '外觀設計師',
		className: 'author-1',
	},
	{
		name: '井上 克哉',
		positionName: 'Platform開發擔當',
		className: 'author-2',
	},
	{
		name: '田中 俊輔',
		positionName: '內裝設計師',
		className: 'author-3',
	},
	{
		name: '奧津 玄',
		positionName: '車體開發擔當',
		className: 'author-4',
	},
	{
		name: '岡松 秀悟',
		positionName: '車輛性能開發擔當',
		className: 'author-5',
	},
];

export const AuthorInformation = [
	{
		...Authors[0],
		index: PAGE_CONTEXT_NAME.content_0,
		breadcrumbs: '外型之最',
		captions: CaptionsPaths[0],
		vo: [
			'大膽採用黑色雙色，',
			'這並不是標新立異的設計，',
			'而是與造型整體化，散發出特殊感 ，',
			'希望由衷地讓顧客感受到創新的CROWN。',
		],
	},
	{
		...Authors[1],
		index: PAGE_CONTEXT_NAME.content_1,
		breadcrumbs: '外型之最',
		captions: CaptionsPaths[1],
		vo: [
			'並非是SUV也不是房車，',
			'而是把兩者的優點在更高境界上進行融合，',
			'我想這應該是這次最大的賣點。',
		],
	},
	{
		...Authors[4],
		index: PAGE_CONTEXT_NAME.content_2,
		breadcrumbs: '細節之最',
		captions: CaptionsPaths[2],
		vo: [
			'希望透過提升整體靜肅性，',
			'在功能上、生產上無法避免的縫隙，',
			'努力做到1mm、0.1mm單位，',
			'達成降低風切聲的目標。',
		],
	},
	{
		...Authors[2],
		index: PAGE_CONTEXT_NAME.content_3,
		breadcrumbs: '細節之最',
		captions: CaptionsPaths[3],
		vo: [
			'不只是臀點，',
			'包括頭頂上方橫切面等地方都很講究，',
			'另一方面車側高度讓腳可以方面的從外向內，',
			'從內向外出入，以最適合高度呈現。',
		],
	},
	{
		...Authors[3],
		index: PAGE_CONTEXT_NAME.content_4,
		breadcrumbs: '駕駛之最',
		captions: CaptionsPaths[4],
		vo: [
			'自己眼前儀錶到導航，',
			'一列排開，氣派的顯示功能坐鎮前方，',
			'觸摸自己眼前的方向盤，',
			'視線從空調功能的儀表區域移動到中控台。 ',
		],
	},
	{
		...Authors[0],
		index: PAGE_CONTEXT_NAME.content_5,
		breadcrumbs: '內裝之最',
		captions: CaptionsPaths[5],
		vo: [
			'我們一直堅持要符合嶄新的CROWN的',
			'「WARM STEEL」溫潤金屬色，',
			'不斷在失敗中反覆摸索，',
			'最終做出了最好的成品。',
		],
	},
	{
		...Authors[3],
		index: PAGE_CONTEXT_NAME.content_6,
		breadcrumbs: '內裝之最',
		captions: CaptionsPaths[6],
		vo: [
			'在這裡，',
			'點綴著長長的金色飾板，',
			'副駕駛座的乘客對於自己眼前的空間，',
			'就可以有更多一點的延長感受。',
		],
	},
	{
		...Authors[5],
		index: PAGE_CONTEXT_NAME.content_7,
		breadcrumbs: '動力之最',
		captions: CaptionsPaths[7],
		vo: [
			'我們秉持著透過全新奔馳體驗',
			'「讓顧客笑逐顏開」的想法 進行開發，',
			'在駕駛人感覺舒適的範圍內，',
			'期待提供超乎其想像的加速感。',
		],
	},
];

export const CaptionConfig = { color: '#7e4d3d', eachCharacterDelay: 50 };

const videoUrl = [
	{ desktop: desktopVideo0, mobile: mobileVideo0 },
	{ desktop: desktopVideo1, mobile: mobileVideo1 },
	{ desktop: desktopVideo2, mobile: mobileVideo2 },
	{ desktop: desktopVideo3, mobile: mobileVideo3 },
	{ desktop: desktopVideo4, mobile: mobileVideo4 },
	{ desktop: desktopVideo5, mobile: mobileVideo5 },
	{ desktop: desktopVideo6, mobile: mobileVideo6 },
	{ desktop: desktopVideo7, mobile: mobileVideo7 },
	{ desktop: desktopVideo8, mobile: mobileVideo8 },
	{ desktop: desktopVideo9, mobile: mobileVideo9 },
];

export const VideoConfig = {
	fadeInDuration: 4000, // 從loading到intro的淡入時間
	fadeInTiming: PAYLOAD_STATUS.logoDidFadeIn,
	targets: [
		{
			url: videoUrl[0][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.intro,
		},
		{
			url: videoUrl[1][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.content_0,
		},
		{
			url: videoUrl[2][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.content_1,
		},
		{
			url: videoUrl[3][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.content_2,
		},
		{
			url: videoUrl[4][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.content_3,
		},
		{
			url: videoUrl[5][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.content_4,
		},
		{
			url: videoUrl[6][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.content_5,
		},
		{
			url: videoUrl[7][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.content_6,
		},
		{
			url: videoUrl[8][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.content_7,
		},
		{
			url: videoUrl[9][window.innerWidth >= BreakPoint ? 'desktop' : 'mobile'],
			name: PAGE_CONTEXT_NAME.detailVideo,
		},
	],
	transitionDuration: 1000, // 每隻影片的淡入淡出
};

export const AudioConfig = {
	bgm,
	targets: [
		{
			url: audio1,
			name: PAGE_CONTEXT_NAME.content_0,
			pos: [
				{ time: 0.13, index: 0 },
				{ time: 3.56, index: 1 },
				{ time: 9.36, index: 2 },
				{ time: 12.97, index: 3 },
			],
		},
		{
			url: audio2,
			name: PAGE_CONTEXT_NAME.content_1,
			pos: [
				{ time: 0.06, index: 0 },
				{ time: 3.3, index: 1 },
				{ time: 9.73, index: 2 },
			],
		},
		{
			url: audio3,
			name: PAGE_CONTEXT_NAME.content_2,
			pos: [
				{ time: 0.3, index: 0 },
				{ time: 2.96, index: 1 },
				{ time: 6.9, index: 2 },
				{ time: 11.66, index: 3 },
			],
		},
		{
			url: audio4,
			name: PAGE_CONTEXT_NAME.content_3,
			pos: [
				{ time: 0.1, index: 0 },
				{ time: 1.63, index: 1 },
				{ time: 5.86, index: 2 },
				{ time: 11.4, index: 3 },
			],
		},
		{
			url: audio5,
			name: PAGE_CONTEXT_NAME.content_4,
			pos: [
				{ time: 0.1, index: 0 },
				{ time: 1.77, index: 1 },
				{ time: 7.46, index: 2 },
				{ time: 12.33, index: 3 },
			],
		},
		{
			url: audio6,
			name: PAGE_CONTEXT_NAME.content_5,
			pos: [
				{ time: 0.16, index: 0 },
				{ time: 2.83, index: 1 },
				{ time: 5.46, index: 2 },
				{ time: 9.33, index: 3 },
			],
		},
		{
			url: audio7,
			name: PAGE_CONTEXT_NAME.content_6,
			pos: [
				{ time: 0.16, index: 0 },
				{ time: 0.86, index: 1 },
				{ time: 5.63, index: 2 },
				{ time: 10.6, index: 3 },
			],
		},
		{
			url: audio8,
			name: PAGE_CONTEXT_NAME.content_7,
			pos: [
				{ time: 0.1, index: 0 },
				{ time: 1.93, index: 1 },
				{ time: 6.13, index: 2 },
				{ time: 9.7, index: 3 },
			],
		},
	],
	delay: 500,
};

export const InterviewConfig = [
	{
		breadcrumbs: '外型之最',
		name: '宍戶 惠子',
		youtube: 'g3M0uN9Lshk',
		className: 'interviewButton-0',
	},
	{
		breadcrumbs: '細節之最',
		name: '田中 俊輔',
		youtube: 'g3M0uN9Lshk',
		className: 'interviewButton-1',
	},
	{
		breadcrumbs: '駕駛之最',
		name: '田中 俊輔',
		youtube: 'g3M0uN9Lshk',
		className: 'interviewButton-2',
	},
	{
		breadcrumbs: '內裝之最',
		name: '岡松 秀悟',
		youtube: 'g3M0uN9Lshk',
		className: 'interviewButton-3',
	},
	{
		breadcrumbs: '動力之最',
		name: '岡松 秀悟',
		youtube: 'g3M0uN9Lshk',
		className: 'interviewButton-4',
	},
];
