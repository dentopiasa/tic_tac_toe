const Gameboard = (function() { //render gameboard
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = function() {
        let boardHTML = "";
        gameboard.forEach(function(square, index){
            boardHTML += `<div class="square" id=square-${index}">${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
        const squares = document.querySelectorAll(".square");//square event
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })
    }
    return {
        render,
    }
}
)();

const createPlayer = (name, mark) => { //creates players
    return {
        name, 
        mark
    }
}

const Game = (() => { //game controls and logic
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value,"X"),
            createPlayer(document.querySelector("#player2").value,"O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }
    const handleClick = (event) => {
        console.log("HELLO");
    }
    return {
        start,
        handleClick
    }
})();

const startBtn = document.querySelector("#play");
startBtn.addEventListener("click", ()=> {
    Game.start();
})

  
