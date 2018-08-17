import Timer from './timer';

export default class Card extends Timer {
  constructor(distance, activeCards, gameResult, gamePairs, startTime) {
    super(distance);
    this.activeCards = activeCards;
    this.gameResult = gameResult;
    this.gamePairs = gamePairs;
    this.startTime = startTime;
  }

  cardColors(cardsBack) {
    this.cardsBack = cardsBack;

    const cardsColors = [];

    for (let i = 0; i < 8; i += 1) {
      const randColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
      cardsColors.push(randColor);
      cardsColors.push(randColor);
    }

    this.cardsBack.forEach((card) => {
      const position = Math.floor(Math.random() * cardsColors.length);
      card.style.background = cardsColors[position]; // eslint-disable-line no-param-reassign
      cardsColors.splice(position, 1);
    });
  }

  clickCard(activeCard) {
    this.activeCard = activeCard;

    if (this.activeCard === this.activeCards[0]) return;

    if (this.activeCards.length === 0) {
      this.activeCard.classList.add('flip');
      this.activeCards[0] = this.activeCard;
      return;
    }

    if (this.activeCards.length === 1) {
      this.activeCard.classList.add('flip');
      this.activeCards[1] = this.activeCard;

      const backColorFirst = document.querySelector(`.${this.activeCards[0].classList[1]} .back`);
      const backColorSecond = document.querySelector(`.${this.activeCards[1].classList[1]} .back`);

      setTimeout(() => {
        if (backColorFirst.style.background === backColorSecond.style.background) {
          this.activeCards[0].classList.add('off');
          this.activeCards[1].classList.add('off');
          this.gameResult.push('1');
        } else {
          this.activeCards[0].classList.remove('flip');
          this.activeCards[1].classList.remove('flip');
        }

        this.activeCards.length = 0;

        if (this.gameResult.length === this.gamePairs) {
          const endTime = new Date().getTime();
          const gameTime = (endTime - this.startTime) / 1000;

          alert(`Twoj wynik to: ${gameTime} sekund`); // eslint-disable-line no-alert
          window.location.reload();
        }
      }, 1000);
    }
  }

  timer() {
    super.runTimer();
  }
}
