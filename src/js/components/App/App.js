import Component from "../../framework/Component";
import {ActualWeather} from "../ActualWeather";
import {ForecastWeather} from "../ForecastWeather";
import {Search} from "../Search";
import WeatherDataService from "../../../services/WeatherDataService";
import {Liked} from '../Liked';
import {History} from '../History';
import {timestampOfDay, dayOfWeek, addToStorage, removeFromStorage} from "../../utils/helpers"

export default class App extends Component{
    constructor(host, dataR={}){
        super(host, dataR);
        this.state = {
            city: '',
            currentWeather: null,
            forecastWeather: null,
            unit: 'metric',
            radioPlay:false,
        };
    }
    bindBeforeRender() {
        this.requestWeather = this.requestWeather.bind(this);
    }

    requestWeather(event){
        event.preventDefault();
        event.stopPropagation();

        this.state.unit = document.getElementById('switcher').getAttribute('data-unit');
        this.state.radioPlay = document.querySelector('.play').classList.contains('active');
        this.state.city = document.getElementById('search-weather').value;

        if(this.state.city){this.getCityForecast(this.state.city, this.state.unit).then((data)=>{
            addToStorage(data.loc,'historyStorage');
            this.updateState({
                            city: data.loc,
                            currentWeather: data.todayForecast,
                            forecastWeather: data.otherDaysForecast,
                            unit: this.state.unit
                        });
            });
    }}

    computeNextState(data) {

        return {
            loc:data[0].name+', '+data[0].sys.country,
            todayForecast: data[0],
            otherDaysForecast: data[1]
        };
    }

    getCityForecast(city, unit) {
        return WeatherDataService
            .getAllWeatherInfo(city, unit)
            .then(data => {
                if (!data) {
                    return;
                }
                return this.computeNextState(data)
            })
    }

    render(st){
        const {
            city,
            currentWeather,
            forecastWeather,
            unit,
        } = this.state;
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
        let like = layout.getElementById('like');
        layout.querySelector('.top-panel-content').addEventListener('click',function (e) {
            let elem = e.target;
            if(elem.classList.contains('remove')){
                removeFromStorage(elem.parentNode.textContent.trim(),'likedStorage');
                elem.parentNode.remove();
            }
            if(elem.classList.contains('liked-item')){
                document.getElementById('search-weather').value=elem.textContent.trim();
                document.querySelector('.search-button').click();
            }
        })

        like.addEventListener('click', function(e) {
            e.preventDefault();
            addToStorage(city,'likedStorage');
        });

        let historyButton = layout.getElementById('history');
        historyButton.addEventListener('click', function (e) {
            e.preventDefault();
            new History(todayWeather);
        });

        let search = layout.getElementById('searchForm');
        new Search(search,{
            city: city,
            onSubmit: this.requestWeather,
        });

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
        this.currentWeather = new ActualWeather(todayWeather, {city: city, currentWeather:currentWeather, unit:unit});

        let forecastHost = layout.getElementById('forecast-list');
        this.forecastWeather = new ForecastWeather(forecastHost,{forecastWeather: forecastWeather, unit: unit});

        return [
            layout,
        ]
    }
}

