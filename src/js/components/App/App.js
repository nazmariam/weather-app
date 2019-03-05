import Component from "../../framework/Component";
import {Temperature} from "../Temperature";
import {Wind} from "../Wind";
import {ActualWeather} from "../ActualWeather";
import {ForecastWeather} from "../ForecastWeather";
import {Search} from "../Search";

export default class App extends Component{
    constructor(host){
        super(host)
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
                    <ul class="forecast-list">
                        <li class="forecast-item forecast-day-1">
                            <img src="cloudy.svg" alt="">
                            <span class="day">Mon</span>
                            <span class="temperature-data">23<span class="unit">&#176;C</span></span>
                        </li>
                        <li class="forecast-item forecast-day-2">
                            <img src="sun.svg" alt="">
                            <span class="day">Tue</span>
                            <span class="temperature-data">20<span class="unit">&#176;C</span></span>
                        </li>
                        <li class="forecast-item forecast-day-3">
                            <img src="sun-cloudy.svg" alt="">
                            <span class="day">Wed</span>
                            <span class="temperature-data">25<span class="unit">&#176;C</span></span>
                        </li>
                        <li class="forecast-item forecast-day-4">
                            <img src="rainy.svg" alt="">
                            <span class="day">Thu</span>
                            <span class="temperature-data">19<span class="unit">&#176;C</span></span>
                        </li>
                        <li class="forecast-item forecast-day-5">
                            <img src="sun.svg" alt="">
                            <span class="day">Fri</span>
                            <span class="temperature-data">29<span class="unit">&#176;C</span></span>
                        </li>
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
        new Search(search);
        let todayWeather = layout.getElementById('today-weather');
        new ActualWeather(todayWeather, {city: 'Kiev, UA', temperature: 25, unit:'&#176;C', humidity: 58, wind: 14, pressure:102});

        // // new Temperature(t2, {temperature: 10, unit:'C'});
        // const w1 = document.createElement('div');
        // new Wind(w1, {speed:1230, unit:'mph'});
        return [
            layout,
        ];
    }
}


