const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
        document.querySelector('.page-header').classList.toggle('nav-opened');
},false);

let trigger = document.querySelectorAll('.navigation-menu li');

trigger = [...trigger];

const scrollTab = ["#home","#about","#services","#gallery","#contact"];

for(let i = 0; i < trigger.length; i++) {
        let target = document.querySelector(scrollTab[i]);
        trigger[i].addEventListener('click', scrollToDiv = (e) => {
                e.preventDefault()
                target.scrollIntoView({ behavior: 'smooth', block: "start" })
        });
}