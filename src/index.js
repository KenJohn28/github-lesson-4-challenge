function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");

  let myKey = "bfa4e3a0ac7o3a4bt6f40d35c51eab14";
  let myAPI = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${myKey}&units=metric`;

  axios.get(myAPI).then(displayCityTemp);
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
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

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function displayCityTemp(response) {
  let changeTemp = document.querySelector(".current-temperature-value");
  if (changeTemp) {
    let temperature = Math.round(response.data.temperature.current);
    if (temperature !== undefined) {
      changeTemp.innerHTML = temperature;
    }
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
