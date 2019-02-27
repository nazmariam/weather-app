import 'normalize.css'
import './sass/main.scss'

window.onload = () => {
    document.querySelector('.play').addEventListener('click', function () {
        let audio = document.getElementById("radio");
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

        this.classList.toggle('active');
    })
};



