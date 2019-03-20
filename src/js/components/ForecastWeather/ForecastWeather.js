import Component from "../../framework/Component";
import {dayOfWeek} from "../../utils/helpers";
import {timestampOfDay} from "../../utils/helpers";
import AppState from "../../services/AppState";


export default class ForecastWeather extends  Component{
    constructor(host,props){
        super(host,props);
        AppState.watch('props',this.updateMyself);

    }
    bindBeforeRender() {
        // this.requestWeather = this.requestWeather.bind(this);
        this.updateMyself = this.updateMyself.bind(this);
        this.state = {
            city: '',
            forecastWeather: '',
            unit: 'metric',
        }
    };

    updateMyself(subState) {
        //

        let newState= {
            city:subState[0].name+', '+subState[0].sys.country,
            currentWeather: subState[0],
            forecastWeather: subState[1],
            unit: this.state.unit};
        // do update
        this.updateState(newState);
    }
    render(){
        let forecast = [{dt:timestampOfDay(1),main:{temp:''},weather:[]},{dt:timestampOfDay(2),main:{temp:''},weather:[]},{dt:timestampOfDay(3),main:{temp:''},weather:[]},{dt:timestampOfDay(4),main:{temp:''},weather:[]},{dt:timestampOfDay(5),main:{temp:''},weather:[]},];
        let forecastObj = this.state.forecastWeather;
        let unit = this.state.unit;
        if (forecastObj){
            forecast = forecastObj.list.filter((item,i)=>{return (i%8==0)});
        }
        const tempUnit = (unit==='metric') ? " &#176;C" : " &#176;F";
        return forecast.map((item) =>
            (
                {
                    tag: 'li',
                    classList: 'forecast-item',
                    children:[
                        {
                            tag: 'img',
                            attributes:[
                                {
                                    name: 'src',
                                    value: forecastObj?'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png':'',
                                }
                            ]
                        },
                        {
                            tag: 'span',
                            content: dayOfWeek(item.dt),
                            classList: 'day',
                        },
                        {
                            tag: 'span',
                            content: forecastObj?Math.round(item.main.temp)+tempUnit:'',
                            classList: 'temperature-data',
                        }
                    ]
                }
            ))
    }
}


