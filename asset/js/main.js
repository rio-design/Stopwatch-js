// alert('test');

// カウントしている数字をディスプレイに表示
let displayElm = document.getElementsByClassName('display')[0];
// startButtonというclassが付いている要素のうち、
// 最初のものを取り出す
let startButton = document.getElementsByClassName('startButton')[0];

// 取り出したstartButtonに対してクリックイベントのリスナを仕掛ける
startButton.addEventListener('click', function () {
    // この行はクリックしたときに呼ばれる
    console.log('start');

    // スタートボタンをクリックでコンソールに数字をカウント
    let seconds = 0;
    setInterval(function () {
        seconds++;
        
        displayElm.innerText = seconds;
        console.log(seconds);
    }, 1000);
});
