/* DOM setup*/

document.addEventListener("DOMContentLoaded", function() {
    //Get the references to the elements to set up event listeners
    let img1 = document.getElementById("card1");
    let img2 = document.getElementById("card2");
    let img3 = document.getElementById("card3");
    let button = document.getElementById("start");
    let button2 = document.getElementById("resetScore");

    // Clear previous play data
    document.getElementById("right").innerText = 0; 
    document.getElementById("wrong").innerText = 0;

    //Add event listeners to card
    img1.addEventListener("click", function() {
        if (eventLock == 0) {
            flipCard("card1");
            eventLock = 1;
        }

    });

    //Add event listeners to card
    img2.addEventListener("click", function() {
        if (eventLock == 0) {
            flipCard("card2");
            eventLock = 1;
        }
    });

    //Add event listeners to card
    img3.addEventListener("click", function() {
        if (eventLock == 0) {
            flipCard("card3");
            eventLock = 1;
        }
    });

    //Add event listeners to a button
    button.addEventListener("click", function() {
        runGame();
        eventLock = 0;
    }); 
    //Add event listeners to a button
    button2.addEventListener("click", function() {
        document.getElementById("right").innerText = 0;
        document.getElementById("wrong").innerText = 0;
    }); 

 });

//Answer global array
let cardArray = [0, 0, 0];

//Event cock global val
let eventLock = 1;

/**
 * This function runs the game, hides all the card faces and puts a random card to a joker value
 */
function runGame() {
    cardArray = [0, 0, 0];
    //Insert beneric card image to the card slot
    document.getElementById("card1").src = "assets/images/card_back_blue.webp";
    document.getElementById("card2").src = "assets/images/card_back_blue.webp";
    document.getElementById("card3").src = "assets/images/card_back_blue.webp";
    
    //Get a random number for joker location
    randomJokerLocation = getRandomLocation();
    //Enter the location to the card array
    cardArray[randomJokerLocation] = 1;
}

/**
 * this function gets user input and compares it to the random card selection
 * If the guess is correct, adds one to right answers and if wrong adds one to 
 * wronf answers
 * @param {selected card} card 
 */
function flipCard(card) {
    //Array variable to hold the card string litterals
    const cards = [`card1`, `card2`, `card3`];
    //Get element references for result boxes
    let right = document.getElementById("right");
    let wrong = document.getElementById("wrong");

    //Turn over the cards and shot the game results
    let i = 0;
    //Scan througth card array and place apropriate images for joker and 2 of clubs
    for (let card in cards) {
        if ( cardArray[i] === 1){
            // If the selected card location was jokers location, insert joker picture
            document.getElementById(cards[card]).src = "assets/images/joker.webp";
        }
        else if ( cardArray[i] === 0) {
            // If the selected card location was not jokers location, insert 2 of clubs picture
            document.getElementById(cards[card]).src = "assets/images/2_clugb.webp";
        }
        i++;
    }

    if (checkAnswer(card)) {
        right.innerText++; //Check if the guess was correct and add one to right if guess was correct
    }
    else {
        wrong.innerText++;     //Check if the guess was correct and add one to wrong if guess was incorrect
    }
    //Change the start button name to re-start 
    document.getElementById("start").innerText = "Restart";


}

/**
 * Get a random number from 0 to 2 for joker location
 * @returns an array index for the joker position
 */
function getRandomLocation() {
    //Get a random number from 0 to 2
    let num = Math.floor(Math.random() * 3);
    //Return the result
    return num;
}


/**
 * This function takes in player card selection and returnd the result od the choice
 * @param {player selection} playerGuess 
 * @returns pass or fail for the guess
 */
function checkAnswer(playerGuess) {
    //Check if the guessed card was correct
    if (playerGuess === "card1") {
        if (cardArray[0] === 1) {
            return true; //If card one was selected and the joker was there and return true
        }
        else {
            return false; //If card one was selected and the joker was not there and return fals
        }
    }
    else if (playerGuess === "card2"){
        if (cardArray[1] === 1) {
            return true; //If card two was selected and the joker was there and return true
        }
        else {
            return false; //If card otwone was selected and the joker was not there and return fals
        }
        
    }
    else if (playerGuess === "card3"){
        if (cardArray[2] === 1) {
            return true; //If card three was selected and the joker was there and return true
        }
        else {
            return false; //If card three was selected and the joker was not there and return fals
        }
        
    }
}

