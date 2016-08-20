
var wins = 0;
var losses = 0;
var totalScore = 0;
var diamond1 =  Math.round(Math.random()*12);
var diamond2 =  Math.round(Math.random()*12);
var gem =  Math.round(Math.random()*12);
var crystals = Math.round(Math.random()*12);
var randNum = Math.floor(Math.random() * 102) + 19;




 $(function(){
	
 	 $("#totalScoreBox").html(totalScore);
       $("#wins").html(wins);
      $("#rnBox").html(randNum);
      $("#losses").html(losses);

       $("#diamond1").on("click", function() {
      totalScore = totalScore + diamond1;
       $("#totalScoreBox").html(totalScore);
       });
		$("#gem").on("click", function() {
      totalScore = totalScore + gem;
      $("#totalScoreBox").html(totalScore);
      }); 
      $("#diamond2").on("click", function() {
      totalScore = totalScore + diamond2;
      $("#totalScoreBox").html(totalScore);
      });
      $("#crystals").on("click", function() {
      totalScore = totalScore + crystals;
      $("#totalScoreBox").html(totalScore);
  });  
 	


 	  $("#crystal, #gems, #diamond1, #diamond2").on('click', function(){
      if (totalScore == randNum){
        wins++;
      	reset();
        } else if( totalScore > randNum){
        losses++;
        reset ();
        }
    });
		});
 	  
 	
		function reset () {
        $('#totalScore').html("0");
       for (var i = 0; i < Things.length; i++) {
       	var numbers = [];

       	diamond2.push(Math.round(Math.random()*12);)
       }
    
        randNum = Math.floor((Math.random() * 102) + 19);
        

  };






