// function search(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-input");

//   let city = document.querySelector(".header-city");

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = ` 0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = ` 0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let tempElement = document.querySelector("#temperature");
  let cityEl = document.querySelector("#city");
  let descriptionEl = document.querySelector("#description");
  let humidityEl = document.querySelector("#humidity");
  let windEl = document.querySelector("#wind");
  let dateEl = document.querySelector("#date");
  let iconEl = document.querySelector("#icon");
  celsiusTemp = response.data.main.temp;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityEl.innerHTML = response.data.name;
  descriptionEl.innerHTML = response.data.weather[0].description;
  humidityEl.innerHTML = response.data.main.humidity;
  windEl.innerHTML = Math.round(response.data.wind.speed);
  dateEl.innerHTML = formatDate(response.data.dt * 1000);
  iconEl.setAttribute(
    "src",
    ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "459eb898914d2b1561006ac93c82eeda";

  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiCall).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputEl = document.querySelector("#city-input");
  search(cityInputEl.value);
}

function showFahrTemp(event) {
  event.preventDefault();
  selsiusLink.classList.remove("current");
  fahrLink.classList.add("current");
  let fahrTemp = (celsiusTemp * 9) / 5 + 32;
  let tempEl = document.querySelector("#temperature");
  tempEl.innerHTML = Math.round(fahrTemp);
}

function showSelsiusTemp(event) {
  event.preventDefault();
  selsiusLink.classList.add("current");
  fahrLink.classList.remove("current");
  let tempEl = document.querySelector("#temperature");
  tempEl.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrLink = document.querySelector("#fahr-link");
fahrLink.addEventListener("click", showFahrTemp);

let selsiusLink = document.querySelector("#celsius-link");
selsiusLink.addEventListener("click", showSelsiusTemp);

search("Kyiv");
//   if (searchInput.value) {
//     city.innerHTML = `${searchInput.value}`;
//   } else {
//     city.innerHTML = null;
//     alert("Please, choose a city!");
//   }

//   function showTemperature(response) {
//     let temperature = Math.round(response.data.main.temp);
//     let tempElement = document.querySelector(".temp");
//     tempElement.innerHTML = `${temperature}`;
// }`;

// //     let humid = document.querySelector(".humidity");
// //     humid.innerHTML = `Humidity: ${response.data.main.humidity}`;

// //     let wind = document.querySelector(".wind");
// //     wind.innerHTML = `Wind: ${response.data.wind.speed}`;

// //     let description = response.data.weather[0].description;
// //     let desc = document.querySelector(".description");
// //     desc.innerHTML = description.charAt(0).toUpperCase() + description.slice(1);

// //     console.log(response);
// //   }
// //   axios.get(apiCall).then(showTemperature);

// //   // function showPosition(position) {
// //   //   let apiKey = "459eb898914d2b1561006ac93c82eeda";
// //   //   let apiCallSecond = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
//   //   axios.get(apiCallSecond).then(getCurrentPosition);
//   // }

//   // function getCurrentPosition(event) {
//   //   event.preventDefault();
//   //   navigator.geolocation.getCurrentPosition(showPosition);
//   // }

//   // let button = document.querySelector("button");
//   // button.addEventListener("click", getCurrentPosition);
// }

// let form = document.querySelector("#form");
// form.addEventListener("submit", search);

// let now = new Date();
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let hours = now.getHours();
// let minutes = now.getMinutes();

// let day = document.querySelector(".day");

// let currentDay = days[now.getDay()];
// day.innerHTML = `${currentDay} ${hours}:${minutes}`;

// // function click(event) {
// //   event.preventDefault();
// //   let newTemperature = document.querySelector(".temp");
// //   newTemperature.innerHTML = 66;
// // }

// // let celLink = document.querySelector("#farng");
// // celLink.addEventListener("click", click);

// // let apiKey = "459eb898914d2b1561006ac93c82eeda";
// // let city = "Oslo";
// // let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// // function showTemperature(response) {
// //   let temperature = Math.round(response.data.main.temp);
// //   let tempElement = document.querySelector(".temp");
// //   tempElement.innerHTML = `${temperature}`;
// // }
// // axios.get(apiCall).then(showTemperature);
