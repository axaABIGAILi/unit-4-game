// let HTML load first
$(document).ready(function () {

// create base variables
var wins = 0;
var loss = 0;
var score = 0;
var targetNo = 0;
var crystalArray = [];


// make a function for resetting the game
function gameReset () {
    crystalArray = [];
    $("#score-calc").empty();
    score = 0;
    // calculate target number
    targetNo = Math.floor(Math.random()*50 + 15);
    $("#score-calc").text(targetNo);

    for (var i = 0; i < 4; i++) {

        // loop to generate random numbers for the crystals
        crystalArray.push(Math.floor(Math.random()*15 + 1));
    
    }

    for ( var i = 0; i < crystalArray.length; i++) {
        // loop to assign array values to crystals
        $("#crys"+i).attr("data-value", crystalArray[i]);
    
    }

    // populate DOM with wins, losses, and scores
    $("#win-no").text(wins);
    $("#loss-no").text(loss);
    $("#total-tally").text(score);


}

// console log targetNo to keep track of it
console.log(targetNo);

// on click event 
$("button").on("click", function () {

    // how to refer to clicked value?
    score = score + parseInt($(this).attr("data-value"));

    console.log(this);
    console.log($(this).attr("data-value"));
    console.log(score);

    // add clicked value to score
    $("#total-tally").text(score);

// compare score to targetNo, create conditions to tally wins or losses depending on comparison
if (score === targetNo) {
    wins++;
    $("#win-no").text(wins);
    gameReset();

} else if (score > targetNo) {
    loss++;
    $("#loss-no").text(loss);
    gameReset();
} 

});

// reset game in event of win or loss
gameReset();

//closing document.ready syntax
}); 