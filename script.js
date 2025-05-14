const apiKey = "cb3a4e56a623996f5e89ce95418f6863";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("input");
const searchBtn = document.getElementById("button");
const weatherIcon = document.querySelector(".icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } 
    else if (data.weather[0].main == "snow") {
        weatherIcon.src = "images/snow.png";
    } 
    else if (data.weather[0].main == "drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } 
    else if (data.weather[0].main == "rain") {
        weatherIcon.src = "images/rain.png";
    } 
    else if (data.weather[0].main == "mist") {
        weatherIcon.src = "images/mist.png";
    }  

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    } 
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

var input = document.getElementById("input");

input.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        console.log("Enter key pressed!!!!!");
        checkWeather(searchBox.value);
        button
    }    
});

document.getElementById("myBtn").click();