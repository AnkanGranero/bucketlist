import { elementNullCheck } from "../utils/domHelpers.js";
import { bindElementToVar } from "../utils/domHelpers.js";
import { stringRef, newDream, Theme } from "../models/types.js";
import { addToLS, getFromLS } from "../utils/localStorageHelpers";

const dreams = getFromLS("dreams");
const addDreamForm = elementNullCheck<HTMLFormElement>("#add-dream-form");
const dreamInput = elementNullCheck<HTMLInputElement>("#dream");
const themeSelect = elementNullCheck<HTMLSelectElement>("#dream-select");

const themes = getFromLS("themes") as Theme[];
themes.forEach(theme => {
    const option = document.createElement("option") as HTMLOptionElement;
    option.innerText = theme.name;
    option.value = theme.name;
    themeSelect.appendChild(option);
})

const dreamName: stringRef = { value: "" };
const selectedTheme: stringRef = { value: "" }

addDreamForm.addEventListener("submit", (event: Event): void => {
    event.preventDefault();

    const newDream: newDream = {
        name: dreamName.value,
        theme: selectedTheme.value,
        checked: false,
    }
    addToLS("dreams", newDream);
    window.location.href = "dashboard.html";

})
bindElementToVar(dreamInput, dreamName);
bindElementToVar(themeSelect, selectedTheme);



