document.addEventListener("DOMContentLoaded", function() {
    let img1 = document.getElementById("card1");
    let img2 = document.getElementById("card2");
    let img3 = document.getElementById("card3");
    let button = document.getElementById("start");
    let button2 = document.getElementById("resetScore");

    document.getElementById("right").innerText = 0;
    document.getElementById("wrong").innerText = 0;



    img1.addEventListener("click", function() {
        if (eventLock == 0) {
            flipCard("card1")
            eventLock = 1;
        }

    }); 

    img2.addEventListener("click", function() {
        if (eventLock == 0) {
            flipCard("card2")
            eventLock = 1;
        }
    });

    img3.addEventListener("click", function() {
        if (eventLock == 0) {
            flipCard("card3")
            eventLock = 1;
        }
    });

    button.addEventListener("click", function() {
        runGame();
        eventLock = 0;
    }); 

    button2.addEventListener("click", function() {
        document.getElementById("right").innerText = 0;
        document.getElementById("wrong").innerText = 0;
    }); 

 

});

//Answer global array
let cardArray = [0, 0, 0];

//Event cock global val
let eventLock = 0;

/**
 * This function runs the game, hides all the card faces and puts a random card to a joker value
 */
function runGame() {
    cardArray = [0, 0, 0];
    document.getElementById("card1").src = "assets/images/card_back_blue.png";
    document.getElementById("card2").src = "assets/images/card_back_blue.png";
    document.getElementById("card3").src = "assets/images/card_back_blue.png";


    randomJokerLocation = getRandomLocation();
    cardArray[randomJokerLocation] = 1;
}

/**
 * this function gets user input and compares it to the random card selection
 * If the guess is correct, adds one to right answers and if wrong adds one to 
 * wronf answers
 * @param {selected card} card 
 */
function flipCard(card) {
    let img1 = document.getElementById("card1");
    let img2 = document.getElementById("card2");
    let img3 = document.getElementById("card3");

    let answer = [0, 0, 0];
    if (card === "card1") {
        answer = [1, 0, 0];
    }
    else if (card === "card2") {
        answer = [0, 1, 0];
    }
    else if (card === "card3") {
        answer = [0, 0, 1];
    }
    
    for (let i = 0; i < 3 ; i++) {
        if (i === 0) {
            if ( cardArray[0] === 1){
                document.getElementById("card1").src = "assets/images/joker.png";
            }
            else if ( cardArray[0] === 0) {
                document.getElementById("card1").src = "assets/images/2_clugb.png";
            }
        }
        else if (i === 1) {
            if ( cardArray[1] === 1){
                document.getElementById("card2").src = "assets/images/joker.png";
             }
            else if ( cardArray[1] === 0){
                document.getElementById("card2").src = "assets/images/2_clugb.png";
            }
        }
        else if ((i === 2)) {
            if ( cardArray[2] === 1){
                document.getElementById("card3").src = "assets/images/joker.png";
            }
            else if ( cardArray[2] === 0){
                document.getElementById("card3").src = "assets/images/2_clugb.png";
            }
        }
    }
    if (checkAnswer(card)) {
        right.innerText++;
    }
    else {
        wrong.innerText++;
    }


}

/**
 * Get a random number from 0 to 2 for joker location
 * @returns an array index for the joker position
 */
function getRandomLocation() {
    let num = Math.floor(Math.random() * 3);
    return num;
}


/**
 * This function takes in player card selection and returnd the result od the choice
 * @param {player selection} playerGuess 
 * @returns pass or fail for the guess
 */
function checkAnswer(playerGuess) {
    if (playerGuess === "card1") {
        if (cardArray[0] === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (playerGuess === "card2"){
        if (cardArray[1] === 1) {
            return true;
        }
        else {
            return false;
        }
        
    }
    else if (playerGuess === "card3"){
        if (cardArray[2] === 1) {
            return true;
        }
        else {
            return false;
        }
        
    }
}