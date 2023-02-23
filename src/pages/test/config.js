import { createContext } from 'react';
import FHD from './video/1080p.mp4';
import SSD from './video/360p.mp4';
import SD from './video/480p.mp4';
import HD from './video/720p.mp4';
import Original from './video/original.mp4';
import Webm1080p from './video/1080p.webm';
import Webm720p from './video/720p.webm';

export const TestContext = createContext();

export const videoProperty = {
	original: { url: Original, size: 'original', type: 'video/mp4', encoder: 'H.264' },
	fullHD: { url: FHD, size: 'full HD', type: 'video/mp4', encoder: 'ffmpeg-H.264' },
	HD: { url: HD, size: 'HD', type: 'video/mp4', encoder: 'ffmpeg-H.264' },
	SD: { url: SD, size: 'SD', type: 'video/mp4', encoder: 'ffmpeg-H.264' },
	SSD: { url: SSD, size: 'SSD', type: 'video/mp4', encoder: 'ffmpeg-H.264' },
	fullHD_Webm: { url: Webm1080p, size: 'full HD', type: 'video/webm', encoder: 'ffmpeg-H.264' },
	HD_Webm: { url: Webm720p, size: 'HD', type: 'video/webm', encoder: 'ffmpeg-H.264' },
};

export const initialState = {
	video: videoProperty.HD_Webm,
};
