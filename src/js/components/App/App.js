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


        let todayWeather = layout.getElementById('today-weather');
        if(dataR){new ActualWeather(todayWeather, {city: dataR, temperature: dataR, unit:'&#176;C', humidity: dataR, wind: dataR, pressure:dataR})}
        let forecast = layout.getElementById('forecast-list');
        if(dataR){new ForecastWeather(forecast, [
            {
                day: dataR[0].list[7].dt, temperature: dataR[0].list[7].main.temp, unit: '&#176;C', imgsrc: 'http://openweathermap.org/img/w/'+dataR[0].list[7].weather[0].icon+'.png',
            },
            {
                day: dataR[0].list[15].dt, temperature: dataR[0].list[15].main.temp, unit: '&#176;C', imgsrc: 'http://openweathermap.org/img/w/'+dataR[0].list[15].weather[0].icon+'.png',
            },
            {
                day: dataR[0].list[23].dt, temperature: dataR[0].list[23].main.temp, unit: '&#176;C', imgsrc: 'http://openweathermap.org/img/w/'+dataR[0].list[23].weather[0].icon+'.png',
            },
            {
                day: dataR[0].list[31].dt, temperature: dataR[0].list[31].main.temp, unit: '&#176;C', imgsrc: 'http://openweathermap.org/img/w/'+dataR[0].list[31].weather[0].icon+'.png',
            },
            {
                day: dataR[0].list[39].dt, temperature: dataR[0].list[39].main.temp, unit: '&#176;C', imgsrc: 'http://openweathermap.org/img/w/'+dataR[0].list[39].weather[0].icon+'.png',
            },

        ])}

        return [
            layout,
        ];

    }
}

