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

const add_WeatherIcon = (iconn) => {
  let icon = document.querySelector(".weatherIcon");
  icon.classList = "";
  icon.classList.add(iconn);
  icon.classList.add("weatherIcon");
};

const change_WeatherIcon = (data) => {
  switch (data) {
    case "clear sky":
      add_WeatherIcon("ph-sun-fill");
      break;
    case "few clouds":
      add_WeatherIcon("ph-cloud-fill");
      break;
    case "broken clouds":
      add_WeatherIcon("ph-cloud-fog-fill");
      break;
    case "overcast clouds":
      add_WeatherIcon("ph-cloud-sun-fill");
      break;
    case "scattered clouds":
      add_WeatherIcon("ph-cloud-fill");
      break;
    case "shower rain":
      add_WeatherIcon("ph-cloud-rain-fill");
      break;
    case "rain":
      add_WeatherIcon("ph-cloud-rain-fill");
      break;
    case "haze":
      add_WeatherIcon("ph-cloud-fog-fill");
      break;
    case "moderate rain":
      add_WeatherIcon("ph-cloud-rain-fill");
      break;
    case "thunderstorm":
      add_WeatherIcon("ph-cloud-lightning-fill");
      break;
    case "mist":
      add_WeatherIcon("ph-snowflake-fill");
      break;
    case "snow":
      add_WeatherIcon("ph-heart-fill");
      break;
    default:
  }
};

export const addWeather = (data) => {
  addText(weath_desc, data.weather[0].description);
  change_WeatherIcon(data.weather[0].description);

  // place name
  addText(city, data.name);
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  addText(country, regionNames.of(data.sys.country));

  // figures
  addText(temp_num, Math.round(data.main.temp));
  addText(feels_likeNum, Math.round(data.main.feels_like));
  addText(wind_num, data.wind.speed);
  addText(humidity_num, data.main.humidity);
};

export const getUrl = (area) => {
  const apikey = "3db9f9f8a02a49fffc5a35164ea05c4f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&units=metric&appid=${apikey}`;

  return url;
};
