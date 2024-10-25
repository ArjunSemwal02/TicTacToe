//Play ZeroKatta
const resetElement = document.getElementById('reset');
let boxes = document.getElementsByClassName("box");
let statusElement = document.querySelector('.status');
let turn = "X"
let gameover = false;

//Function to change player's Turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
function checkwin() {
    let text = document.getElementsByClassName('boxText');
    let wins = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

    wins.forEach(e => {
        if( ( text[e[0]].innerText === text[e[1]].innerText ) && ( text[e[2]].innerText === text[e[1]].innerText ) && ( text[e[0]].innerText !== '' ) ) {
            statusElement.innerText = text[e[0]].innerText + " Won";
            gameover = true;
        }
    })
}

//Game Logic
Array.from(boxes).forEach( element => {
    let text = element.querySelector('.boxText');
    element.addEventListener( 'click', () => {
        if( text.innerText === '' ) {
            text.innerText = turn;
            turn = changeTurn();
            checkwin();
            if(!gameover)     document.getElementsByClassName("status")[0].innerText = "Turn for " + turn;
        }
    })
})


//Reseting Game
// const resetGame = () => {
    resetElement.addEventListener('click', () => {
        Array.from(boxes).forEach(box => box.innerText = '');
        statusElement.textContent = 'Play';
    })
// }