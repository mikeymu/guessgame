/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber(),
    numGuess = 5,
    glyphLookup,
    difference;



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
  // add code here


  winningNumber = Math.floor((Math.random() * 100) + 1);
  return winningNumber
}

// Fetch the Players Guess
 function playersGuessSubmission() {
    var value = $( "#guess" ).val();
    if (numGuess<1) {
    $( "#hotOrCold" ).text("You are out of guesses, restart the game to try again.");
    }

    else if (value > 0 && value < 101 && value%1===0) { 
      console.log("valid number",value) 
      playersGuess = parseFloat(value);
      lowerOrHigher()
      numGuessLeft() 
      checkGuess()
      glyphs() 
      }

    else {
      $( "#hotOrCold" ).text("That is not a valid guess! Type in a whole number 1-100");
     }
    };


function numGuessLeft() {
  numGuess = numGuess-1;
  var string = "You have " + numGuess.toString() + " guesses left!"
  $( "#numGuess" ).text(string);
  if (numGuess ===0) {
    $("#hint").prop('disabled', true)
    $("#submitBtn").prop('disabled', true)
     string = " You lost. The winning number was " + winningNumber.toString()

    $( "#hotOrCold" ).text(string);
  }
    ;
$('button')


};




// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
  difference = Math.abs(playersGuess - winningNumber)
  
  if (difference > 50) {
    $( "#hotOrCold" ).text("Your guess is really cold.");
  } 
  
  else if (difference > 25)  {
    $( "#hotOrCold" ).text("Pretty close.");
  }

  else if (difference > 10) {
    $( "#hotOrCold" ).text("Oooh, you are getting really close.");
  }

  else if (difference > 1) {
    $( "#hotOrCold" ).text("Woooah alllllmost there");
  }

  console.log(difference)
};

// Check if the Player's Guess is the winning number 

function checkGuess(){
  // add code here
  if (difference === 0) {
   $( "#hotOrCold" ).text("WHAT?! YOU WON! YOU GOT IT!"); 
    $( "#numGuess" ).text("Restart to play again");
    $("#hint").prop('disabled', true) 
    $("#submitBtn").prop('disabled', true)
  } 

}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
  // add code here
  if (playersGuess > winningNumber) {  
    $( "#hotOrCold" ).text("Guess lower next time."); 
  }
  else {
   $( "#hotOrCold" ).text("Guess higher next time.");  
  }

}

// Allow the "Player" to Play Again

function playAgain(){
  // add code here
  numGuess = 5
  $( "#hotOrCold" ).text("Take your best shot. I'll tell you if you are getting warmer.");  
  $( "#numGuess" ).text("You have 5 guesses left!");
  $('#guess').val('');
  $("#guesslist").children("div").children("b").removeClass().addClass("glyphicon-minus glyphicon")
  $("#guesslist").children("div").children("p").text("")
  $("#hint").prop('disabled', false) 
  $("#submitBtn").prop('disabled', false)
  generateWinningNumber()


}


function glyphs() {
  var str = (numGuess+1)
  glyphLookup = "#guess" + str.toString()
  $(glyphLookup).children("p").text(playersGuess);
  
  if (difference ===0) {
    $(glyphLookup ).children("b").removeClass("glyphicon-minus").addClass("glyphicon-ok");
    }
  else {
    $(glyphLookup ).children("b").removeClass("glyphicon-minus").addClass("glyphicon-remove");
    }

};





function paulDano_select() {
  var image = $("#navbaricon")[0]
  image.src = "img/pauldano.png";
  console.log("paul dano");
}

function djKhalid_select() {
  var image = $("#navbaricon")[0]
  image.src ="img/djkhalid.png";
  console.log("dj khalid");
  console.log(image)
}





/* **** Event Listeners/Handlers ****  */
 $("#submitBtn").click( playersGuessSubmission );
 $("#hint").click( provideHint );
 $("#restart").click( playAgain );


$("#paulDano").click( paulDano_select );
$("#djKhalid").click( djKhalid_select );


