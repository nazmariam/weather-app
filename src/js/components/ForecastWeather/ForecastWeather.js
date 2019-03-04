import Component from "../../framework/Component";

export default class ForecastWeather extends  Component{
    constructor(host, props){
        super(host, props)
    }
    render(){
        return this.props.speed +''+ this.props.unit;
    }
}


