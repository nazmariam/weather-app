class WeatherDataService {
    constructor() {

    }

    getWeatherForecast(query,unit) {
        return fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + query + '&APPID=' + 'c252c73aab29bec59ad61241d38d8981' + '&units=' + unit, {method: 'get'})
            .then(response => {
                if (response.ok)
                    return response.json();
                return Promise.reject('Weather Server responded ' + response.status)
            })
    }
    getCurrentWeather(query,unit) {
        return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&APPID=' + 'c252c73aab29bec59ad61241d38d8981' + '&units=' + unit, {method: 'get'})
            .then(response => {
                if (response.ok)
                    return response.json();
                return Promise.reject('Weather Server responded ' + response.status)
            })
    }

    getAllWeatherInfo(query, unit) {
        return Promise.all
        ([this.getCurrentWeather(query,unit),
                 this.getWeatherForecast(query,unit)])
    }
}

export default new WeatherDataService();
