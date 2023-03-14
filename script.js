const winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]
let array = [0,1,2,3,4,5,6,7,8];
let takenArray = [];
let availableArray = [];
let playerArray = [];
let inputPlayer1 = "X";
let inputPlayer2 = "O";
let move;
let getID;
let firstMove;
let winningChance;
let odd;
const playerTurn = document.querySelectorAll('button');
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = inputPlayer1;
            getID = event.target.getAttribute('id');
            playerArray.push(Number(getID));
            takenArray.push(Number(getID));
            availableArray = array.filter(x => !takenArray.includes(x));
            console.log('player array: ' + playerArray);
            // computer's move (after player's click)
                console.log('takenArray: ' +takenArray);
                    if (playerArray.length < 2) {
                        mathRandom();
                    };
                    blockPlayer();
        });
    });
    console.log('takenArray: ' + takenArray);
function mathRandom() {
    setTimeout(function(){ //delay.
    document.querySelectorAll('button');
    firstMove = availableArray[Math.floor(Math.random()*availableArray.length)];
    move = document.getElementById(firstMove);
    move.textContent = inputPlayer2;
    takenArray.push(Number(firstMove));
},1000); //delay is in milliseconds 
};
//function to block winning moves.
function blockPlayer() {
    availableArray = array.filter(x => !takenArray.includes(x));
    for (let i = 0; i < winList.length; i++) {
        let combo = winList[i];
        let marked = combo.filter(cell => playerArray.includes(cell));
        if (marked.length === 2) {
           let unmarked = combo.filter(cell => !playerArray.includes(cell));
            if (availableArray.includes(unmarked[0])) {
                takenArray.push(unmarked[0]);
               let move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                console.log('available: '+ availableArray);
                },1000); //delay is in milliseconds 
                    return unmarked[0];
            }
            //Check if there are 2 winning possibilities.
            else if (availableArray.includes(unmarked[1])) {
                takenArray.push(unmarked[1]);
                let move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                console.log('available: '+ availableArray);
                },1000); //delay is in milliseconds 
                    return unmarked[1];
            }
            //if there are, choose a single random outcome.
            else if (unmarked.length > 1) {
                let randomIndex = Math.floor(mathRandom()*unmarked.length);
                let randomCell = unmarked[randomIndex];
                takenArray.push(randomCell);
                let move = document.getElementById(randomCell);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                console.log('available: '+ availableArray);
                },1000); //delay is in milliseconds 
                    return unmarked[randonIndex];
            };
        };        
            if (marked.length === 3) {
                setTimeout(function(){//delay.
                alert('You won!');
                },1000); //delay is in milliseconds
            }
    };
};

//determine winner/loser
