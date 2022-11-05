let weather = {
    apiKey: "cd2052925600b7bc1cd79910a468d523",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerHTML = name;
        document.querySelector(".temperature").innerHTML = Math.round(temp)  + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png"
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + " " + humidity;
        document.querySelector(".wind").innerHTML = "Wind speed: " + " " + speed;
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);

    }
};

document.querySelector(".search-button").addEventListener("click", function(){
    weather.search();
});

addEventListener("keyup", function(e) {
    if (e.key ==="Enter") {
        weather.search();
    }
});

window.onload(weather.fetchWeather("Paris"));