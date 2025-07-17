// Validering klaras i HTML

// spara namn i globala variabeln

import { bindElementToVar } from "../utils/domHelpers.js";
import { username } from "../store/globalVariables.js";


import { elementNullCheck } from "../utils/domHelpers.js";
import { addToLS } from "../utils/localStorageHelpers";

const loginForm = elementNullCheck<HTMLFormElement>("#login-form");

const usernameInput = elementNullCheck<HTMLInputElement>("#username");

bindElementToVar(usernameInput, username);

loginForm.addEventListener("submit", (event: Event): void => {
    addToLS("username",usernameInput.value);
})