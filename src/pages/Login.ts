// Validering klaras i HTML

// spara namn i globala variabeln

import { bindElementToVar } from "../utils/domHelpers";
import { stringRef } from "../models/types";
import { userName } from "../store/globalVariables";


import { elementNullCheck } from "../utils/domHelpers";

const loginForm = elementNullCheck<HTMLFormElement>("#login-form");

const userNameInput = elementNullCheck<HTMLInputElement>("#username");

bindElementToVar(userNameInput, userName);

loginForm.addEventListener("submit", (event: Event): void => {
    event.preventDefault();
})