import Component from "../../framework/Component";
import {ActualWeather} from "../ActualWeather";
import {ForecastWeather} from "../ForecastWeather";
import {Search} from "../Search";
import WeatherDataService from "../../../services/WeatherDataService"
import {timestampOfDay, dayOfWeek} from "../../utils/helpers"

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
        // this.render = this.render.bind(this);
        this.requestWeather = this.requestWeather.bind(this);
    }

    requestWeather(event){
        event.preventDefault();
        event.stopPropagation();
        this.state.unit = document.getElementById('switcher').getAttribute('data-unit');
        this.state.radioPlay = document.querySelector('.play').classList.contains('active');
        this.state.city = document.getElementById('search-weather').value;
        this.getCityForecast(this.state.city, this.state.unit).then((data)=>{
            console.log('getCityForecast - ', data);
            this.updateState({
                            city: data.loc,
                            currentWeather: data.todayForecast,
                            forecastWeather: data.otherDaysForecast,
                            unit: this.state.unit
                        });
            });
    }

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

    render(){
        const {
            city,
            currentWeather,
            forecastWeather,
            unit,
        } = this.state;
        console.log('STATE: ',this.state);
        let layout = document.createDocumentFragment();
        let radio = document.createElement('div');
        radio.classList.add('radio');

        radio.innerHTML = `
            <nav class="forecast">
                <div class="navigate-wrapper">
                    <ul class="forecast-list" id="forecast-list">
                        
                    </ul>
                    <div class="button-block">
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

