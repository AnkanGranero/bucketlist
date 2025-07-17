import { LSkeys } from "../models/types"


export const LS = {


    get(key: LSkeys): string | null {
        return localStorage.getItem(key);
    },

    add(key: LSkeys, value: string): void {
        localStorage.setItem(key, value)
    },
    remove(key: LSkeys): void {
        localStorage.removeItem(key);
    },
    getParsedFromLS<T>(key: LSkeys, fallback: T): T {
        const raw = LS.get(key);
        if (!raw) return fallback;
        try {
            return JSON.parse(raw) as T;
        } catch (error) {
            console.warn(`could not parse key ${key}`, error);
            return fallback;
        }
    },
}


