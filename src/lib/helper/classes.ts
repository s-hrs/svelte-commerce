// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const classes = (...classes: any[]) => {
	return classes.filter(Boolean).join(' ').trim();
};
