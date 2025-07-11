// Validering klaras i HTML

// spara namn i globala variabeln

import { bindInputToVar } from "../utils/domHelpers";
import { stringRef } from "../models/types";
import { userName } from "../store/globalState";


import { elementNullCheck } from "../utils/domHelpers";

const loginForm = elementNullCheck<HTMLFormElement>("#login-form");

const userNameInput = elementNullCheck<HTMLInputElement>("#username");

bindInputToVar(userNameInput, userName);

loginForm.addEventListener("submit", (event: Event): void => {
    event.preventDefault();
})