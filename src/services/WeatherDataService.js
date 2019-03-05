import {App} from "../js/components/App"
class WeatherDataService{
    constructor(){

    }
    getCurrentWeather(query) {
           return fetch('http://api.openweathermap.org/data/2.5/weather?q='+query+'&APPID='+'c252c73aab29bec59ad61241d38d8981'+'&units='+'metric', {method:'get'})
                .then(response => {
                    if(response.ok)
                        return response.json();
                    return Promise.reject('Weather Server responded ' + response.status)
                })
    }
    getWeatherForecast(query) {
        return fetch('http://api.openweathermap.org/data/2.5/forecast?q='+query+'&APPID='+'c252c73aab29bec59ad61241d38d8981'+'&units='+'metric', {method:'get'})
            .then(response => {
                if(response.ok)
                    return response.json();
                return Promise.reject('Weather Server responded ' + response.status)
            })
    }
}

export default new WeatherDataService();
