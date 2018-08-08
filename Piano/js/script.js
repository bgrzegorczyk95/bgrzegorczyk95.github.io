let sound;

const music = ['music/01.mp3', 'music/04.mp3', 'music/05.mp3','music/06.mp3', 'music/07.mp3', 'music/08.mp3', 'music/09.mp3', 'music/10.mp3', 'music/11.mp3', 'music/12.mp3', 'music/13.mp3'];

const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'j'];

const start = document.querySelector('.sound');

document.addEventListener('keydown', function(ev){
        for(let i = 0; i < keys.length; i++){
            if(ev.key === keys[i]){
                sound = new Audio();
                sound.src = music[keys.indexOf(ev.key)];
                sound.play();
                
                let button = document.querySelector("." + ev.key);
                button.classList.add('click');
            }
        }
})

document.addEventListener('keyup', function(ev){
        for(let i = 0; i < keys.length; i++){
            if(ev.key === keys[i]){                
                let button = document.querySelector("." + ev.key);
                button.classList.remove('click');
            }
        }
})