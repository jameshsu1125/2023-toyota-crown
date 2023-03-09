import { createContext } from 'react';

export const PayLoaderContext = createContext();

export const PayLoaderSteps = {
	unset: 0,
	loaded: 1, // payLoader component loaded
	logoDidFadeIn: 2, // logo 動態跑完
	contextLoaded: 3, // 內容都讀取完
	logoDidStay: 4, // logo停留結束
	videoDidPlayed: 5, // 車的影片播放完成
};

export const initialPayLoaderState = {
	steps: PayLoaderSteps.unset,
};

export const PayLoaderLogoTypeStayTime = 4000; // logo 停留時間
