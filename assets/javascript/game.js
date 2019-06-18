// let HTML load first
$(document).ready(function () {

// create base variables
var wins = 0;
var loss = 0;
var score = 0;
var targetNo = 0;
var crystalArray = [];


// make a function for resetting the game ?
function gameReset () {
    crystalArray = [];
    $("#score-calc").empty();
    score = 0;
    targetNo = Math.floor(Math.random()*75 + 1);
    $("#score-calc").text(targetNo);

    for (var i = 0; i < 4; i++) {

        // function to generate random numbers for the crystals
        crystalArray.push(Math.floor(Math.random()*15 + 1));
    
    }

    for ( var i = 0; i < crystalArray.length; i++) {
        $("#crys"+i).attr("data-value", crystalArray[i]);
    
    }

    $("#win-no").text(wins);
    $("#loss-no").text(loss);
    $("#total-tally").text(score);


}

// console log targetNo to keep track of it
console.log(targetNo);

// display the targetNo in HTML
//$("#score-calc").text(targetNo);


// function to assign random numbers to buttons
//for ( j = 0; j < crystalArray.length; j++) {}

// populate wins, losses, and total score in corresponding divs & spans


// make an on click event to return the value of the crystal clicked

// function to convert click into text

$("button").on("click", function () {

    // how to refer to clicked value?
    score = score + parseInt($(this).attr("data-value"));

    console.log(this);
    console.log($(this).attr("data-value"));
    console.log(score);

    // add clicked value to score
    $("#total-tally").text(score);

    // tally wins if number is matched
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

gameReset();





//closing document.ready syntax
}); 