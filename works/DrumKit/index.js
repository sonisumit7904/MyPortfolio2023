var numOfDrumButtons = document.querySelectorAll(".drum").length;

function makeSound(buttonpressed){
    var audio;
    buttonAnimation(buttonpressed);
    console.log(buttonpressed + " is selected!");
    switch (buttonpressed) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
    
        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
    
        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
    
        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
    
        case "j":
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
    
        case "k":
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
    
        case "l":
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    
        default:
            break;
}
}
// Button Clicked!
for (var i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonpressed = this.innerHTML;
        console.log(buttonpressed+" is clicked!")
        makeSound(buttonpressed);

    }
    ) 
}
// Keyboard Pressed!
document.addEventListener("keypress", function (event) {
    var buttonpressed = event.key;
    buttonpressed.toLowerCase();
    console.log(event.key+" is Pressed!");
    var classname="."+event.key;
    makeSound(buttonpressed);
}
);

function buttonAnimation(buttonpressed) {
    var activeButton=document.querySelector("."+buttonpressed);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
