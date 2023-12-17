const num = document.querySelector('#number')
const submit = document.querySelector('.submit')
const msg = document.querySelector('.msg')

const randomNum = Math.round(Math.random() * 100)

const prevNum = []

console.log(randomNum);

submit.addEventListener('click', function (e) {
    e.preventDefault()

    // prevNum.push(Number(submit.value))
    // console.log(prevNum);
    console.log(submit.value);

    numCheck();

    // rand/omNum.ad

})

console.log(submit.value);

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
