const num = document.querySelector('#number')
let submit = document.querySelector('.submit')
const msg = document.querySelector('.msg')
const prevGuess = document.querySelector('.prevGuess')

const randomNum = Math.round(Math.random() * 1000)

let prevNum = []
// let totalGuess = 10

console.log(randomNum);

submit.addEventListener('click', function (e) {
    e.preventDefault()

    prevNum.push(Number(document.querySelector('input').value))

    numCheck();

    prevGuess.innerHTML = prevNum;

    endGame()

})

function endGame() {
    if (prevNum.length === 10) {
        alert(`gamer over.... the random number was ${randomNum}`)
        num.value = ''
        msg.innerHTML = ''
        prevNum = []
        prevGuess.innerHTML = prevNum
    }
}

// console.log(submit.value);

function numCheck() {
    if (isNaN(submit.value)) {
        alert("enter a valid number");
    } else if (num.value > randomNum) {
        msg.innerHTML = 'number is tooo high';
    } else if (num.value < randomNum) {
        msg.innerHTML = 'number is tooo low';
    } else {
        msg.innerHTML = 'you guessed it correct';
    }
}
