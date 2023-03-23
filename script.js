const winList = [[0, 1, 2], [3, 4, 5],
                 [6, 7, 8], [8, 4, 0],
                 [2, 4, 6], [0, 3, 6],
                 [1, 4, 7], [2, 5, 8]]
                 //combo list.
const array = [0,1,2,3,4,5,6,7,8];
let takenArray = [];
let availableArray = [];
let playerArray = [];
let computerArray = [];
let inputPlayer1 = "X";
let inputPlayer2 = "O";
let move;
let getID;
let randomMove;
let marked;
let aiMark;
// player's turn when clicked.
const playerTurn = document.querySelectorAll('button');
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = inputPlayer1;
            getID = event.target.getAttribute('id');
            playerArray.push(Number(getID));
            takenArray.push(Number(getID));
            availableArray = array.filter(x => !takenArray.includes(x));
            console.log('available: '+availableArray + ' end');
                blockPlayer();
                checkMark();
                console.log('player moves list: '+playerArray);
                console.log('taken cells: '+takenArray);
                console.log('marked: '+marked);
        });
    });
// computer's move check.
function checkAI() {
    console.log('ai array: ' + computerArray);
    document.querySelectorAll('button');
    availableArray = array.filter(x => !takenArray.includes(x));
    for (let i = 0; i < winList.length; i++) {
        let aiMove = winList[i];
        aiMark = aiMove.filter(cell => computerArray.includes(cell));
        if (aiMark.length === 3) {
            // Highlight winning combo.
            document.getElementById(aiMark[0]).style.color = "rgb(242, 51, 102)"; 
            document.getElementById(aiMark[1]).style.color = "rgb(242, 51, 102)";
            document.getElementById(aiMark[2]).style.color = "rgb(242, 51, 102)"; 
            // Shake animation.
            document.getElementById(aiMark[0]).style.animation = "shake 0.4s ease-out";
            document.getElementById(aiMark[1]).style.animation = "shake 0.4s ease-out";
            document.getElementById(aiMark[2]).style.animation = "shake 0.4s ease-out";
            availableArray = [];
            setTimeout(function() { // delay.
                aiWin();
            }, 800);
        };
    };
};
// computer to generate a random available move.
function mathRandom() {
    setTimeout(function() { //delay.
    document.querySelectorAll('button');
    randomMove = availableArray[Math.floor(Math.random()*availableArray.length)];
    move = document.getElementById(randomMove);
    move.textContent = inputPlayer2;
    takenArray.push(Number(randomMove));
    computerArray.push(Number(randomMove));
        checkAI();
    },700); //delay is in milliseconds 
};
//function to block player's winning combo.
function blockPlayer() {
    availableArray = array.filter(x => !takenArray.includes(x));
    for (let i = 0; i < winList.length; i++) {
        let combo = winList[i];
        marked = combo.filter(cell => playerArray.includes(cell));
        if (marked.length === 2) {
           let unmarked = combo.filter(cell => !playerArray.includes(cell));
            if (availableArray.includes(unmarked[0])) {
               let move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                    move.textContent = inputPlayer2;
                    takenArray.push(unmarked[0]);
                    computerArray.push(unmarked[0]);
                    checkAI();
                },1200); //delay is in milliseconds 
                    console.log('block move0: '+unmarked[0]);
                    return unmarked[0];
            }
            //Check if there are 2 winning possibilities.
            else if (availableArray.includes(unmarked[1])) {
                let move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                    move.textContent = inputPlayer2;
                    takenArray.push(unmarked[1]);
                    computerArray.push(unmarked[0]);
                        checkAI();
                    console.log('block move1: '+unmarked[1]);
                },2000); //delay is in milliseconds 
                    return unmarked[1];
            }
            //if there are, choose a single random outcome.
            else if (unmarked.length > 1) {
                let randomIndex = Math.floor(mathRandom()*unmarked.length);
                let randomCell = unmarked[randomIndex];
                let move = document.getElementById(randomCell);
                setTimeout(function(){//delay.
                    move.textContent = inputPlayer2;
                    takenArray.push(randomCell);
                    computerArray.push(randomCell);
                    checkAI();
                },2000); //delay is in milliseconds 
                    return unmarked[randomIndex];
            };
        }; // end marked length check.
        if (marked.length === 3) {
            availableArray = [];
            // Highlight winning combo.
            document.getElementById(marked[0]).style.color = "rgb(81, 223, 104)"; 
            document.getElementById(marked[1]).style.color = "rgb(81, 223, 104)";
            document.getElementById(marked[2]).style.color = "rgb(81, 223, 104)"; 
            // Shake animation.
            document.getElementById(marked[0]).style.animation = "shake 0.4s ease-out";
            document.getElementById(marked[1]).style.animation = "shake 0.4s ease-out";
            document.getElementById(marked[2]).style.animation = "shake 0.4s ease-out";
            setTimeout(function(){//delay.
                resetGame();
            },1000); //delay is in milliseconds 
        };
        if ((takenArray.length === array.length) && (marked.length < 2)) {
            availableArray = [];
            setTimeout(function(){
                drawGame();
            }, 800);
        }
        console.log('available: '+availableArray + ' end');      
    }; // end of winList for loop.
}; // end of block function.
function checkMark() {// if nothing to block, random move.
    if (marked.length < 2) { 
        mathRandom();
        return;
    };
};
// hide DOM results.
    document.getElementById("youWin").style.display = "none";
    document.getElementById("restart").style.display = "none";

// make results appear!
function resetGame() {
    document.getElementById("youWin").style.display = "inline-block";
    document.getElementById("youWin").innerHTML = "You win!";
    document.getElementById("restart").style.display = "inline-block";
    inputPlayer1 = "";
    inputPlayer2 = "";
};
// draw!
function drawGame() {
    document.getElementById("restart").style.display = "inline-block";
    document.getElementById("youWin").style.display = "inline-block";        
    document.getElementById("youWin").innerHTML = "Draw";      
// you lose!
};
function aiWin() {
    document.getElementById("restart").style.display = "inline-block";
    document.getElementById("youWin").style.display = "inline-block";        
    document.getElementById("youWin").innerHTML = "You lose :("; 
};