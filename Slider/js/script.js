const slider = document.querySelector('.box');

const images = ['img/zdj1', 'img/zdj2', 'img/zdj3', 'img/zdj4', 'img/zdj5'];
let i = 0;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', nextSlide);

prev.addEventListener('click', prevSlide);

function nextSlide(){
    if(i < images.length - 1){
        i += 1;
    }else{
        i = 0;
    }
    slider.innerHTML = "<img src = " + images[i] + ".jpg>";
};

function prevSlide(){
    if(i == 0){
        i = images.length - 1;
    }else {
        i--;
    }
    slider.innerHTML = "<img src = " + images[i] + ".jpg>";
};

setInterval(nextSlide, 5000);

let a = [1,2,'Number',4];
for(let i = 0; i < a.length; i++) {
    if(typeof a[i] == "number") {
      console.log(`Numery: ${a[i]}`);
    }
}