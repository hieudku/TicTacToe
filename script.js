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
    [1, 3, 5],
    [3, 5, 7],
    [1, 3, 7],
    [1, 3, 8],
    [0, 5, 7],
    [1, 5, 6],
    [2, 3, 7]
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
let moveMade = false;
const playerTurn = document.querySelectorAll('button');
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        moveMade == false;
        choice.textContent = inputPlayer1;
            getID = event.target.getAttribute('id');
            playerArray.push(Number(getID));
            takenArray.push(Number(getID));
            availableArray = array.filter(x => !takenArray.includes(x));
            // computer's first move is always random.
            if (playerArray.length < 2) {
                mathRandom();
            };
            blockPlayer();
            oddMove();
            if (playerArray.length > 2) {
                playerArray.splice(0, 1);
            }
            console.log('player moves list: '+playerArray);
            console.log('taken cells: '+takenArray);
        });
    });
//function for computer to random generate a move if its its first or odd move.
function mathRandom() {
    if (moveMade == false) {
    setTimeout(function(){ //delay.
    document.querySelectorAll('button');
    firstMove = availableArray[Math.floor(Math.random()*availableArray.length)];
    move = document.getElementById(firstMove);
    move.textContent = inputPlayer2;
    takenArray.push(Number(firstMove));
    availableArray = array.filter(x => !takenArray.includes(x));
    console.log('random: ' + firstMove);
    console.log('available: '+availableArray + ' end');
},1000); //delay is in milliseconds 
    }
};
//if win combo could not be applied, use this function to generate random moves.
function oddMove() {
    for (let i = 0; i < oddArray.length; i++) {
        let odd = oddArray[i];
        let oddMark = odd.filter(cell => playerArray.includes(cell));
            if (oddMark.length == 2) {
                mathRandom();
                console.log('odd mark: ' + firstMove)
                return;
        };
    };
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
                },1000); //delay is in milliseconds 
                console.log('block move0: '+unmarked[0]);
                    return unmarked[0];
            }
            else if (!availableArray.includes(unmarked[0])) {
                mathRandom();
               }
            //Check if there are 2 winning possibilities.
            else if (availableArray.includes(unmarked[1])) {
                let move = document.getElementById(unmarked);
                setTimeout(function(){//delay.
                move.textContent = inputPlayer2;
                takenArray.push(unmarked[1]);
                console.log('block move1: '+unmarked[1]);
                },1000); //delay is in milliseconds 
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
                },1000); //delay is in milliseconds 
                    return unmarked[randonIndex];
            };
        }; // end marked length check.
        console.log('available: '+availableArray + ' end');
        //if there are combo, player wins.
        if (marked.length === 3) {
            setTimeout(function(){//delay.
            alert("You won!");
            if (availableArray == []) {
                prompt('Play again?')
            }
        },1000); //delay is in milliseconds 
            return;
        }        
    }; //end for loop.
}; //end function.