import { useEffect, useState } from "react";

function getSessionStorageValue(key: string, defaultValue: any) {
	if (typeof window !== "undefined") {
		const saved = sessionStorage.getItem(key);
		if (!saved) return defaultValue;
		const initial = JSON.parse(saved);
		return initial || defaultValue;
	} else {
		return defaultValue;
	}
}

export default function useSessionStorage(key: string, defaultValue: any) {
	const [value, setValue] = useState(() => {
		return getSessionStorageValue(key, defaultValue);
	});

	useEffect(() => {
		if (typeof window !== "undefined")
			sessionStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
