class Weather {
    constructor(city) {
        this.city = city
        this.key = 'f5e0f93e845ecb2d75c6f0c2189d3537'
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }
}