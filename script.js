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
let unmarked;
let marked;
const playerTurn = document.querySelectorAll('button');
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = inputPlayer1;
            getID = event.target.getAttribute('id');
            playerArray.push(Number(getID));
            takenArray.push(Number(getID));
            availableArray = array.filter(x => !takenArray.includes(x));
            // computer's move (after player's click)
                blockPlayer();
                console.log('takenArray: ' +takenArray);
                    if (playerArray.length < 2) {
                        mathRandom();
                    };
                console.log('player array: ' + playerArray);
                console.log('takenArray: ' + takenArray);
                console.log('available: '+ availableArray);
        });
    });
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
    for (let i = 0; i < winList.length; i++) {
        let combo = winList[i];
         marked = combo.filter(cell => playerArray.includes(cell));
        if (marked.length === 2) {
            unmarked = combo.filter(cell => !playerArray.includes(cell));
            takenArray.push(marked[0]);
            if (availableArray.includes(unmarked[0])) {
                takenArray.push(unmarked[0]);
                move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                return unmarked[0];
            },1000); //delay is in milliseconds 
            };
        };
    } ;
};
//determine winner/loser
