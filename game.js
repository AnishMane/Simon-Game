var userClickedPattern = [];

var gamepattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

var level = 0;
$(".btn").keypress(function(){
    nextSequence();
    if(level)
    {
        $("h1").text("Level " + level);
    }
    level++;
});

function playSound(name){
        var audio = new Audio("sounds/" + name +".mp3");
        audio.play();
}

function animatePress(currentColour){

        $("#" + currentColour).addClass("pressed");
    
        setTimeout(function(){
            $("#" + currentColour).removeClass("pressed");
        }, 100);
}


function nextSequence()
{
    var randomNumber = Math.floor(Math.random()*4) ;
    var randomChosenColour = buttonColours[randomNumber];
    gamepattern.push(randomChosenColour);
    
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


    
}
