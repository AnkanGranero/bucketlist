// Validering klaras i HTML

// spara namn i globala variabeln

import { bindElementToVar } from "../utils/domHelpers.js";
import { username } from "../store/globalVariables.js";
import { LS } from "../utils/localStorageHelpers.js"


import { elementNullCheck } from "../utils/domHelpers.js";

const loginForm = elementNullCheck<HTMLFormElement>("#login-form");

const usernameInput = elementNullCheck<HTMLInputElement>("#username");

bindElementToVar(usernameInput, username);

loginForm.addEventListener("submit", (event: Event): void => {
    LS.add("username",usernameInput.value);
})