import Component from "../../framework/Component";
import {ActualWeather} from "../ActualWeather";
import {ForecastWeather} from "../ForecastWeather";
import {Search} from "../Search";
import {Liked} from '../Liked';
import {History} from '../History';
import {addToStorage, removeFromStorage} from "../../utils/helpers"

export default class App extends Component{
    constructor(host, props={}){
        super(host, props);
    }
    bindBeforeRender() {
        this.state = {
            city: '',
            currentWeather: null,
            forecastWeather: null,
            unit: 'metric',
            radioPlay:false,
        };
    }

    render(){
        let layout = document.createDocumentFragment();
        let radio = document.createElement('div');
        radio.classList.add('radio');

        radio.innerHTML = `
            <nav class="forecast">
                <div class="navigate-wrapper">
                    <ul class="forecast-list" id="forecast-list">
                        
                    </ul>
                    <div class="button-block">
                        <button id='liked' class="liked-cities">Liked</button>
                        <button id="history" class="history">History</button>
                    </div>
                </div>
            </nav>
            <section class="main-content">
                <div class="search">
                <span id="playWrapper">
                    
                </span>
                    <span id="searchForm">
                    </span>
                    <button id="like" type="button">Like</button>
                </div>
                <div class="container">
                    <div class="top-panel">
                        <div class="top-panel-content" id="today-weather">
                        
                        </div>
                    </div>
                    <div class="wheel-img">
                        <img src="handler.png" alt="">
                    </div>
                </div>

            </section>
            <section class="legs"></section>
        `;
        layout.appendChild(radio);

        let liked = layout.getElementById('liked');
        liked.addEventListener('click', function (e) {
            e.preventDefault();
            new Liked(todayWeather);
        });

        layout.getElementById('history').addEventListener('click', function () {
            new History(todayWeather);
        });

        new Search(layout.getElementById('searchForm'));

        let unitButton = document.createElement('button');
        unitButton.classList.add('unit-switcher');
        unitButton.setAttribute('id','switcher');

        unitButton.setAttribute('data-unit','metric');
        unitButton.innerHTML = `<span class="c">&#176;C</span>
                            <span class="k">&#176;F</span>`;
        if(this.state.unit==='imperial'){
            unitButton.classList.add('active');
            unitButton.setAttribute('data-unit','imperial');
        }
        unitButton.addEventListener('click',function(){
            unitButton.classList.toggle('active');
            if (unitButton.classList.contains('active')){
                unitButton.setAttribute('data-unit','imperial');
            } else {
                unitButton.setAttribute('data-unit','metric');
            }
            document.querySelector('.search-button').click();
        });
        layout.querySelector('.button-block').prepend(unitButton);


        let playButton = document.createElement('button');
        playButton.classList.add('play');
        if(this.state.radioPlay===true){
            playButton.classList.add('active')
        }
        playButton.setAttribute('type','button');
        playButton.innerHTML = `<span class="on">on</span>
                        <span class="off ">off</span>`;
        let audio = document.getElementById("radio");
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
        this.currentWeather = new ActualWeather(todayWeather);

        let forecastHost = layout.getElementById('forecast-list');
        this.forecastWeather = new ForecastWeather(forecastHost);

        return [
            layout,
        ]
    }
}

