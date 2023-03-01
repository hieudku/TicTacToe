let array = [];
let inputPlayer1 = "";
let inputPlayer2 = "";
let move;

const playerTurn = document.querySelectorAll(".btn");
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = 'X';
        inputPlayer1 = 'X';
        console.log(inputPlayer1);
        nextMove();
        });
    });
function nextMove() {
    const next = document.querySelectorAll(".btn");
    next.forEach(turn => {
        turn.addEventListener('click', (e) => {
            turn.textContent = 'O';
            inputPlayer2 = 'O';
            console.log(inputPlayer2);
        });
    });
}
