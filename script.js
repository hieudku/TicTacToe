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
const oddArray = [
    [1, 3],
    [3, 7],
    [5, 7],
    [1, 5],
    [0, 5],
    [0, 7],
    [5, 6],
    [1, 8],
    [3, 8]
]
const array = [0,1,2,3,4,5,6,7,8];
let takenArray = [];
let availableArray = [];
let playerArray = [];
let inputPlayer1 = "X";
let inputPlayer2 = "O";
let move;
let getID;
let firstMove;
let marked;
const playerTurn = document.querySelectorAll('button');
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = inputPlayer1;
            getID = event.target.getAttribute('id');
            playerArray.push(Number(getID));
            takenArray.push(Number(getID));
            // computer's move (after player's click)
            if (playerArray.length < 2) {
                mathRandom();
            };
            blockPlayer();
            oddMove();
            availableArray = array.filter(x => !takenArray.includes(x));
        });
    });
function mathRandom() {
    setTimeout(function(){ //delay.
    document.querySelectorAll('button');
    firstMove = availableArray[Math.floor(Math.random()*availableArray.length)];
    move = document.getElementById(firstMove);
    move.textContent = inputPlayer2;
    takenArray.push(Number(firstMove));
    return firstMove;
},1000); //delay is in milliseconds 
};
//if win combo could not be applied, use this function to generate random moves.
function oddMove() {
    availableArray = array.filter(x => !takenArray.includes(x));
    for (let i = 0; i < oddArray.length; i++) {
        let odd = oddArray[i];
        let oddMark = odd.filter(cell => playerArray.includes(cell));
            if (playerArray.length < 3) {
            if (oddMark.length === 2) {
                mathRandom();
                return;
            };
        };
    };
    return null;
};
//function to block winning moves.
function blockPlayer() {
    availableArray = array.filter(x => !takenArray.includes(x));
    for (let i = 0; i < winList.length; i++) {
        let combo = winList[i];
        marked = combo.filter(cell => playerArray.includes(cell));
        if (marked.length === 2) {
           let unmarked = combo.filter(cell => !playerArray.includes(cell));
            if (availableArray.includes(unmarked[0])) {
                takenArray.push(unmarked[0]);
               let move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                },1000); //delay is in milliseconds 
                console.log('block move: '+unmarked[0]);
                    return unmarked[0];
            }
            //Check if there are 2 winning possibilities.
            else if (availableArray.includes(unmarked[1])) {
                takenArray.push(unmarked[1]);
                let move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                console.log('block move: '+unmarked[1]);
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
                },1000); //delay is in milliseconds 
                    return unmarked[randonIndex];
            };
        };        
    };
    win();
};
//function to determine winner.
function win() {
if (marked.length === 3) {
    setTimeout(function(){//delay.
    alert('You won!');
    },1000); //delay is in milliseconds
    };
};