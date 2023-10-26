const Gameboard = (() => { //render gameboard
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
    }
    const update = (index, value) => {
        gameboard[index] = value;
        render();
    };
    return {
        render,
        update
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
        const squares = document.querySelectorAll(".square");//square event
        squares.forEach((square) => {
            square.addEventListener("click", handleClick);
        })
    }
    const handleClick = (event) => { //handleCLick function
        let index = parseInt(event.target.id.split("-")[1]);//very helpful to identify where user clicks
        Gameboard.update(index, players[currentPlayerIndex].mark)
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

  
