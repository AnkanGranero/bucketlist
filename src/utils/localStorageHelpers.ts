import { dreams } from "../store/globalVariables.js"
import { Dream } from "../models/types.js";

export function addDreamsToLocalStorage(dreams: Dream[]): void {
    const dreamsAsString = JSON.stringify(dreams);
    localStorage.setItem("dreams", dreamsAsString);
}

export function getDreamsFromLocalStorage(): Dream[] {
    const dreamsFromLocalStorage = localStorage.getItem("dreams");
    if (dreamsFromLocalStorage) {
        const efterLS = JSON.parse(dreamsFromLocalStorage);
        return efterLS;
    }
    else {
        return dreams
    }

}