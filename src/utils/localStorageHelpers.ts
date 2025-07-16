import { dreams, username, themes } from "../store/globalVariables.js"
import { Dream, Theme } from "../models/types.js";

export function addUsernameToLocalStorage(username: string): void {
    localStorage.setItem("username", username);
}

export function addThemeToLocalStorage(theme: string): void {

    const currentThemes = getFromLS("themes");
    const highestId = Math.max(...currentThemes.map(theme => theme.id));
    const newId = highestId ? highestId + 1 : 1;
    const updatedThemes = [...currentThemes, { id: newId, name: theme }]
    localStorage.setItem("themes", JSON.stringify(updatedThemes));
}
type LSKey = "username" | "themes" | "dreams";
type LSValueMap = {
    username: string;
    dreams: Dream[];
    themes: Theme[];
}


export function removerFromLS<K extends LSKey>(key: K, target: LSValueMap[K]): LSValueMap[K] {

    const currentLS = getFromLS(key);
    
} 

export function getFromLS<K extends LSKey>(key: K): LSValueMap[K] {
    const raw = localStorage.getItem(key);


    switch (key) {
        case "username": return (raw ?? username.value) as LSValueMap[K];
        case "themes": return (raw ? JSON.parse(raw) : themes) as LSValueMap[K];
        case "dreams": return (raw ? JSON.parse(raw) : dreams) as LSValueMap[K];
        default:
            throw new Error(`Unknown localStorage key: ${key}`);
    }
}

export function addToLS<K extends LSKey>(value: LSValueMap[K], key: K): void {

    let currentValue = getFromLS(key);

    if (key === "username") {
        localStorage.setItem(key, value as string);
        return;
    }

    const updated = [...currentValue as Dream[] | Theme[], ...value];
    localStorage.setItem(key, JSON.stringify(updated));

}


export function addDreamsToLocalStorage(dreams: Dream[]): void {
    const dreamsAsString = JSON.stringify(dreams);
    localStorage.setItem("dreams", dreamsAsString);
}
