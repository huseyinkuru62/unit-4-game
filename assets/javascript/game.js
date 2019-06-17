var redNum = Math.floor(Math.random() * 12) + 1;
var blueNum = Math.floor(Math.random() * 12) + 1;
var yellowNum = Math.floor(Math.random() * 12) + 1;
var greenNum = Math.floor(Math.random() * 12) + 1;

function sumScore(currentNum, sumNum) {
    var total = parseInt(currentNum) + parseInt(sumNum);
    return total;
}

function setCrystals() {
    redNum = Math.floor(Math.random() * 12) + 1;
    blueNum = Math.floor(Math.random() * 12) + 1;
    yellowNum = Math.floor(Math.random() * 12) + 1;
    greenNum = Math.floor(Math.random() * 12) + 1;
}

$(function () {
    var score = 0;
    var winNum = Math.floor(Math.random() * (120 - 19) ) + 19;
    var winCount = $('#winCount');
    var lossCount = $('#lossCount');
    var info = $('#info');

    $('#randomNum').text(winNum);

    $('.crystals').on('click', function () {
        var findId = this.id;
        var crystalNum = eval(findId + 'Num');
        var currentScore = $('#score').text();
        score = sumScore(currentScore, crystalNum);
        $('#score').text(score);
        if (score == winNum) {
            info.text('You win!');
            $('#score').text("0");
            winNum = Math.floor(Math.random() * (100 - 20) ) + 20;
            $('#randomNum').text(winNum);
            setCrystals();
            winCount.text(sumScore(winCount.text(), 1));
        } else if (score > winNum) {
            info.text('You lost!');
            $('#score').text("0");
            winNum = Math.floor(Math.random() * (100 - 20) ) + 20;
            $('#randomNum').text(winNum);
            setCrystals();
            lossCount.text(sumScore(lossCount.text(), 1));
        }
    });
});