const getWeather = async (city) => {
  const apikey = "3db9f9f8a02a49fffc5a35164ea05c4f";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  let response = await fetch(url, { mode: "cors" });

  if (response.status != 200) {
    throw new Error("NUUUU");
  }

  let result = await response.json();
  console.log(result);
};

export { getWeather };
