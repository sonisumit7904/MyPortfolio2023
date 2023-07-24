var gamePattern = [];
var userPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gamestarted = false;
var lvl = 0;
function nextSequence() {
    userPattern = [];
    lvl++;
    $("h1").text("Level " + lvl);
    var r = Math.round(Math.random() * 3);
    var randomChosenColor = buttonColors[r];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    playSound(randomChosenColor);
    randomAnimation(randomChosenColor);
}
$("body").keypress(function () {
    if (!gamestarted) {
        nextSequence();
        gamestarted = true;
    }
});
$("h1").click(function () {
    if (!gamestarted) {
        nextSequence();
        gamestarted = true;
    }
});
function gameover() {
    gamestarted = false;
    lvl = 0;
    $("h1").text("Game Over, THIS-TEXT to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    var aud = new Audio("sounds/wrong.mp3");
    aud.play();
    userPattern = [];
    gamePattern = [];
}
function check(Lastindex) {
    if (gamePattern[Lastindex] == userPattern[Lastindex]) {
        console.log("success");
        if (gamePattern.length == userPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("failure");
        gameover();
    }
}
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    pressAnimation(userChosenColor);
    console.log(userPattern);
    check(userPattern.length - 1);
});
function randomAnimation(name) {
    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);
}
function pressAnimation(name) {
    $("#" + name).addClass("pressed");
    setTimeout(function () {
        $("#" + name).removeClass("pressed");
    }, 100);
}
function playSound(name) {
    var src = "sounds/" + name + ".mp3";
    var aud = new Audio(src);
    aud.play();
}