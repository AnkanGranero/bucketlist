// här är det bara level-up!
import { username, themes } from "../store/globalVariables.js"
import { elementNullCheck } from "../utils/domHelpers.js";
import { addUsernameToLocalStorage, getUsernameFromLocalStorage } from "../utils/localStorageHelpers.js";

const changeNameForm = elementNullCheck<HTMLFormElement>(".change-name")
const nameInput = elementNullCheck<HTMLInputElement>("#name-input");

nameInput.value = getUsernameFromLocalStorage() || username.value;

changeNameForm.addEventListener("submit", (event: Event) => {
    event.preventDefault()
    
    if (nameInput.value.trim()) {
        addUsernameToLocalStorage(nameInput.value);
    }
})

const themeList = document.getElementById("theme-list") as HTMLUListElement;
if (themeList) {
    Object.keys(themes).forEach((key) => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${themes[key]}</p> <img src="../assets/images/trash_delete.png" />`;
        themeList.appendChild(li);
    });
}

// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn?.addEventListener("click", logOut);

function logOut(): void {
    window.location.replace('login.html');
};

// lägg till hantering av teman