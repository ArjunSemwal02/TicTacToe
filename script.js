const resetElement = document.getElementById('reset');
const boxes = document.getElementsByClassName("box");
const statusElement = document.querySelector('.status');


let turn = "X"
let gameover = false;

//Function to change player's Turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
function checkWin() {
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
Array.from(boxes).forEach( box => {
    let text = box.querySelector('.boxText');
    box.addEventListener( 'click', () => {
        if( text.innerText === '' ) {
            text.innerText = turn;
            turn = changeTurn();
            checkWin();

            if(!gameover)     document.getElementsByClassName("status")[0].innerText = "Turn for " + turn;
        }
    })
})


//Reseting Game
resetElement.addEventListener('click', () => {
    Array.from(boxes).forEach(box => box.innerText = '');
    statusElement.textContent = 'Play';
})