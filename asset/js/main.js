function stopWatch() {
    // function addMessage(message) {
    //     let messageElm = document.createElement('div');
    //     let now = new Date();
    //     messageElm.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒 ' + message;
    //     messageElm.classList = ['message'];
    //     logElm.appendChild(messageElm);
    // }

    let displayElm = document.querySelector("div.display p");
    // let logElm = document.querySelector('.log');
    let timer = null;
    let seconds = 0;

    let startButton = document.getElementsByClassName('startButton')[0];
    startButton.addEventListener('click', function () {
        if (timer === null) {
            // let seconds = 0;
            timer = setInterval(function () {
                seconds++;
                displayElm.innerText = seconds;
                console.log(seconds);
            }, 1000);
            // addMessage('開始');
        }
    });

    let pauseButton = document.getElementsByClassName('pauseButton')[0];
    pauseButton.addEventListener('click', function () {
        clearInterval(timer);
        let KeepTime = seconds;
        console.log(KeepTime);
    });

    let stopButton = document.getElementsByClassName('stopButton')[0];
    stopButton.addEventListener('click', function () {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
            // addMessage('終了');
        }
    });

    // window.onbeforeunload = function (event) {
    //     event.preventDefault();
    //     event.returnValue = "";
    // };

}

stopWatch();

