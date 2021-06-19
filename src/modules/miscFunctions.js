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

const addText = (divName, content) => {
  divName.textContent = content;
};

//const change_WeatherIcon = (divName) => {};

export const addWeather = (data) => {
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
