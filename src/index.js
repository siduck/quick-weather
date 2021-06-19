import { getData } from "./modules/apiFuncs";

document.querySelector("input").addEventListener("change", (e) => {
  getData(e.currentTarget.value);
  e.currentTarget.value = "";
});

getData("sanaa");
