class UI {
    constructor() {
        this.description = document.querySelector('#description')
        this.temp = document.querySelector('#temp')
        this.city = document.querySelector('#location')
        this.wind = document.querySelector('#wind')
        this.humidity = document.querySelector('#humidity')
        this.pressure = document.querySelector('#pressure')
        this.visibility = document.querySelector('#visibility')
    }

    drawWeather(data) {
        let celsius = Math.round(parseFloat(data.main.temp) - 273.15);
        let description = data.weather[0].description;
        let wind = data.wind.speed;
        let humidity = data.main.humidity
        let pressure = data.main.pressure
        let visibility = data.visibility / 1000

        this.description.innerHTML = description;
        this.temp.innerHTML = "Temperature: " + celsius + '&deg;';
        this.city.innerHTML = data.name;
        this.wind.innerHTML = "Wind speed: " + wind + "km/h";
        this.humidity.innerHTML = "Humidity: " + humidity + "%";
        this.pressure.innerHTML = "Air pressure: " + pressure + "mmHg";
        this.visibility.innerHTML = "Visibility: " + visibility + " km";
    }
}