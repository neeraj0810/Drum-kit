var numberOfButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        sound(this.innerHTML);
        pressedKey(this.innerHTML);
    });
}


document.addEventListener("keypress", function(event) {
    sound(event.key);
    pressedKey(event.key);
});

function sound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "s":
            var audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case "d":
            var audio = new Audio("./sounds/snare.mp3");
            break;

        case "f":
            var audio = new Audio("./sounds/tom-1.mp3");
            break;

        case "g":
            var audio = new Audio("./sounds/tom-2.mp3");
            break;

        case "h":
            var audio = new Audio("./sounds/tom-3.mp3");
            break;

        case "j":
            var audio = new Audio("./sounds/tom-4.mp3");
            break;
    }
    audio.play();
}

function pressedKey(key) {
    $("." + key).addClass("pressed");

    setTimeout(function() {
        $("." + key).removeClass("pressed");
    }, 500);
}