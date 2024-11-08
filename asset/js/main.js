let displayElm = document.getElementsByClassName('display')[0];
let timer = null;
let startButton = document.getElementsByClassName('startButton')[0];

startButton.addEventListener('click', function () {
    if (timer === null) {
        let seconds = 0;
        timer = setInterval(function () {
            seconds++;
            displayElm.innerText = seconds;
            console.log(seconds);
        }, 1000);
    }
});

let stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function () {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
});
