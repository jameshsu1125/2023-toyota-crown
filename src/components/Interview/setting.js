export const InterviewState = {
	unset: 0,
	videoDidFadeOut: 1,
	buttonDidFadeIn: 2,
	buttonDidClick: 3,
	carDidGoDown: 4,
	carouselDidFadeIn: 5,
	userDidGoAway: 6,
};

export const InterviewYoutube = {
	unset: false,
};

export const ButtonTransitionProperty = [
	{
		desktop: {
			dir: 'right',
			p1: { y: -134, x: 251, w: 150 },
			p2: { y: -83, x: 174, w: 20 },
		},
		mobile: {
			dir: 'right',
			p1: { y: -244, x: 71, w: 150 },
			p2: { y: -181, x: -29, w: 60 },
		},
	},
	{
		desktop: {
			dir: 'left',
			p1: { y: -261, x: 138, w: 150 },
			p2: { y: -151, x: 73, w: 20 },
		},
		mobile: {
			dir: 'right',
			p1: { y: -345, x: -403, w: 150 },
			p2: { y: -220, x: -340, w: 60 },
		},
	},
	{
		desktop: {
			dir: 'right',
			p1: { y: -218, x: 75, w: 150 },
			p2: { y: -140, x: 35, w: 20 },
		},
		mobile: {
			dir: 'right',
			p1: { y: -358, x: -242, w: 150 },
			p2: { y: -238, x: -242, w: 60 },
		},
	},
	{
		desktop: {
			dir: 'left',
			p1: { y: -128, x: 361, w: 150 },
			p2: { y: -112, x: 179, w: 20 },
		},
		mobile: {
			dir: 'left',
			p1: { y: -288, x: 36, w: 200 },
			p2: { y: -201, x: -38, w: 122 },
		},
	},
	{
		desktop: {
			dir: 'left',
			p1: { y: 126, x: -40, w: 150 },
			p2: { y: 53, x: -16, w: 40 },
		},
		mobile: {
			dir: 'left',
			p1: { y: -314, x: -280, w: 80 },
			p2: { y: -220, x: -283, w: 20 },
		},
	},
];
