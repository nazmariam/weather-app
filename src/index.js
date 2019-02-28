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
    })
};



