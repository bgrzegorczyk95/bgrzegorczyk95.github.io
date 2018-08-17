export default class Timer {
  constructor(distance) {
    this.distance = distance;
  }

  timerFn() {
    const time = document.querySelector('.timer');
    time.textContent = `Czas: ${this.distance}`;
    this.distance -= 1;

    if (this.distance < 0) {
      const endTime = document.querySelector('.end-time');

      document.querySelector('.timer').textContent = 'Czas: 0';
      endTime.classList.add('show');
    }
  }

  runTimer() {
    setInterval(() => {
      this.timerFn();
    }, 1000);
  }
}
