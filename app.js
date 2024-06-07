const squares = document.querySelectorAll(".square");
const icons = document.querySelectorAll(".square .icon");
const textDisplay = document.querySelector(".title-text");
let currentPlayer = 1;
let gameOver = false;


squares.forEach( square => { //add an event listener for playSquare to each square

    square.addEventListener("click", playSquare)
    console.log(`Added event listener to square`);
})

function playSquare() {

    const squareId = this.getAttribute("data-id");
    console.log(`You clicked on square ${squareId}!`);

    const innerIcon = this.querySelector(".icon"); 
    
    if (innerIcon.classList.contains("player-1") || innerIcon.classList.contains("player-2")) { //prevent squares already owned from being played

        alert("You can't select this square!")
        return;
    }
    let currPlayerString = `player-${currentPlayer}`;
    innerIcon.classList.add(currPlayerString); //set the player who owns this square
    if (currentPlayer == 1) { //switch player
        currentPlayer = 2;
        textDisplay.textContent = "Player 2's turn...";
    }
    else {
        currentPlayer = 1;
        textDisplay.textContent = "Player 1's turn...";
    }

    checkWins();
    checkGameOver();
    
}


function checkWins() { //check the board for wins

    //check for Player 1 wins
    let iconArray = Array.from(icons);
    
    //check for horizontal wins
    if (iconArray[0].classList.contains("player-1") &&
        iconArray[1].classList.contains("player-1") &&
        iconArray[2].classList.contains("player-1")) {
            textDisplay.textContent = "Player 1 Wins!";
            gameOver = true;
            return;
        }
    else if (iconArray[3].classList.contains("player-1") &&
             iconArray[4].classList.contains("player-1") &&
             iconArray[5].classList.contains("player-1")) {
                textDisplay.textContent = "Player 1 Wins!";
                gameOver = true;
                return;
    }
    else if (iconArray[6].classList.contains("player-1") &&
             iconArray[7].classList.contains("player-1") &&
             iconArray[8].classList.contains("player-1")) {
                textDisplay.textContent = "Player 1 Wins!";
                gameOver = true;
                return;
    }
    //check for vertical wins
    if (iconArray[0].classList.contains("player-1") &&
        iconArray[3].classList.contains("player-1") &&
        iconArray[6].classList.contains("player-1")) {
            textDisplay.textContent = "Player 1 Wins!";
            gameOver = true;
            return;
        }
    else if (iconArray[1].classList.contains("player-1") &&
             iconArray[4].classList.contains("player-1") &&
             iconArray[7].classList.contains("player-1")) {
                textDisplay.textContent = "Player 1 Wins!";
                gameOver = true;
                return;
    }
    else if (iconArray[2].classList.contains("player-1") &&
             iconArray[5].classList.contains("player-1") &&
             iconArray[8].classList.contains("player-1")) {
                textDisplay.textContent = "Player 1 Wins!";
                gameOver = true;
                return;
    }
    //check for diagonal wins
    if (iconArray[0].classList.contains("player-1") &&
        iconArray[4].classList.contains("player-1") &&
        iconArray[8].classList.contains("player-1")) {
            textDisplay.textContent = "Player 1 Wins!";
            gameOver = true;
            return;
        }
    else if (iconArray[2].classList.contains("player-1") &&
             iconArray[4].classList.contains("player-1") &&
             iconArray[6].classList.contains("player-1")) {
                textDisplay.textContent = "Player 1 Wins!";
                gameOver = true;
                return;
    }

    //check for player 2 wins

    //check for horizontal wins
    if (iconArray[0].classList.contains("player-2") &&
        iconArray[1].classList.contains("player-2") &&
        iconArray[2].classList.contains("player-2")) {
            textDisplay.textContent = "Player 2 Wins!";
            gameOver = true;
            return;
        }
    else if (iconArray[3].classList.contains("player-2") &&
             iconArray[4].classList.contains("player-2") &&
             iconArray[5].classList.contains("player-2")) {
                textDisplay.textContent = "Player 2 Wins!";
                gameOver = true;
                return;
    }
    else if (iconArray[6].classList.contains("player-2") &&
             iconArray[7].classList.contains("player-2") &&
             iconArray[8].classList.contains("player-2")) {
                textDisplay.textContent = "Player 2 Wins!";
                gameOver = true;
                return;
    }
    //check for vertical wins
    if (iconArray[0].classList.contains("player-2") &&
        iconArray[3].classList.contains("player-2") &&
        iconArray[6].classList.contains("player-2")) {
            textDisplay.textContent = "Player 2 Wins!";
            gameOver = true;
            return;
        }
    else if (iconArray[1].classList.contains("player-2") &&
             iconArray[4].classList.contains("player-2") &&
             iconArray[7].classList.contains("player-2")) {
                textDisplay.textContent = "Player 2 Wins!";
                gameOver = true;
                return;
    }
    else if (iconArray[2].classList.contains("player-2") &&
             iconArray[5].classList.contains("player-2") &&
             iconArray[8].classList.contains("player-2")) {
                textDisplay.textContent = "Player 2 Wins!";
                gameOver = true;
                return;
    }
    //check for diagonal wins
    if (iconArray[0].classList.contains("player-2") &&
        iconArray[4].classList.contains("player-2") &&
        iconArray[8].classList.contains("player-2")) {
            textDisplay.textContent = "Player 2 Wins!";
            gameOver = true;
            return;
        }
    else if (iconArray[2].classList.contains("player-2") &&
             iconArray[4].classList.contains("player-2") &&
             iconArray[6].classList.contains("player-2")) {
                textDisplay.textContent = "Player 2 Wins!";
                gameOver = true;
                return;
    }
}

function checkGameOver() { //if a game is over, ends game, otherwise checks if every square is filled

    if (gameOver) {

        endGame();
    }
    else {
        console.log("Checking gameOver");
        let iconsArray = Array.from(icons);
        let allSquaresFilled = true;
        for (let i = 0; i < iconsArray.length; i++) {

            if (!(iconsArray[i].classList.contains("player-1")) && !(iconsArray[i].classList.contains("player-2"))) {
                allSquaresFilled = false;
                console.log("All squares are NOT yet filled!");
                break;
            }
        }

        if (allSquaresFilled) {
            endGame();
            textDisplay.textContent = "It's a tie!";        
        }
    }
}

function endGame() {

    squares.forEach( square => {

        square.removeEventListener("click", playSquare);
    } )
}
