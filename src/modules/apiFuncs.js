import { addWeather, getUrl } from "./miscFunctions";

const getData = async (area) => {
  const url = getUrl(area);
  let response = await fetch(url);

  if (response.status != 200) {
    alert("place not found");
    throw new Error("place not found ");
  }

  let result = await response.json();
  addWeather(result);
};

export { getData };
