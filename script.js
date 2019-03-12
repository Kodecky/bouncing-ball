const blueBtn = document.querySelector('button.blue');
const greenBtn = document.querySelector('button.green');
const redBtn = document.querySelector('button.red');
const ball = document.querySelector('.ball');
const shadow = document.querySelector('.shadow');

blueBtn.addEventListener('click', function () {
    ball.classList.toggle('toggle');
    shadow.classList.toggle('toggle');
    this.classList.toggle('toggle');
    greenBtn.classList.toggle('toggle');
    redBtn.classList.toggle('toggle');
    document.querySelector('h1').classList.toggle('toggle');
    document.querySelector('.blueSpan').classList.toggle('change');
    document.querySelector('.blueSpanHide').classList.toggle('change');
})

greenBtn.addEventListener('click', function () {
    ball.classList.toggle('slowMo');
    shadow.classList.toggle('slowMo');
    document.querySelector('.greenSpan').classList.toggle('change');
    document.querySelector('.greenSpanHide').classList.toggle('change');
})

redBtn.addEventListener('click', function () {
    ball.classList.toggle('faster');
    shadow.classList.toggle('faster');
    this.classList.toggle('change');
})