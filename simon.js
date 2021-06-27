var userClickedPattern = [];

var gamePattern = [];


var level = 0;

var buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    $('h1').html('Level ' + ++level);
}

$(document).one("keydown", function() {
  nextSequence();
  $("h1").html("Level " + level);
});

function checkAnswer(currentLevel) {
  if(buttonColours[currentLevel] === gamePattern[userClickedPattern.length - 1]) {
    console.log('success');
  }
  else {
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over")
    }, 200);
    $('h1').html('Game Over, Press any key to restart.');
    // level = 0;
    $(document).one("keydown", function() {
      level = 0;
      gamePattern = [];
      userClickedPattern = [];
      nextSequence();
    //   nextSequence();
    //   userClickedPattern = [];
    //   $("h1").html("Level " + level);
    });
  }
  if(JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
    setTimeout(nextSequence, 1000);
    userClickedPattern = [];
  }


      // setTimeout(nextSequence, 1000);
      // userClickedPattern = [];

      // var wrong = new Audio('sounds/wrong.mp3');
      // wrong.play();
      // $("body").addClass("game-over");
      // setTimeout(function () {
      //   $("body").removeClass("game-over")
      // }, 200);

}

$(".btn").on("click", function (event) {
  var userChosenColour = this.id;
  playSound(this.id);
  animatePress(this.id);
  userClickedPattern.push(userChosenColour);
  switch (this.id) {
    case 'red':
      checkAnswer(0);
      break;
    case 'blue':
      checkAnswer(1);
      break;
    case 'green':
      checkAnswer(2);
      break;
    case 'yellow':
      checkAnswer(3);
      break;
    default:  console.log(this.id);
}
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

$(".rules-icon").on("click", function () {
  $('.rules').css('visibility', 'visible');
});

$('.close').on('click', function () {
  $('.rules').css('visibility', 'hidden');
});

// $(document).on("keydown", nextSequence);
