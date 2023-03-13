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
const dumbMove = [
    [1, 3, 5],
    [1, 3, 7],
    [3, 5, 7],
];
let array = [0,1,2,3,4,5,6,7,8];
let newArray = [];
let difference;
let playerArray = [];
let inputPlayer1 = "X";
let inputPlayer2 = "O";
let move;
let getID;
let random;
let winningChance;
let unmarked;
let marked;
const playerTurn = document.querySelectorAll('button');
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = inputPlayer1;
            getID = event.target.getAttribute('id');
            playerArray.push(Number(getID));
            newArray.push(Number(getID));
            difference = array.filter(x => !newArray.includes(x));
            // computer's move (after player's click)
            blockPlayer();
            console.log('newArray: ' +newArray);
            if (playerArray.length < 2) {
                setTimeout(function(){ //delay.
                mathRandom();
                move = document.getElementById(random);
                        move.textContent = inputPlayer2;
                    },1000); //delay is in milliseconds 
            }
        });
    });
function mathRandom() {
    document.querySelectorAll('button');
    random = difference[Math.floor(Math.random()*difference.length)];
    newArray.push(random);
        if (playerArray.length > 2) {
            playerArray.splice(0, 1);
        }
}
//function to block winning moves.
function blockPlayer() {
    for (let i = 0; i < winList.length; i++) {
        let combo = winList[i];
         marked = combo.filter(cell => playerArray.includes(cell));
        if (marked.length === 2) {
            unmarked = combo.filter(cell => !playerArray.includes(cell));
            if (difference.includes(unmarked[0])) {
                newArray.push(unmarked[0]);
                move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                return unmarked[0];
            },1000); //delay is in milliseconds 
            }
        }
    }
    for (let j = 0; j < dumbMove.length; j++) {
        let dumb = dumbMove[j];
        let wrongMove = dumb.filter(cell => playerArray.includes(cell));
        if (wrongMove.length === 2) {
            let wrong = dumb.filter(cell => !playerArray.includes(cell));
            if (difference.includes(wrong[0])) {
                newArray.push(wrong[0]);
                move = document.getElementById(wrong);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                return wrong[0];
                },1000); //delay is in milliseconds 
            }
        }
    }
    return null;
}