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
    }

}

export function getParsedFromLS<T>(key:LSkeys, fallback: T):T {
    const raw = LS.get(key);
    if(!raw) return fallback;
    try {
        return JSON.parse(raw) as T;
    } catch(error) {
        console.warn(`could not parse key ${key}`, error);
        return fallback;
    }
}

export function createNewId<T extends { id: number }>(array: T[]): number {
    return Math.max(0, ...array.map(item => item.id)) + 1;
}

export function setArrayOrRemove<T>(key: LSkeys, array: T[]): void {
  if (array.length) {
    LS.add(key, JSON.stringify(array));
  } else {
    LS.remove(key);
  }
}