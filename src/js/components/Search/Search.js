import Component from "../../framework/Component";
import {CITIES} from "../../utils/min"

export default class Search extends  Component{
    constructor(host, props){
        super(host, props);

    }
    bindBeforeRender() {
        this.onInput = this.onInput.bind(this);
        this.onCityClick = this.onCityClick.bind(this);
    }

    onInput(e) {
        const ul = document.querySelector('.search-list');
        let items = '';

        const showCities = (value, cities) => {
            const matchArray = findCities(value, cities);
            items = matchArray.map(item => {
                return '<li class="search-list-item">'+item.name+' '+item.country+'</li>';
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
            document.querySelector('.search-weather').value = e.target.innerHTML.slice(0,-3)+', '+e.target.innerHTML.slice(-2);
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
                                        value: this.props.city?this.props.city:'',
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
                        eventMethod: this.props.onSubmit, // bind(this): constructor(){this.method = this.method.bind(this);}
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


