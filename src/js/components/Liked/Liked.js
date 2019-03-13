import Component from "../../framework/Component";

export default class Liked extends  Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        let data = JSON.parse(localStorage.getItem('likedStorage'));
        let resultArr =[];
        if(data){resultArr = Object.values(data)}
        resultArr.unshift(`<h4 class="weather-fm">Liked cities</h4>`);
    return (data)?resultArr.map((item)=>(
        {
            tag: 'div',
            classList:['liked-item','special'],
            content: item+` <span class="remove"></span>`,

        }
        )):'Nothing found';
    }
}


