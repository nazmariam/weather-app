import Component from "../../framework/Component";
import {dayOfWeek} from "../../utils/helpers";

export default class ForecastWeather extends  Component{
    constructor(host, props){
        super(host, props)
    }
    render(){
        let forecast = this.props;
        return forecast.map((item,i) =>
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
                                    value: item.imgsrc,
                                }
                            ]
                        },
                        {
                            tag: 'span',
                            content: dayOfWeek(item.day),
                            classList: 'day',
                        },
                        {
                            tag: 'span',
                            content: Math.round(item.temperature)+item.unit,
                            classList: 'temperature-data',
                        }
                    ]
                }
            ))
    }
}


