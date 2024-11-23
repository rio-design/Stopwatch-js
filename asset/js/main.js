function addMessage(message) {
    let messageElm = document.createElement('div');
    let now = new Date();
    messageElm.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒 ' + message;
    messageElm.classList = ['message'];
    logElm.appendChild(messageElm);
}


let displayElm = document.getElementsByClassName('display')[0];
let logElm = document.querySelector('.log');
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

        // スタートボタンを押す度に「開始」と表示
        addMessage('開始');
    }
});

let stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function () {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;

        // スタートボタンを押す度に「終了」と表示
        addMessage('終了');
    }
});
