type DeepReadonly<T extends Record<string, unknown>> = {
	readonly [K in keyof T]: T[K] extends Record<string, any>
		? T[K] extends (...args: Array<unknown>) => unknown
			? T[K]
			: DeepReadonly<T[K]>
		: T[K];
};

type DeepPartial<T extends Record<string, unknown>> = {
	[K in keyof T]?: T[K] extends Record<string, any>
		? T[K] extends (...args: Array<unknown>) => unknown
			? T[K]
			: DeepPartial<T[K]>
		: T[K];
};

type DeepRequired<T extends Record<string, unknown>> = {
	[K in keyof T]-?: T[K] extends Record<string, any>
		? T[K] extends (...args: Array<unknown>) => unknown
			? T[K]
			: DeepRequired<T[K]>
		: T[K];
};

type DeepNonNullable<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K] extends Record<string, any>
		? T[K] extends (...args: Array<unknown>) => unknown
			? T[K]
			: DeepNonNullable<T[K]>
		: NonNullable<T[K]>;
};

type DeepNullable<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K] extends Record<string, any>
		? T[K] extends (...args: Array<unknown>) => unknown
			? T[K]
			: DeepNullable<T[K]>
		: T[K] | null;
};
