
var wins = 0;
var losses = 0;

var totalScore = 0;
// simply just initalizes variables to be declared later
var crystal1;
var crystal2; 
var crystal3;
var crystal4; 
var randNum;
var newSpan;

var counter = 0;
var startGame = false;


$(document).ready(function(){

  // starts the game by calling functions
  $("#startButton").on("click" , function(){
    if (!startGame) {
       startGame = true;
          makeButtons();
         makeNumber();
          collected();
          counter++;
          console.log("counter:"+ counter)
          }
  });

// declares the aforementioned variables
function makeNumber(){ 

 crystal1 = Math.round(Math.random()*12);
 crystal2 = Math.round(Math.random()*12);
 crystal3 = Math.round(Math.random()*12);
 crystal4 = Math.round(Math.random()*12);
 console.log("cr1-" + crystal1);
 console.log("cr2-" + crystal2);
 console.log("cr3-" + crystal3);
 console.log("cr4-" + crystal4);
 console.log(totalScore);
// random number to be matched
 randNum = Math.floor(Math.random() * 102) + 19;

// appends the random number of crystal to collect
newSpan2 = $('<span>');
$(newSpan2).html(" " + randNum);
$("#toCollect").append(newSpan2);

}
 

// creates a new span, makes its html == to total collected and appends it
function collected(){ 
  
newSpan = $('<span>');
$(newSpan).html(" " + totalScore);
$("#crystalCollected").append(newSpan);

}


// creates onclick events for each crystal and ties numbers in had to use /counter since the amount of crystal grew by each click of play game button
function makeButtons(){
  if (startGame) {
  $("#crystal1").on("click", function(){
    totalScore += (crystal1/counter);
    $(newSpan).html(" " + totalScore);
    winLose();
  });
  
   $("#crystal2").on("click", function(){
    totalScore += (crystal2/counter);
    $(newSpan).html(" " + totalScore);
    winLose();
  });
  
   $("#crystal3").on("click", function(){
    totalScore += (crystal3/counter);
    $(newSpan).html(" " + totalScore);
    winLose();
  });

 $("#crystal4").on("click", function(){
    totalScore += (crystal4/counter);
    $(newSpan).html(" " + totalScore);
    winLose();
  
  });
}}

// evaluates win/lose condition
    function winLose(){
      if (totalScore == randNum){
        wins++;
        alert("you win!");
        reset();
        } else if( totalScore > randNum){
        losses++;
        alert("you lose!");
        reset();
        }
    };
  
    
  
    function reset () {
        
        $(newSpan).remove();
        $(newSpan2).remove();
        $("#gameChange").html("Play Again?");
      
       totalScore = 0;
       console.log(totalScore);
       startGame = false;
       console.log();
       makeButtons();
        };



});


