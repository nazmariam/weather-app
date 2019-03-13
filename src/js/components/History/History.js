import Component from "../../framework/Component";

export default class History extends  Component {
    constructor(host) {
        super(host);
    }

    render() {
        let data = JSON.parse(localStorage.getItem('historyStorage'));
        let resultArr =[];
        if(data){resultArr = Object.values(data)}
        resultArr.unshift(`<h4 class="weather-fm">Search history</h4>`);
    return (data)?resultArr.map((item)=>(
        {
            tag: 'div',
            classList:'liked-item',
            content: item,
        }
        )):'Nothing found';
    }
}


