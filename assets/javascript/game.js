// let HTML load first
$(document).ready(function () {

// create base variables
var wins = 0;
var loss = 0;
var score = 0;

// generate random number to strive for
var targetNo = Math.floor(Math.random()*50 + 1)

// console log targetNo to keep track of it
console.log(targetNo);

// display the targetNo in HTML
$("#score-calc").text(targetNo);

//empty array for numbers assigned to each crystal
var crystalArray = [];

// create a loop to push 4 random numbers between 1 and 50 into the crystalArray
for (i=0; i < 4; i++) {

    // function to generate random numbers for the crystals
    crystalArray.push(Math.floor(Math.random()*15 + 1));

}

// console log crystal array to assure the populating loop is functioning
console.log(crystalArray);

// assign random numbers to buttons

for ( j = 0; j < crystalArray.length; j++) {


}
$("#crys1").attr("data-number", crystalArray[0]);
$("#crys2")

// populate wins, losses, and total score in corresponding divs & spans
$("#win-no").text(wins);
$("#loss-no").text(loss);
$("#total-tally").text(score);

// make an on click event to return the value of the crystal clicked

$("button").on("click", function () {

    $("total-tally").text(val(this) + score);


});

// tally total score based on values assigned to crystals clicked

// tally wins if number is matched


// tally losses for when number is exceeded

//closing document.ready syntax
}); 