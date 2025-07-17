import { dreams, themes, username } from "../store/globalVariables.js";
import { Dream, Theme } from "../models/types.js";

// --- TYPES ---

type LSArrays = {
    dreams: Dream[];
    themes: Theme[];
};

type LSPrimitives = {
    username: string;
};

type LSValueMap = LSArrays & LSPrimitives;

type LSKey = keyof LSValueMap;
type LSArrayKey = keyof LSArrays;
type LSPrimitiveKey = keyof LSPrimitives;

type NewLSItem<K extends LSArrayKey> =
  K extends "dreams" ? Omit<Dream, "id"> :
  K extends "themes" ? Omit<Theme, "id"> :
  never;


// --- VARIABLES ---

const lsArrayKeys = ["dreams", "themes"] as const;

const fallbackMap: LSValueMap = {
    username: username.value,
    themes,
    dreams
};



// --- GETTER ---

export function getFromLS<K extends LSKey>(key: K): LSValueMap[K] {
    const raw = localStorage.getItem(key);

    if (isArrayKey(key)) {
        return (raw ? JSON.parse(raw) : fallbackMap[key]) as LSValueMap[K];
    }
    return (raw ?? fallbackMap[key]) as LSValueMap[K];
}

// --- UTIL ---

function createNewId<T extends { id: number }>(array: T[]): number {
    return Math.max(0, ...array.map(item => item.id)) + 1;
}

function isArrayKey(key: LSKey): key is LSArrayKey {
    return lsArrayKeys.includes(key as LSArrayKey);
}

// --- SETTERS ---

export function addToLS<K extends LSKey>(
  key: K,
  value: K extends LSArrayKey ? NewLSItem<K> : LSPrimitives[K]
): void {
  if (isArrayKey(key)) {
    addItemToLSArray(key, value as NewLSItem<K>);
  } else {
    setPrimitiveLS(key, value as LSPrimitives[K]);
  }
}

export function setPrimitiveLS<K extends LSPrimitiveKey>(
    key: K,
    value: LSPrimitives[K]
): void {
    localStorage.setItem(key, value as string);
}

export function addItemToLSArray<K extends LSArrayKey>(
    key: K,
    data: Omit<LSArrays[K][number], "id">
): LSArrays[K] {
    const currentLSArray = getFromLS(key);
    const newItem = { ...data, id: createNewId(currentLSArray) } as LSArrays[K][number];
    const updatedLSArray = [...currentLSArray, newItem];
    localStorage.setItem(key, JSON.stringify(updatedLSArray));
    return updatedLSArray as LSArrays[K];
}

export function removeFromLSArray<K extends LSArrayKey>(
    key: K,
    id: number
): LSArrays[K] {
    const current = getFromLS(key);
    const updated = current.filter(item => item.id !== id) as LSArrays[K];
    localStorage.setItem(key, JSON.stringify(updated));
    return updated; //kanske inte behöver returnera något 
}

export function updateDreamFields(id: number, changes: Partial<Dream>) {
    const dreams = getFromLS("dreams");
    const updated = dreams.map(d => d.id === id ? { ...d, ...changes } : d);
    setArrayToLS("dreams", updated);
}

//behöver jag denna?
export function setArrayToLS<K extends LSArrayKey>(
    key: K,
    array: LSArrays[K]
): void {
    localStorage.setItem(key, JSON.stringify(array));
}