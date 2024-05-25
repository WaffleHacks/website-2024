export const getStorageValue = (key: string, defaultValue: any): any => {
	if (typeof window !== "undefined") {
		const saved = localStorage.getItem(key);
		if (!saved) return defaultValue;
		const initial = JSON.parse(saved);
		return initial || defaultValue;
	} else {
		return defaultValue;
	}
};

export const getSessionStorageValue = (key: string, defaultValue: any) => {
	if (typeof window !== "undefined") {
		const saved = sessionStorage.getItem(key);
		if (!saved) return defaultValue;
		const initial = JSON.parse(saved);
		return initial || defaultValue;
	} else {
		return defaultValue;
	}
};
