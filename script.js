const num = document.querySelector('#number')
let submit = document.querySelector('.submit')
const msg = document.querySelector('.msg')
const prevGuess = document.querySelector('.prevGuess')
const warn = document.querySelector('.warn')

const randomNum = Math.round(Math.random() * 1000)

let prevNum = []
// let totalGuess = 10

console.log(randomNum);

submit.addEventListener('click', function (e) {
    e.preventDefault()

    prevNum.push(num.value)

    numCheck();

    prevGuess.innerHTML = prevNum;

    endGame()

    emptyNumCheck()

    includeCheck()


})

function includeCheck() {
    if (prevNum.includes(prevNum[0])) {
        warn.innerHTML = "all clear"
    }
}

function emptyNumCheck() {
    if (num.value === "") {
        warn.innerHTML = "pls enter a number"
        msg.innerHTML = ''
        prevNum = []
    }
}

function endGame() {
    if (prevNum.length === 10) {
        alert(`gamer over.... the random number was ${randomNum}`)
        num.value = ''
        msg.innerHTML = ''
        prevNum = []
        prevGuess.innerHTML = prevNum
    }
}

function numCheck() {
    if (isNaN(num.value)) {
        alert("enter a valid number");
    } else if (num.value > randomNum) {
        msg.innerHTML = 'number is tooo high';
    } else if (num.value < randomNum) {
        msg.innerHTML = 'number is tooo low';
    } else {
        msg.innerHTML = 'you guessed it correct';
    }
}
