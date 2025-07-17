import { Dream, newDream } from "../models/types";
import { LS, } from "../utils/localStorageHelpers.js";
import { createNewId } from "../utils/dataHelpers.js"

export function getDreams(): Dream[] {
    return LS.getParsedFromLS<Dream[]>("dreams", []);
}

export function addDream(newDream: newDream): void {
    const currentDreams = getDreams();
    const newId = createNewId(currentDreams);
    const updatedDream = { ...newDream, id: newId };

    currentDreams.push(updatedDream);

    LS.add("dreams", JSON.stringify(currentDreams))
}

export function updateDream(updatedDream: Dream): void {
    const currentDreams = LS.getParsedFromLS<Dream[]>("dreams", []);
    const updatedDreams = currentDreams.map(dream => dream.id === updatedDream.id ? updatedDream : dream);

    LS.add("dreams", JSON.stringify(updatedDreams))

}

export function deleteDream(id: number): void {
    const currentDreams = LS.getParsedFromLS<Dream[]>("dreams", []);
    const updatedDreams = currentDreams.filter(dream => dream.id !== id);

        if (updatedDreams.length) {
            LS.add("dreams", JSON.stringify(updatedDreams));
        } else {
            LS.remove("dreams"); // if it was the last item in the list
        }
}