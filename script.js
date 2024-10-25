//A web app for playing Zero-Cross
console.log("Welcome to My Tic Tac Toe")
let turn = "X"
let isgameover = false;

//Function to change player's Turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
function checkwin() {
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]

    wins.forEach(e => {
        if( ( boxtext[e[0]].innerText === boxtext[e[1]].innerText ) && ( boxtext[e[2]].innerText === boxtext[e[1]].innerText ) && ( boxtext[e[0]].innerText !== '' ) ) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach( element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener( 'click', () => {
        if( boxtext.innerText === '' ) {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            if(!isgameover)     document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
        }
    })
})