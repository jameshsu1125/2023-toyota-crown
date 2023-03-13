import { createContext } from 'react';
import { CaptionsPaths } from './captionsPath';
import { ACTION, PAGE_STATE, PAYLOAD_STATE } from './constant';

export const Context = createContext();

export const initialState = {
	[ACTION.payLoad]: PAYLOAD_STATE,
	[ACTION.page]: PAGE_STATE,
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

export const AuthorInformation = [
	{
		index: 0,
		name: '宍戶 惠子',
		positionName: 'Color Design',
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
		index: 1,
		name: '宮崎 滿則',
		positionName: '外觀設計師',
		breadcrumbs: '外型之最',
		captions: CaptionsPaths[1],
		vo: [
			'並非是SUV也不是房車，',
			'而是把兩者的優點在更高境界上進行融合，',
			'我想這應該是這次最大的賣點。',
		],
	},
	{
		index: 2,
		name: '奧津 玄',
		positionName: '車體開發擔當',
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
		index: 3,
		name: '井上 克哉',
		positionName: 'Platform開發擔當',
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
		index: 4,
		name: '田中 俊輔',
		positionName: '內裝設計師',
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
		index: 5,
		name: '宍戶 惠子',
		positionName: 'Color Design',
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
		index: 6,
		name: '田中 俊輔',
		positionName: '內裝設計師',
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
		index: 7,
		name: '岡松 秀悟',
		positionName: '車輛性能開發擔當',
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
