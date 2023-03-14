import { createContext } from 'react';

export const PayLoaderContext = createContext();

export const PayLoaderSteps = {
	unset: 0,
	loaded: 1, // payLoader component loaded
	logoDidFadeIn: 2, // logo 動態跑完
	authorDidFadeIn: 3, // 作家資訊動態跑完
	contextLoaded: 4, // 內容都讀取完
	iconDidFadeIn: 5, // mouse icon進入
	userDidActive: 6, // user 滑動
	logoDidStay: 7, // logo停留結束
	videoDidPlayed: 8, // 車的影片播放完成
};

export const initialPayLoaderState = {
	steps: PayLoaderSteps.unset,
};

export const PayLoaderLogoTypeStayTime = 4000; // logo 停留時間
