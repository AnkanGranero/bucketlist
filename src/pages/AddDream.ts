import { elementNullCheck } from "../utils/domHelpers.js";
import { bindElementToVar } from "../utils/domHelpers.js";
import { stringRef, Dream } from "../models/types.js";
import { dreams } from "../store/globalVariables.js";
import { addDreamsToLocalStorage } from "../utils/localStorageHelpers.js";


const addDreamForm = elementNullCheck<HTMLFormElement>("#add-dream-form");
const dreamInput = elementNullCheck<HTMLInputElement>("#dream");
const themeSelect = elementNullCheck<HTMLSelectElement>("#dream-select")

const dreamName: stringRef = { value: "" };
const selectedTheme: stringRef = { value: "" }

addDreamForm.addEventListener("submit", (event: Event): void => {
    event.preventDefault();
    const newId = Math.max(...dreams.map((dream) => dream.id)) + 1;

    const newDream: Dream = {
        id: newId,
        name: dreamName.value,
        theme: selectedTheme.value,
        checked: false,
    }
    dreams.push(newDream);
    addDreamsToLocalStorage(dreams);
    window.location.href = "dashboard.html";

})
bindElementToVar(dreamInput, dreamName);
bindElementToVar(themeSelect, selectedTheme);



