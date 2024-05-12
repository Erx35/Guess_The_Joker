// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let img1 = document.getElementById("card1");
    let img2 = document.getElementById("card2");
    let img3 = document.getElementById("card3");
    let button = document.getElementById("start");


    img1.addEventListener("click", function() {
        alert("card1");
    }); 

    img2.addEventListener("click", function() {
        alert("card1");
    });

    img3.addEventListener("click", function() {
        alert("card1");
    });

    button.addEventListener("click", function() {
        alert("submit");
    }); 

    runGame("addition");

});

function runGame() {

}

function flipCard(card) {

}