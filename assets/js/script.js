// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let img1 = document.getElementById("card1");
    let img2 = document.getElementById("card2");
    let img3 = document.getElementById("card3");
    let button = document.getElementById("start");
    let button2 = document.getElementById("resetScore");

    document.getElementById("right").innerText = 0;
    document.getElementById("wrong").innerText = 0;



    img1.addEventListener("click", function() {
        if (document.getElementById("card1").src == "https://erx35.github.io/Guess_The_Joker//assets/images/card_back_blue.png") {
            flipCard("card1")
        }

    }); 

    img2.addEventListener("click", function() {
        if (document.getElementById("card1").src == "https://erx35.github.io/Guess_The_Joker//assets/images/card_back_blue.png") {
            flipCard("card2")
        }
    });

    img3.addEventListener("click", function() {
        if (document.getElementById("card1").src == "https://erx35.github.io/Guess_The_Joker//assets/images/card_back_blue.png") {
            flipCard("card3")
        }
    });

    button.addEventListener("click", function() {
        runGame();
    }); 

    button2.addEventListener("click", function() {
        document.getElementById("right").innerText = 0;
        document.getElementById("wrong").innerText = 0;
    }); 

 

});

let cardArray = [0, 0, 0];

function runGame() {
    cardArray = [0, 0, 0];
    document.getElementById("card1").src = "assets/images/card_back_blue.png";
    document.getElementById("card2").src = "assets/images/card_back_blue.png";
    document.getElementById("card3").src = "assets/images/card_back_blue.png";


    randomJokerLocation = getRandomLocation();
    cardArray[randomJokerLocation] = 1;
}

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
    if (answer[0] === cardArray[0] & answer[1] === cardArray[1] & answer[2] === cardArray[2]) {
        right.innerText++;
    }
    else {
        wrong.innerText++;
    }


}

function getRandomLocation() {
    let num = Math.floor(Math.random() * 3);
    return num;
}

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