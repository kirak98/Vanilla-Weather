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
iconElement.setAttribute("src", );

iconElement.setAttribute("alt", response.data.weather[0].description);
}


