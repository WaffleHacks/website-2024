import {
	createAPIClient,
	getSessionStorageValue,
	getStorageValue,
} from "@/lib";
import type { TeamMember } from "@/schemas";
import type { z } from "zod";
import { create } from "zustand";

type CookieConsentStore = {
	cookieConsent: boolean;
	isLoaded: boolean;
	setCookieConsent: (value: boolean) => void;
	setIsLoaded: (value: boolean) => void;
};

export const useCookieConsentStore = create<CookieConsentStore>((set) => ({
	cookieConsent: false,
	isLoaded: false,
	setCookieConsent: (value) => set({ cookieConsent: value }),
	setIsLoaded: (value) => set({ isLoaded: value }),
}));

type LocalStorageStore = {
	value: any;
	setValue: (value: any, defaultValue: any, expiryInDays: number) => void;
};

export const useLocalStorage = (key: string, defaultValue: any) =>
	create<LocalStorageStore>((set) => ({
		value: getStorageValue(key, defaultValue),
		setValue: (newValue: any, expiryInDays = 365) => {
			set({ value: newValue });
			if (typeof window !== "undefined") {
				localStorage.setItem(key, JSON.stringify(newValue));
				const date = new Date();
				date.setTime(date.getTime() + expiryInDays * 24 * 60 * 60 * 1000);
				const expires = "expires=" + date.toUTCString();
				document.cookie =
					key + "=" + JSON.stringify(newValue) + ";" + expires + ";path=/";
			}
		},
	}));

type SessionStorageStore = {
	value: any;
	setValue: (value: any) => void;
};

export const useSessionStorage = (key: string, defaultValue: any) =>
	create<SessionStorageStore>((set, get) => ({
		value: getSessionStorageValue(key, defaultValue),
		setValue: (value: any) => {
			set({ value });
			if (typeof window !== "undefined") {
				sessionStorage.setItem;
			}
		},
	}));

export const useDuration = create<{
	duration: number;
	setDuration: (duration: number) => void;
}>((set, _get) => ({
	duration: 25,
	setDuration: (duration: number) => set({ duration }),
}));

export const useMustFinish = create<{
	mustFinish: boolean;
	setMustFinish: (mustFinish: boolean) => void;
}>((set, _get) => ({
	mustFinish: false,
	setMustFinish: (mustFinish: boolean) => set({ mustFinish }),
}));

export const useRerender = create<{
	rerender: boolean;
	setRerender: (rerender: boolean) => void;
}>((set, _get) => ({
	rerender: false,
	setRerender: (rerender: boolean) => set({ rerender }),
}));

export const useLoaded = create<{
	loaded: boolean;
	setLoaded: (loaded: boolean) => void;
}>((set, _get) => ({
	loaded: false,
	setLoaded: (loaded: boolean) => set({ loaded }),
}));

interface TeamStore {
	team: z.infer<typeof TeamMember>[];
	getTeamMember: (name: string) => Promise<TeamMember>;
	getAllTeamMembers: () => Promise<ReadonlyTeam>;
}

export const useTeam = create<TeamStore>((set) => ({
	team: [],
	teamMembers: [],
	getTeamMember: async (name: string) => {
		const apiClient = createAPIClient();
		const response = await apiClient.team.get(name);
		set((state) => ({ ...state, teamMembers: [response.member] }));
		return response.member;
	},
	getAllTeamMembers: async (): Promise<ReadonlyTeam> => {
		const apiClient = createAPIClient();
		const response = await apiClient.team.getAll();
		set((state) => ({ ...state, teamMembers: response.data }));
		return response.data;
	},
}));

export const useOverlay = create<{
	showOverlay: string | null;
	setShowOverlay: (showOverlay: string) => void;
}>((set, _get) => ({
	showOverlay: null,
	setShowOverlay: (showOverlay: string) => set({ showOverlay }),
}));

export const useTeamData = create<{
	teamData: Array<{ mem: string; member: any; color: string }>;
	setTeamData: (
		teamData: Array<{ mem: string; member: any; color: string }>,
	) => void;
}>((set) => ({
	teamData: [],
	setTeamData: (teamData) => set({ teamData }),
}));

export const useProcessingQueue = create<{
	processingQueue: boolean;
	setProcessingQueue: (processingQueue: boolean) => void;
}>((set) => ({
	processingQueue: false,
	setProcessingQueue: (processingQueue) => set({ processingQueue }),
}));

/*_________________Primitive________________*/
export const useBooleanStore = (initialState = false) => {
	return create<{
		state: boolean;
		setState: (state: boolean) => void;
	}>((set) => ({
		state: initialState,
		setState: (state) => set({ state }),
	}));
};

export const useStringStore = (initialState = "") => {
	return create<{
		state: string;
		setState: (state: string) => void;
	}>((set) => ({
		state: initialState,
		setState: (state) => set({ state }),
	}));
};

export const useNumberStore = (initialState = 0) => {
	return create<{
		state: number;
		setState: (state: number) => void;
	}>((set) => ({
		state: initialState,
		setState: (state) => set({ state }),
	}));
};

export const useArrayStore = <T = any>(initialState: T[] = []) => {
	return create<{
		state: T[];
		setState: (state: T[]) => void;
	}>((set) => ({
		state: initialState,
		setState: (state) => set({ state }),
	}));
};

export const useObjectStore = <T = any>(initialState: T = {} as T) => {
	return create<{
		state: T;
		setState: (state: T) => void;
	}>((set) => ({
		state: initialState,
		setState: (state) => set({ state }),
	}));
};

export const useMapStore = <K = any, V = any>(
	initialState: Map<K, V> = new Map(),
) => {
	return create<{
		state: Map<K, V>;
		setState: (state: Map<K, V>) => void;
	}>((set) => ({
		state: initialState,
		setState: (state) => set({ state }),
	}));
};

export const useSetStore = <T = any>(initialState: Set<T> = new Set()) => {
	return create<{
		state: Set<T>;
		setState: (state: Set<T>) => void;
	}>((set) => ({
		state: initialState,
		setState: (state) => set({ state }),
	}));
};
