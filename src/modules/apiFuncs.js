import { addWeather } from "./miscFunctions";

const getData = async (area) => {
  const apikey = "3db9f9f8a02a49fffc5a35164ea05c4f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&units=metric&appid=${apikey}`;

  let response = await fetch(url);

  if (response.status != 200) {
    alert("NO SUCH PLACE BRUH");
    throw new Error("place not found ");
  }

  let result = await response.json();

  addWeather(result);
};

export { getData };
