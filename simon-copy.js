var userClickedPattern = [];

var gamePattern = [];


function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var buttonColours = ['red', 'blue', 'green', 'yellow'];

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour).on("click", function () {
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
  });

  var level = 0;
  $("h1").html("Level " + level++);
}



$(".btn").on("click", function (event) {
  var userChosenColour = this.id;
  playSound(this.id);
  animatePress(this.id)
  userClickedPattern.push(userChosenColour);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed")
  }, 100);
}

// $(document).on("keydown", nextSequence);
