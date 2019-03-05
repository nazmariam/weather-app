import Component from "../../framework/Component";
import {ActualWeather} from "../ActualWeather";
import {ForecastWeather} from "../ForecastWeather";
import {Search} from "../Search";
import WeatherDataService from "../../../services/WeatherDataService"

export default class App extends Component{
    constructor(host, data={}){
        super(host, data);
        this.requestWeather = this.requestWeather.bind(this);

    }

    func(rt){
        console.log(rt);
    }

    requestWeather(event){
        event.preventDefault();
        let query = document.getElementById('search-weather').value;
        if(query) {
            WeatherDataService.getCurrentWeather(query).then(data=>{console.log(data)});
            WeatherDataService.getWeatherForecast(query).then(data=>{console.log(data)});
        }
    }



    render(){

        let layout = document.createDocumentFragment();

        let radio = document.createElement('div');
        radio.classList.add('radio');

        radio.innerHTML = `
        <audio id="radio" controls>
                <source src="fallout.mp3">
            </audio>
            <nav class="forecast">
                <div class="navigate-wrapper">
                    <ul class="forecast-list" id="forecast-list">
                        
                    </ul>
                    <div class="button-block">
                        <button class="unit-swiсher" id="swicher">
                            <span class="c">&#176;C</span>
                            <span class="k">K</span>
                        </button>
                        <button class="liked-cities">Liked</button>
                        <button class="history">History</button>
                    </div>
                </div>
            </nav>
            <section class="main-content">
                <div class="search">
                    <button type="button" class="play">
                        <span class="on">on</span>
                        <span class="off ">off</span>
                    </button>
                    <span id="searchForm">
                    some magic will be here
                    </span>
                    <button type="button">Like</button>
                </div>
                <div class="container">
                    <div class="top-panel" id="today-weather">
                        
                    </div>
                    <div class="wheel-img">
                        <img src="handler.png" alt="">
                    </div>
                </div>

            </section>
            <section class="legs"></section>
        `;
        layout.appendChild(radio);

        let search = layout.getElementById('searchForm');
        let data = new Search(search);
        // let queryVal = layout.getElementById('search-weather');
        // queryVal.addEventListener('submit',this.requestWeather);


        let todayWeather = layout.getElementById('today-weather');
        new ActualWeather(todayWeather, {city: data.city, temperature: 25, unit:'&#176;C', humidity: 58, wind: 14, pressure:102});
        let forecast = layout.getElementById('forecast-list');
        new ForecastWeather(forecast, [
            {
                day: 'Mon', temperature: 25, unit: '&#176;C', imgsrc: 'cloudy.svg',
            },
            {
                day: 'Tue', temperature: 27, unit: '&#176;C', imgsrc: 'sun.svg',
            },
            {
                day: 'Wed', temperature: 23, unit: '&#176;C', imgsrc: 'sun-cloudy.svg',
            },
            {
                day: 'Thu', temperature: 26, unit: '&#176;C', imgsrc: 'rainy.svg',
            },
            {
                day: 'Fri', temperature: 29, unit: '&#176;C', imgsrc: 'sun.svg',
            },

        ]);

        return [
            layout,

        ];

    }
}

