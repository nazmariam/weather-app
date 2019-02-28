import 'normalize.css'
import './sass/main.scss'
import './sass/_media.scss'
window.onload = () => {

    document.querySelector('.play').addEventListener('click', function () {
        let audio = document.getElementById("radio");
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        this.classList.toggle('active');
    });

    document.querySelector('.unit-swiсher').addEventListener('click', function (event) {
        event.preventDefault();
        this.classList.toggle('active');
    });
        const link = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const appId= 'c252c73aab29bec59ad61241d38d8981';
    let units = 'metric';

        function request(reqString){
            fetch(link+reqString+'&APPID='+appId+'&units='+units, {method:'get'})
                .then(response => {
                    if(response.ok)
                    return response.json();
                    return Promise.reject('Weather Server responded ' + response.status)
                }).then(data=>{
                    console.log(data);
            })
        }

        document.querySelector('.search-form').addEventListener('submit', function(event){
            let query = document.getElementById('search-weather').value;
            event.preventDefault();
            let swicher = document.getElementById('swicher');
            if(swicher.classList.contains('active')){
               units = 'imperial';
            }else{units = 'metric'}
            request(query);
        })





};



