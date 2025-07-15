import { dreams, username } from "../store/globalVariables.js"
import { Dream } from "../models/types.js";

export function addUsernameToLocalStorage(username: string): void {
    localStorage.setItem("username", username);
}
export function getUsernameFromLocalStorage():string {
     return localStorage.getItem("username") || username.value;
}

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