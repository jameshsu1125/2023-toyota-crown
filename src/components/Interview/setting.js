import { VideoConfig } from '../../settings/config';

export const videoFusionDelay = 3500 + VideoConfig.transitionDuration;

export const InterviewState = {
	unset: 0,
	buttonDidFadeIn: 1,
	buttonDidClick: 2,
	carDidGoDown: 3,
	carouselDidFadeIn: 4,
};

export const InterviewYoutube = {
	unset: false,
};

export const ButtonTransitionProperty = [
	{
		dir: 'right',
		p1: { y: -134, x: 251, w: 150 },
		p2: { y: -83, x: 174, w: 20 },
	},
	{
		dir: 'left',
		p1: { y: -261, x: 138, w: 150 },
		p2: { y: -152, x: 73, w: 20 },
	},
	{
		dir: 'right',
		p1: { y: -218, x: 75, w: 150 },
		p2: { y: -140, x: 35, w: 20 },
	},
	{
		dir: 'left',
		p1: { y: -128, x: 361, w: 150 },
		p2: { y: -112, x: 179, w: 20 },
	},
	{
		dir: 'left',
		p1: { y: 126, x: -40, w: 150 },
		p2: { y: 50, x: -23, w: 40 },
	},
];
