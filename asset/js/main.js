// alert('test');

// startButtonというclassが付いている要素のうち、
// 最初のものを取り出す
let startButton = document.getElementsByClassName('startButton')[0];

// 取り出したstartButtonに対してクリックイベントのリスナを仕掛ける
startButton.addEventListener('click', function() {
    // この行はクリックしたときに呼ばれる
    console.log('start');
});