
let query = document.getElementById('search-weather').value;
if(query){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+query+'&APPID='+'c252c73aab29bec59ad61241d38d8981'+'&units='+'metric', {method:'get'})
        .then(response => {
            if(response.ok)
                return response.json();
            return Promise.reject('Weather Server responded ' + response.status)
        }).then(data=>{
        console.log(data);
    })
}
