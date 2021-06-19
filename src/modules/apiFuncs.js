const addText = (divName, content) => {
  divName.textContent = content;
};

// divs
let weath_desc = document.querySelector(".weath_desc");
let city = document.querySelector(".city");
let country = document.querySelector(".country");
let temp_num = document.querySelector(".temp_num");
let feels_likeNum = document.querySelector(".feels_likeNum");
let wind_num = document.querySelector(".wind_num");
let humidity_num = document.querySelector(".humidity_num");

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
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${apikey}`;

  let response = await fetch(url, { mode: "cors" });

  if (response.status != 200) {
    alert("NO SUCH PLACE BRUH");
    throw new Error("place not found ");
  }

  let result = await response.json();

  addWeather(result);
};

export { getData };
