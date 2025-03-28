/*_____________STRING_____________*/
export const Slugify = (text: string) => {
	return text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
};

/*_____________Tailwind_____________*/
const sizeMap: Record<Sizes, number> = {
	'0': 0,
	px: 1,
	'0.5': 2,
	'1': 4,
	'1.5': 6,
	'2': 8,
	'2.5': 10,
	'3': 12,
	'3.5': 14,
	'4': 16,
	'5': 20,
	'6': 24,
	'7': 28,
	'8': 32,
	'9': 36,
	'10': 40,
	'11': 44,
	'12': 48,
	'14': 56,
	'16': 64,
	'20': 80,
	'24': 96,
	'28': 112,
	'32': 128,
	'36': 144,
	'40': 160,
	'44': 176,
	'48': 192,
	'52': 208,
	'56': 224,
	'60': 240,
	'64': 256,
	'72': 288,
	'80': 320,
	'96': 384,
};

export function TwDimensionConversion(size: Sizes): number {
	return sizeMap[size];
}

export const ScrollIntoCenterView = (href: string) => {
	const element = document.querySelector(href);
	if (element) {
		const elementRect = element.getBoundingClientRect();
		const absoluteElementTop = elementRect.top + window.scrollY;
		const middle =
			absoluteElementTop + Math.floor(elementRect.height / 2) - Math.floor(window.innerHeight / 2);
		window.scrollTo({
			top: middle,
			behavior: 'smooth',
		});
	}
};
