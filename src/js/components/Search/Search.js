import Component from "../../framework/Component";
import {CITIES} from "../../utils/min"
import {addToStorage, speaker} from "../../utils/helpers";
import WeatherDataService from "../../services/WeatherDataService";
import AppState from "../../services/AppState";

export default class Search extends  Component{
    constructor(host, props){
        super(host, props);
        AppState.watch('props',this.updateMyself);
    }
    bindBeforeRender() {
        this.onInput = this.onInput.bind(this);
        this.onCityClick = this.onCityClick.bind(this);
        this.requestWeather = this.requestWeather.bind(this);
        this.updateMyself = this.updateMyself.bind(this);
        this.state = {
            city: '',
            currentWeather: null,
            forecastWeather: null,
            unit: 'metric',
            radioPlay:false,
        };
    }
    updateMyself(subState) {
        // .... transform response
        console.log(subState);
        let newState=this.state;
        if(subState[0]){
            newState= {
                city:subState[0][0].name+', '+subState[0][0].sys.country,
                currentWeather: subState[0][0],
                forecastWeather: subState[0][1],
                unit: subState[1]};
        }
        let un = 'degrees centigrade';
        if (this.state.unit==='imperial'){
            un = 'degrees fahrenheit'
        }
        speaker("beep. beep. beeeep. Current temperature in "+newState.city+'is. '+Math.round(newState.currentWeather.main.temp)+un+". Please, stay tuned on Weather FM!");

        this.updateState(newState);
    }

    requestWeather(event){
        event.preventDefault();
        event.stopPropagation();
        this.state.unit = document.getElementById('switcher').getAttribute('data-unit');
        this.state.radioPlay = document.querySelector('.play').classList.contains('active');
        this.state.city = document.getElementById('search-weather').value;

        if(this.state.city){
            WeatherDataService
                .getAllWeatherInfo(this.state.city, this.state.unit)
                .then(data => {
                    if (!data) {
                        return;
                    }
                    return AppState.update('props',[data,this.state.unit]);
                }).then(()=>{
            addToStorage(this.state.city,'historyStorage');
        });


        }}



    onInput(e) {
        const ul = document.querySelector('.search-list');
        let items = '';

        const showCities = (value, cities) => {
            const matchArray = findCities(value, cities);
            items = matchArray.map(item => {
                return '<li class="search-list-item">'+item.name+', '+item.country+'</li>';
            }).join('');

            if(e.target.value.length > 0){
                ul.innerHTML = items;
            } else{
                ul.innerHTML = '';
            }
        };
        const findCities = (value, cities) => {
            return cities.filter(city => {
                const regex = new RegExp(value, 'gi');
                return city.name.match(regex);
            });
        };

        if(e.target.value.length > 2){
            showCities(e.target.value, CITIES);
        } else{
            ul.innerHTML = '';
        }
    };
    onCityClick(e){
        if(e.target.classList.contains('search-list-item')){
            document.querySelector('.search-weather').value = e.target.innerHTML.trim();
            document.querySelector('.search-button').click();
        }
    }

    render(){
        return [
            {
                tag: 'form',
                classList: 'search-form',
                children:[
                    {
                        tag:'label',
                        classList: 'search-label',
                        children:[
                            {
                                tag:'input',
                                classList: 'search-weather',
                                attributes: [
                                    {
                                        name: 'type',
                                        value: 'text',
                                    },
                                    {
                                        name: 'name',
                                        value:'search-weather',
                                    },
                                    {
                                        name: 'id',
                                        value: 'search-weather',
                                    },
                                    {
                                        name: 'placeholder',
                                        value: 'Enter city name',
                                    },
                                    {
                                      name: 'autocomplete',
                                      value:'off'
                                    },
                                    {
                                        name: 'value',
                                        value: this.state.city?this.state.city:'',
                                    }

                                ],
                                eventHandlers: [
                                    {
                                        eventType: 'input',
                                        eventMethod: this.onInput,
                                    }
                                ]
                            },
                            {
                                tag: 'button',
                                classList:'search-button',
                                content: 'Search',
                                attributes:[
                                    {
                                        name: 'type',
                                        value: 'submit',
                                    }
                                ]
                            }
                        ]
                    }
                ],

                eventHandlers: [
                    {
                        eventType: 'submit',
                        eventMethod: this.requestWeather, // bind(this): constructor(){this.method = this.method.bind(this);}
                    },
                ],

            },
            {
                tag: 'ul',
                classList: 'search-list',
                eventHandlers: [
                    {
                        eventType: 'click',
                        eventMethod: this.onCityClick,
                    }
                ]
            }
        ]
    }
}


