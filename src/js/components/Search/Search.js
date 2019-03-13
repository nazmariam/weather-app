import Component from "../../framework/Component";
import WeatherDataService from "../../../services/WeatherDataService";
import {App} from "../App";
import {bindAll} from "../../utils/helpers"

export default class Search extends  Component{
    constructor(host, props){
        super(host, props);

    }
    bindBeforeRender() {
        // this.render = this.render.bind(this);
        // this.requestWeather = this.requestWeather.bind(this);
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
                                    },
                                    {
                                        name: 'value',
                                        value: this.props.city?this.props.city:'',
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
                        eventMethod: this.props.onSubmit, // bind(this): constructor(){this.method = this.method.bind(this);}
                    },
                ],

            }
        ]
    }
}


