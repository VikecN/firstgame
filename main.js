var buttonColors = ['green', 'red', 'yellow', 'blue'];
var gamePattern = [];
var userPattern = [];
var level = 0;
var bestScore = 0;

$('body').keydown(function (e) { 
    if(level === 0){
        randomNumber();
    }
});

$('#rest').click( function(){
    if(level === 0){
        randomNumber();
    }
})

$('.btn').click(function() {
    var click = $(this).attr('id');
    //animationAndSound(click);
    userPattern.push(click);
    chackAnswer(userPattern.length - 1);
});

function chackAnswer(currentLevel) {

    if (userPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userPattern.length === gamePattern.length){
            if(level >= bestScore){
                bestScore = level;
                $('.bs').text('Best Score: ' + bestScore);
            }
            setTimeout(function(){
                randomNumber();
            },1000);
        }
    } else {
        restart();
        }
        
    }

function randomNumber(){
    userPattern = [];
    $('#level-title').text("Level: " + ++level);
    var numberGenerated = Math.floor(Math.random() * 4);
    //animationAndSound(buttonColors[numberGenerated]);
    gamePattern.push(buttonColors[numberGenerated]);
}
/*
function animationAndSound(button) {
    if(button === "rest"){}
    sound = new Audio(button + '.mp3');
    sound.play();
    $('#' + button).removeClass(button).addClass('.pressed');
    setTimeout(function() {
        $('#' + button).removeClass('.pressed').addClass(button);
    }, 100);
}
*/

function restart() {    
    $('body').addClass('game-over'); 
    animationAndSound('wrong');

    setTimeout(function(){
        $('body').removeClass('game-over'); 
    },200);
    $('#level-title').text("Play again.");
    $('.text-s-and-r').text("Restart");
    
    level = 0;
    gamePattern = [];
    userPattern = [];

}
