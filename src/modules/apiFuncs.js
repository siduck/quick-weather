const addText = (divName, content) => {
  divName.textContent = content;
};

// divs
import {
  weath_desc,
  city,
  country,
  temp_num,
  feels_likeNum,
  wind_num,
  humidity_num,
} from "./divSelectors";

const addWeather = (data) => {
  addText(weath_desc, data.weather[0].description);

  // place name
  addText(city, data.name);
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  addText(country, regionNames.of(data.sys.country));

  // figures
  addText(temp_num, Math.round(data.main.temp - 273.15));
  addText(feels_likeNum, Math.round(data.main.feels_like - 273.15));
  addText(wind_num, data.wind.speed);
  addText(humidity_num, data.main.humidity);
};

const getData = async (area) => {
  const apikey = "3db9f9f8a02a49fffc5a35164ea05c4f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${apikey}`;

  let response = await fetch(url, { mode: "cors" });

  if (response.status != 200) {
    alert("NO SUCH PLACE BRUH");
    throw new Error("place not found ");
  }

  let result = await response.json();

  addWeather(result);
};

export { getData };
