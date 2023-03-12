let array = [0,1,2,3,4,5,6,7,8];
let newArray = [];
let difference;
let inputPlayer1 = "";
let inputPlayer2 = "";
let move;
let getID;
const playerTurn = document.querySelectorAll('button');
playerTurn.forEach(choice  => {
     choice.addEventListener('click', event => {
        choice.textContent = 'X';
        inputPlayer1 = 'X';
            getID = event.target.getAttribute('id');
            console.log(getID);
            newArray.push(Number(getID));
            console.log(newArray);
            difference = array.filter(x => !newArray.includes(x));
            console.log(difference);
        });
    });
