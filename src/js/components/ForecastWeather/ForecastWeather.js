import Component from "../../framework/Component";

export default class ForecastWeather extends  Component{
    constructor(host, props){
        super(host, props)
    }
    render(){
        let forecast = this.props;
        return forecast.map(item =>
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
                            content: item.day,
                            classList: 'day',
                        },
                        {
                            tag: 'span',
                            content: item.temperature+item.unit,
                            classList: 'temperature-data',
                        }
                    ]
                }
            ))
    }
}


