import { getWeather } from "./modules/apiFuncs";

document.querySelector("input").addEventListener("change", (e) => {
  getWeather(e.currentTarget.value);
});
