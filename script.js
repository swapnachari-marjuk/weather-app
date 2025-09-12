const seeWeatherBtn = document.getElementById("see-weather-btn");
const weatherImg = document.getElementById("weather-img");
const apiKey = "d6f3abdc01fdf57c0e208a760e52fd3a";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
// appid=d6f3abdc01fdf57c0e208a760e52fd3a

const loadWeather = async (city) => {
  const res = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await res.json();
//   console.log(data)
  if (parseInt(data.cod) === 404) {
    document.getElementById("err-mssg").classList.remove("hidden");
    document.getElementById("Weather-section").classList.add("hidden");
  } else {
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°<sup>C</sup>";
    document.querySelector(".wind").innerText = data.wind.speed + " km/hr";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    const weather = data.weather[0].main;
    // console.log(weather)
    if (weather == "Clouds") {
      weatherImg.src = "./images/clouds.png";
    } else if (weather == "Rain") {
      weatherImg.src = "./images/rain.png";
    } else if (weather == "Drizzle") {
      weatherImg.src = "./images/drizzle.png";
    } else if (weather == "Mist") {
      weatherImg.src = "./images/mist.png";
    } else if (weather == "Snow") {
      weatherImg.src = "./images/snow.png";
    } else {
      weatherImg.src = "./images/clear.png";
    }
    document.getElementById("Weather-section").classList.remove("hidden");
    document.getElementById("err-mssg").classList.add("hidden");
  }
};

seeWeatherBtn.addEventListener("click", () => {
  const city = document.getElementById("city-name").value;
  loadWeather(city);
  document.getElementById("city-name").value = "";
});
