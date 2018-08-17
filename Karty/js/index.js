import Card from './card';

class Game extends Card {
  init() {
    const gameContainer = document.querySelector('.game-container');
    for (let i = 0; i < 16; i += 1) {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('container', 'flip', `card_${i}`);
      gameContainer.appendChild(cardContainer);

      const cardFront = document.createElement('div');
      cardFront.classList.add('front');
      cardContainer.appendChild(cardFront);

      const cardBack = document.createElement('div');
      cardBack.classList.add('back');
      cardContainer.appendChild(cardBack);
    }

    let cardsBack = document.querySelectorAll('.back');
    cardsBack = [...cardsBack];

    let cards = document.querySelectorAll('.container');
    cards = [...cards];

    super.timer();
    super.cardColors(cardsBack);

    setTimeout(() => {
      cards.forEach((card) => {
        const activecard = card;
        card.classList.remove('flip');
        card.addEventListener('click', () => {
          super.clickCard(activecard);
        });
      });
    }, 1000);

    this.reload();
  }

  reload() {
    const okBtn = document.querySelector('.ok-btn');
    okBtn.addEventListener('click', () => {
      window.location.reload();
    });
  }
}

const game = new Game(45, [], [], 8, new Date().getTime());
game.init();
