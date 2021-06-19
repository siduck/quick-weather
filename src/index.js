import { getData } from "./modules/apiFuncs";

getData("sanaa");

let userInput = document.querySelector("input");

userInput.addEventListener("change", (e) => {
  getData(e.currentTarget.value);
  e.currentTarget.value = "";
});
