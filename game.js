var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var randomNumber = Math.floor(Math.random()*4);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

$("#"+randomChosenColor).animate({opacity: 0.5}).fadeOut(100).fadeIn(100).animate({opacity: 1});


// var audio = new Audio("sounds/"+ randomChosenColor +".mp3");
// audio.play();

// $(".btn").on("click", function() {
//     var userChosenColor = this.attr("id");
//     console.log(userChosenColor);
// });



/*
switch (randomChosenColor) {
    case "red":
        var red = new Audio("sounds/red.mp3");
        red.play();
        break;

    case "blue":
        var blue = new Audio("sounds/blue.mp3");
        blue.play();
        
        break;
    
    case "green":
        var green = new Audio("sounds/green.mp3");
        green.play();
        break;
        
    case "yellow":
        var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
        break;

    default:
        break;
} */