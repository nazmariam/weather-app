import Component from "../../framework/Component";
import {dayOfWeek} from "../../utils/helpers";
import {timestampOfDay} from "../../utils/helpers"

export default class ForecastWeather extends  Component{
    constructor(host,props){
        super(host,props)
    }
    render(){
        let forecast = [{dt:timestampOfDay(1),main:{temp:''},weather:[]},{dt:timestampOfDay(2),main:{temp:''},weather:[]},{dt:timestampOfDay(3),main:{temp:''},weather:[]},{dt:timestampOfDay(4),main:{temp:''},weather:[]},{dt:timestampOfDay(5),main:{temp:''},weather:[]},];
        let forecastObj = this.props.forecastWeather;
        let unit = this.props.unit;
        if (forecastObj){
            forecast = forecastObj.list.filter((item,i)=>{return (i%8==0)});
        }
        const tempUnit = (unit=='metric') ? " &#176;C" : " &#176;F";
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


