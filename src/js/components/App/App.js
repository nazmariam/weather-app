import Component from "../../framework/Component";
import {Temperature} from "../Temperature";
import {Wind} from "../Wind";

export default class App extends Component{
    constructor(host){
        super(host)
    }
    render(){
        const t1 = document.createElement('div');
        new Temperature(t1, {temperature: 5, unit:'C'});
        // const t2 = document.createElement('div');
        // new Temperature(t2, {temperature: 10, unit:'C'});
        const w1 = document.createElement('div');
        new Wind(w1, {speed:1230, unit:'mph'});
        return [
            "Temperature range",
            t1,
            {
                tag: Temperature,
                props:{
                    temperature: 7,
                    unit: 'C',
                }
            },
            {
                tag: Temperature,
                props:{
                    temperature: 10,
                    unit: 'C',
                }
            },
            {
                tag: 'div',
                content: "Me div",
                classList: ['nice'],
                attributes:[
                    {
                        name: 'title',
                        value: "I'm nice"
                    }
                ]
            },
            {
                tag: 'div',
                content: "I'm a parent div",
                attributes: [
                    {
                        name: 'title',
                        value: 'I have got children',
                    },
                ],
                children: [
                    {
                        tag: 'div',
                        content: 'Child1',
                    },
                    {
                        tag: 'div',
                        content: 'Child2',
                        children: [
                            {
                                tag:'div',
                                content:'Child2.1',
                            },
                            {
                                tag:'div',
                                content:'Child2.2',
                            },
                            {
                                tag: 'div',
                                content:'Child2.3'
                            },
                        ]
                    },
                    {
                        tag:'div',
                        content:'Child3'
                    },
                    {
                        tag:'input',
                        eventHandlers: [
                            {
                                eventType: 'change',
                            }
                        ]
                    }
                ],
            },
            {
              tag: Wind,
              props:{
                  speed:250,
                  unit:'mph',
              }
            },
            w1,
        ];
    }
}


