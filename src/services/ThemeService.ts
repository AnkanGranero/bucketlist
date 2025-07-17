import { Theme } from "../models/types";
import { themes } from "../store/globalVariables.js";
import { LS } from "../utils/localStorageHelpers.js";
import { createNewId } from "../utils/dataHelpers.js"


export function getThemes(): Theme[] {
    return LS.getParsedFromLS<Theme[]>("themes", themes);
}

export function addTheme(themeName: string): void {
    const currentThemes = getThemes();
    const newId = createNewId(currentThemes);
    const updatedTheme = { name: themeName, id: newId };

    currentThemes.push(updatedTheme);
    LS.add("themes", JSON.stringify((currentThemes)))
}



export function updateTheme(updatedTheme: Theme): void {
    const currentThemes = LS.getParsedFromLS<Theme[]>("themes", themes);
    const updatedThemes = currentThemes.map(theme => theme.id === updatedTheme.id ? updatedTheme : theme);

    LS.add("themes", JSON.stringify(updatedThemes))

}

export function deleteTheme(id: number): void {
    const currentThemes = LS.getParsedFromLS<Theme[]>("themes", themes);
    const updatedThemes = currentThemes.filter(theme => theme.id !== id);

    LS.setArrayOrRemove<Theme>("themes", updatedThemes);
} 