function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let city = document.querySelector(".header-city");
  let apiKey = "459eb898914d2b1561006ac93c82eeda";
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  if (searchInput.value) {
    city.innerHTML = `${searchInput.value}`;
  } else {
    city.innerHTML = null;
    alert("Please, choose a city!");
  }

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let tempElement = document.querySelector(".temp");
    tempElement.innerHTML = `${temperature}`;

    let humid = document.querySelector(".humidity");
    humid.innerHTML = `Humidity: ${response.data.main.humidity}`;

    let wind = document.querySelector(".wind");
    wind.innerHTML = `Wind: ${response.data.wind.speed}`;

    let description = response.data.weather[0].description;
    let desc = document.querySelector(".description");
    desc.innerHTML = description.charAt(0).toUpperCase() + description.slice(1);

    console.log(response);
  }
  axios.get(apiCall).then(showTemperature);

  // function showPosition(position) {
  //   let apiKey = "459eb898914d2b1561006ac93c82eeda";
  //   let apiCallSecond = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  //   axios.get(apiCallSecond).then(getCurrentPosition);
  // }

  // function getCurrentPosition(event) {
  //   event.preventDefault();
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // }

  // let button = document.querySelector("button");
  // button.addEventListener("click", getCurrentPosition);
}

let form = document.querySelector("#form");
form.addEventListener("submit", search);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = now.getHours();
let minutes = now.getMinutes();

let day = document.querySelector(".day");

let currentDay = days[now.getDay()];
day.innerHTML = `${currentDay} ${hours}:${minutes}`;

// function click(event) {
//   event.preventDefault();
//   let newTemperature = document.querySelector(".temp");
//   newTemperature.innerHTML = 66;
// }

// let celLink = document.querySelector("#farng");
// celLink.addEventListener("click", click);

// let apiKey = "459eb898914d2b1561006ac93c82eeda";
// let city = "Oslo";
// let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// function showTemperature(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let tempElement = document.querySelector(".temp");
//   tempElement.innerHTML = `${temperature}`;
// }
// axios.get(apiCall).then(showTemperature);
