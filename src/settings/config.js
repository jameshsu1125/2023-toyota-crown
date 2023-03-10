import { createContext } from 'react';
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
	},
	{
		index: 1,
		name: '宮崎 滿則',
		positionName: '外觀設計師',
	},
	{
		index: 2,
		name: '奧津 玄',
		positionName: '車體開發擔當',
	},
	{
		index: 3,
		name: '井上 克哉',
		positionName: 'Platform開發擔當',
	},
	{
		index: 4,
		name: '田中 俊輔',
		positionName: '內裝設計師',
	},
	{
		index: 5,
		name: '宍戶 惠子',
		positionName: 'Color Design',
	},
	{
		index: 6,
		name: '田中 俊輔',
		positionName: '內裝設計師',
	},
	{
		index: 7,
		name: '岡松 秀悟',
		positionName: '車輛性能開發擔當',
	},
];
