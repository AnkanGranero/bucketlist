import { username } from "../store/globalVariables.js";
import { LS } from "../utils/localStorageHelpers.js";
export function getUsername() {
    return LS.get("username") || username.value
}