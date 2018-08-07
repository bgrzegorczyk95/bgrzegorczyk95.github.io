const cityName = document.querySelector(".city-name");
const check = document.querySelector(".check-weather-btn");

const weatherBox = document.querySelector(".weather");
const cityElement = document.createElement('p');       cityElement.classList.add("cityname");
const tempElement = document.createElement('p');
const pressureElement = document.createElement('p');
const descriptionElement = document.createElement('p');
const windSpeedElement = document.createElement('p');
const tempIcon = document.createElement('img');
tempIcon.classList.add("ikona");
        
weatherBox.appendChild(cityElement);
weatherBox.appendChild(tempElement);
weatherBox.appendChild(pressureElement);
weatherBox.appendChild(descriptionElement);
weatherBox.appendChild(windSpeedElement);
weatherBox.appendChild(tempIcon);

check.addEventListener("click", function(){
    const city = cityName.value;
    const request = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=pl&units=metric&appid=e0b18292ddf9bb1bd6af544d905378ee';

    const icon = "http://openweathermap.org/img/w/";

    $.getJSON(request, weatherCallback);

    function weatherCallback(weatherData){
        const city = weatherData.name;
        const temp = weatherData.main.temp;
        const pressure = weatherData.main.pressure;
        const description = weatherData.weather[0].description;
        const windSpeed = weatherData.wind.speed;
        
        cityElement.textContent = city;
        tempElement.textContent = "Temperatura: " + temp + "°C";
        pressureElement.textContent = "Cisnienie: " + pressure + "hPa";
        descriptionElement.textContent = "Opis: " + description;
        windSpeedElement.textContent = "Predkosc wiatru: " + windSpeed + "km/h";
        tempIcon.classList.add("ikona");
        tempIcon.src = icon + weatherData.weather[0].icon + '.png';
    }
}, false);