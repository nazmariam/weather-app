import Component from "../../framework/Component";

export default class Search extends  Component{
    constructor(host, props){
        super(host, props);
        this.requestWeather = this.requestWeather.bind(this);
    }

    requestWeather(event){
        event.preventDefault();
        let query = document.getElementById('search-weather').value;
            let swicher = document.getElementById('swicher');
            if(query){
                fetch('http://api.openweathermap.org/data/2.5/weather?q='+query+'&APPID='+'c252c73aab29bec59ad61241d38d8981'+'&units='+'metric', {method:'get'})
                    .then(response => {
                        if(response.ok)
                            return response.json();
                        return Promise.reject('Weather Server responded ' + response.status)
                    }).then(data=>{
                    console.log(data);
                })
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


