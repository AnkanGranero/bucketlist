import { elementNullCheck } from "../utils/domHelpers.js"
import { Dream } from "../models/types";
import { addToLS, getFromLS, removeFromLSArray, updateDreamFields } from "../utils/localStorageHelpers";

const dreamList = elementNullCheck<HTMLUListElement>(".dream-list");

const template = elementNullCheck<HTMLTemplateElement>(".dream-template");
const username = elementNullCheck<HTMLSpanElement>("#user-name");
username.innerText = getFromLS('username',);

function renderDream(dream: Dream): void {
    const clone = template.content.cloneNode(true) as DocumentFragment;

    const input = clone.querySelector("input.dream-check") as HTMLInputElement;
    const dreamLabel = clone.querySelector(".dream-label") as HTMLLabelElement;
    const dreamName = clone.querySelector(".dream-name") as HTMLSpanElement;
    const themeSpan = clone.querySelector(".dream-theme") as HTMLSpanElement;
    const deleteBtn = clone.querySelector(".delete-btn") as HTMLButtonElement;


    input.id = `dream-check-${dream.id}`;
    input.name = `dream-check-${dream.id}`;
    input.checked = dream.checked;
    dreamLabel.setAttribute("for", input.id);

    dreamName.textContent = dream.name;
    themeSpan.textContent = dream.theme;
    deleteBtn.dataset.id = String(dream.id);

    input.addEventListener("change", () => {

        updateDreamFields(dream.id, {checked : input.checked});
    });



    dreamList.appendChild(clone)

}

function renderAllDreams() {
    dreamList.innerHTML = "";
    const currentDreams = getFromLS("dreams");


    currentDreams.forEach(renderDream);
}


dreamList.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;


    const deleteBtn = target.closest(".delete-btn");
    if (deleteBtn) {
        const id = Number(deleteBtn.getAttribute("data-id"));
        removeFromLSArray("dreams" ,id);
        renderAllDreams();
    }

})

renderAllDreams();