// här är det bara level-up!
import { elementNullCheck } from "../utils/domHelpers.js";
import { removeFromLSArray } from "../utils/localStorageHelpers.js";
import { addThemeToLocalStorage, addToLS, getFromLS } from "../utils/localStorageHelpers.js";

const changeNameForm = elementNullCheck<HTMLFormElement>(".change-name")
const nameInput = elementNullCheck<HTMLInputElement>("#name-input");
const themeInput = elementNullCheck<HTMLInputElement>("#theme-input");
const addThemeForm = elementNullCheck<HTMLFormElement>(".add-theme");

nameInput.value = getFromLS("username");

changeNameForm.addEventListener("submit", (event: Event) => {
    event.preventDefault()

    if (nameInput.value.trim()) {
        addToLS("username", nameInput.value);
    }
});


const themeList = document.getElementById("theme-list") as HTMLUListElement;

function renderThemes(): void {
    if (themeList) {
        themeList.innerHTML = "";
        getFromLS("themes").forEach(theme => {
            const li = document.createElement("li");
            li.dataset.id = theme.id.toString();
            li.innerHTML = `<p>${theme.name}</p> <button class="btn-delete" data-id="${theme.id}" aria-label="Delete theme"><img src="../assets/images/trash_delete.png"<button/>`;
            themeList.appendChild(li);
        });
    }
}

addThemeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    console.log("theme input", themeInput.value);

    if (themeInput.value.trim()) {

        addThemeToLocalStorage(themeInput.value)
    }
    renderThemes();
    themeInput.value = "";
});

themeList.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;
    const button = target.closest(".btn-delete") as HTMLButtonElement;
    if (!button) return;
    const id = button.dataset.id;
    if (!id) return;

    removeFromLSArray("themes", id);
    renderThemes();


})
// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn?.addEventListener("click", logOut);

function logOut(): void {
    window.location.replace('login.html');
};


renderThemes();

// lägg till hantering av teman