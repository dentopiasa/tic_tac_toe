const Gameboard = (() => { //render gameboard
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
        const squares = document.querySelectorAll(".square");//square event
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })
        
    }
    const update = (index, value) => {
        gameboard[index] = value;
        render();
    };

//accessor method that can access but not modify. Checks if there is a mark on square so it cannot be clicked again
    const getGameboard = () => gameboard;

    return {
        render,
        update, 
        getGameboard
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
        
        if (Gameboard.getGameboard()[index] !== "")
        return

        Gameboard.update(index, players[currentPlayerIndex].mark)

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    const restart = () => {
        for (i = 0; i < 9; i++) {
            Gameboard.update(i, "");
        }
        Gameboard.render();
    }

    return {
        start,
        handleClick,
        restart
    }
})();

const startBtn = document.querySelector("#play");
startBtn.addEventListener("click", ()=> {
    Game.start();
})

const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", () => {
    Game.restart();
})

  
