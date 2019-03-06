import Component from "../../framework/Component";
import {ActualWeather} from "../ActualWeather";
import {ForecastWeather} from "../ForecastWeather";
import {Search} from "../Search";
import WeatherDataService from "../../../services/WeatherDataService"

export default class App extends Component{
    constructor(host, dataR={}){
        super(host, dataR);
        this.requestWeather = this.requestWeather.bind(this);
        this.render = this.render.bind(this);
        this._render();
    }

    requestWeather(event){
        event.preventDefault();
        let query = document.getElementById('search-weather').value;
        if(query) {
            // WeatherDataService.getCurrentWeather(query).then(data=>{ this._render(data)});
            // WeatherDataService.getWeatherForecast(query).then(data=>{ this._render(data)});
            WeatherDataService.getAllWeatherInfo(query).then(data=>{this._render(data)});
        }
    }

    render(dataR){
        if(dataR){console.log(dataR)};

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
                <span id="playWrapper">
                    
                </span>
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
        new Search(search);
        let form = layout.querySelector(".search-form");
        form.addEventListener('submit', this.requestWeather);

        let playButton = document.createElement('button');
        playButton.classList.add('play');
        playButton.setAttribute('type','button');
        playButton.innerHTML = `<span class="on">on</span>
                        <span class="off ">off</span>`;
        let audio = layout.getElementById("radio");
        playButton.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
            this.classList.toggle('active');
        });
        layout.getElementById('playWrapper').appendChild(playButton);

        // main: {temp: 9.75, pressure: 986, humidity: 76, temp_min: 8.33, temp_max: 11}
        // name: "London"
        // rain:
        //     1h: 0.25
        // __proto__: Object
        // sys: {type: 1, id: 1414, message: 0.0129, country: "GB", sunrise: 1551854017, …}
        // visibility: 10000
        // weather: Array(1)
        // 0: {id: 500, main: "Rain", description: "light rain", icon: "10n"}
        // length: 1
        // __proto__: Array(0)
        // wind:
        //     deg: 200
        // speed: 6.7



        let todayWeather = layout.getElementById('today-weather');
        new ActualWeather(todayWeather, {city: dataR, temperature: dataR, unit:'&#176;C', humidity: dataR, wind: dataR, pressure:dataR});
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

