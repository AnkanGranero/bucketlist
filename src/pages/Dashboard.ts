import { elementNullCheck } from "../utils/domHelpers.js"
import { Dream } from "../models/types";
import { deleteDream, getDreams, updateDream } from "../services/DreamService.js";
import { getUsername } from "../services/UserService.js";

const dreamList = elementNullCheck<HTMLUListElement>(".dream-list");

const template = elementNullCheck<HTMLTemplateElement>(".dream-template");
const username = elementNullCheck<HTMLSpanElement>("#user-name");
username.innerText = getUsername();
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
        dream.checked = input.checked;
        updateDream(dream);
    });



    dreamList.appendChild(clone)

}

function renderAllDreams() {
    dreamList.innerHTML = "";
    const currentDreams = getDreams();


    currentDreams.forEach(renderDream);
}


dreamList.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;


    const deleteBtn = target.closest(".delete-btn");
    if (deleteBtn) {
        const id = Number(deleteBtn.getAttribute("data-id"));
        deleteDream(id);
        renderAllDreams();
    }

})


renderAllDreams();