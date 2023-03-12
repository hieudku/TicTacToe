const winList = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]
let array = [0,1,2,3,4,5,6,7,8];
let newArray = [];
let difference;
let playerArray = [];
let inputPlayer1 = "";
let inputPlayer2 = "";
let move;
let getID;
let random;
let winningChance;
const playerTurn = document.querySelectorAll('button');
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = 'X';
        inputPlayer1 = 'X';
            getID = event.target.getAttribute('id');
            playerArray.push(Number(getID));
            newArray.push(Number(getID));
            difference = array.filter(x => !newArray.includes(x));
            // computer's move (after player's click)
            mathRandom();
                move = document.getElementById(random);
                move.textContent = "O";
                   //filter testing

        });
    });
function mathRandom () {
    document.querySelectorAll('button');
    random = difference[Math.floor(Math.random()*difference.length)];
    newArray.push(random);
}

function chooseArray() {
    for (let i = 0; i < winList.length; i++) {
        for (let j = 0; j < winList[i].length; j++) {
            console.log(winList[1])
        if (winList[j].includes(playerArray)) {
            console.log(winList[j]);
        }
    }
    }
}
/* 

*/