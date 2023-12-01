buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
var level = 0;
var len;

var randomChosenColour;

$("body").on("keypress", function() {
  $("body").removeClass("game-over");
  $("h1").text("level :" + level);
  nextSequence();
});

$(".btn").on("click", function() {
  // console.log(this.id);

  userClickedPattern.push(this.id);

  playSound(this.id);
  animatePress(this.id);

  len = userClickedPattern.length;
  setTimeout(function () {

  }, 1000);
  checkAnswer(len - 1);
});



function nextSequence() {
  userClickedPattern=[];

  level++;
  $("#level-title").text("Level " + level);


  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("." + randomChosenColor).fadeIn().fadeOut().fadeIn();
  playSound(randomChosenColor);


}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(currentLevel) {

  console.log(userClickedPattern);
  console.log(gamePattern);
   if (gamePattern[currentLevel] == userClickedPattern[currentLevel])
   {
     console.log("success");
     if(gamePattern.length==userClickedPattern.length)
     {
       nextSequence();
     }
   }

  else{
    playSound("wrong");
    $("body").addClass("game-over");

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver()
{
  level = 0;
  gamePattern = [];

}
