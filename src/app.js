function formatDate(timestamp) {
let date = new Date(timestamp);
let hours= date.getHours();
if (hours <10) { hours = `0${hours}`;
}
let minutes =date.getMinutes();
if (minutes <10) { minutes = `0${minutes}`;
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

function displayTemperature() {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    celsiusTemperature = response.data.main.temp;

temperatureElement.innerHTML = Math.round(celsiusTemperature);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML= Math.round(response.data.wind.speed *3.6);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src", `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition[0].icon}.png` );

iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
    let apiKey ="f1cc8436d5e8084ob3affafba54dtceb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    console.log(apiUrl);
    
}
function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#search-text-input");
    search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");

    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature =(celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature (event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Barcelona");

