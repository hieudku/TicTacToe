let array = [];
let inputPlayer = "";
let computerTurn;
let move;

const playerTurn = document.querySelectorAll(".btn");
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = 'X';
        inputPlayer = 'X';
            const computer = document.querySelectorAll(".btn");
            computer.forEach(turnAI => {
                if (choice.textContent != 'X') {
                turnAI.textContent = 'O';
                }
            });
            });
     });
