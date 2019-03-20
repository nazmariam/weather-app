import Component from "../../framework/Component";
import {addToStorage, removeFromStorage} from "../../utils/helpers";

export default class Liked extends  Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        let like = document.getElementById('like');
        document.querySelector('.top-panel-content').addEventListener('click',function (e) {
            let elem = e.target;
            if(elem.classList.contains('remove')){
                removeFromStorage(elem.parentNode.textContent.trim(),'likedStorage');
                elem.parentNode.remove();
            }
            if(elem.classList.contains('liked-item')){
                document.getElementById('search-weather').value=elem.textContent.trim();
                document.querySelector('.search-button').click();
            }
        });

        like.addEventListener('click', function(e) {
            let city = document.getElementById('search-weather').value;
            addToStorage(city,'likedStorage');
            if(document.querySelector('.liked-item')){
                if(document.querySelector('.liked-item').classList.contains('special')){
                    let newItem = document.createElement('div');
                    newItem.classList.add('liked-item');
                    newItem.innerHTML=city+'<span class="remove"></span>';
                    document.querySelector('.liked-item').parentNode.appendChild(newItem);
                }
            }
        });
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


