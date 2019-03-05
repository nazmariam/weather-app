import Component from "../../framework/Component";
import WeatherDataService from "../../../services/WeatherDataService";
import {App} from "../App";
import {bindAll} from "../../utils/helpers"

export default class Search extends  Component{
    constructor(host, props){
        super(host, props);

        // this.requestWeather = this.requestWeather.bind(this);
        bindAll(this, 'requestWeather');
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
                                        value: 'Enter city name or coordinates',
                                    }
                                ]
                            },
                            {
                                tag: 'button',
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
                        eventMethod: this.requestWeather,
                    }
                ]
            }
        ]
    }
}


