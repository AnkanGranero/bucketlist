import { Dream, newDream } from "../models/types";
import { dreams } from "../store/globalVariables.js";
import { LS, createNewId, getParsedFromLS, setArrayOrRemove } from "../utils/localStorageHelpers.js"

export function getDreams(): Dream[] {
    return getParsedFromLS<Dream[]>("dreams", dreams);
}

export function addDream(newDream: newDream): void {
    const currentDreams = getDreams();
    const newId = createNewId(currentDreams);
    const updatedDream = { ...newDream, id: newId };

    currentDreams.push(updatedDream);
    
    LS.add("dreams", JSON.stringify(currentDreams))
}

export function updateDream(updatedDream: Dream): void {
    const currentDreams = getParsedFromLS<Dream[]>("dreams", dreams);
    const updatedDreams = currentDreams.map(dream => dream.id === updatedDream.id ? updatedDream : dream);

    LS.add("dreams", JSON.stringify(updatedDreams))

}

export function deleteDream(id: number): void {
    const currentDreams = getParsedFromLS<Dream[]>("dreams", dreams);
    const updatedDreams = currentDreams.filter(dream => dream.id !== id);

    setArrayOrRemove<Dream>("dreams",updatedDreams);
}