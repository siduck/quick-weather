const getWeather = async (city) => {
  const apikey = "3db9f9f8a02a49fffc5a35164ea05c4f";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  let response = await fetch(url, { mode: "cors" });

  if (response.status != 200) {
    throw new Error("NUUUU");
  }

  let result = await response.json();

  console.log(result.name);
  console.log(result.weather[0].description);
  console.log(Math.round(result.main.temp - 273.15));
  console.log(Math.round(result.main.feels_like - 273.15));
  console.log(result.main.humidity);
  console.log(result.wind.speed);
  console.log(result);

  //let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
  //regionNames.of('AU')
};

export { getWeather };
