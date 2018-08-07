(function () {    
    const cardsColors = ['red', 'red', 'blue', 'blue', 'green', 'green', 'orange', 'orange', 'yellow', 'yellow', 'pink', 'pink', 'purple', 'purple', 'black', 'black'];
    
    const startTime = new Date().getTime();
    
    const okBtn = document.querySelector('.ok-btn');
    
    let cards = document.querySelectorAll('.flip-card');
    cards = [...cards];
    
    let activeCard = "";
    const activeCards = [];
    
    const gamePairs = cards.length/2;
    let gameResult = 0;
    
    let time;
    let score = 0;
    let distance = 45;
    
    const timer = function () {
            const time = document.querySelector('.timer');
            time.textContent = 'Czas: ' + distance;
            distance--;
            
            if(distance < 0) {
                const points = document.querySelector('.points');
                const endTime = document.querySelector('.end-time');
                document.querySelector('.timer').textContent = '0';
                points.textContent = score;
                endTime.classList.add('show');
            }
    };
    
    time = setInterval(timer, 1000);
    
    const clickCard = function () {
        activeCard = this;
                    
        
        if(activeCard === activeCards[0]) return;
        
        activeCard.classList.add('flip');
        
        if(activeCards.length === 0) {
            activeCards[0] = activeCard;
            return;
        } else {
            cards.forEach(function (card) {
                card.removeEventListener('click', clickCard);
            })
            activeCards[1] = activeCard;
            
            setTimeout(function () {
                if(activeCards[0].className === activeCards[1].className) {
                    activeCards.forEach(function (card) {
                        card.classList.add('off');
                    })
                    gameResult++;
                    score++;
                    
                    cards = cards.filter(card => !card.classList.contains('off'));
                    
                    if(gameResult === gamePairs) {
                        const endTime = new Date().getTime();
                        const gameTime = (endTime - startTime)/1000;
                        alert("Twoj wynik to: " + gameTime + " sekund");
                        location.reload();
                    }
                } 
                else {
                    activeCards.forEach(function (card) {
                        card.classList.remove('flip');
                    })
                }
                
                activeCard = "";
                activeCards.length = 0;
                cards.forEach(function (card) {
                    card.addEventListener('click', clickCard);
                })
                
            }, 1000);
        }
    };
    
    const init = function () {
        cards.forEach(function (card) {
            const position = Math.floor(Math.random() * cardsColors.length);
            card.classList.add(cardsColors[position]);
            cardsColors.splice(position, 1);
        })
    }
    
    setTimeout(function () {
        cards.forEach(function (card) {
            card.classList.remove('flip');
            card.addEventListener('click', clickCard);
        });
    }, 1000)
    
    okBtn.addEventListener('click', function () {
        location.reload();
    })
    
    init();
})();