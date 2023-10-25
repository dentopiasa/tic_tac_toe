const startBtn = document.querySelector("#play");

const Gameboard = (function() {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = function() {
        let boardHTML = "";
        gameboard.forEach(function(square, index){
            boardHTML += `<div class="square" id=square-${index}">${square}</div>`
        })
    }
    document.querySelector("#gameboard").innerHTML = boardHTML;
    return {
        render,
    }
}
)();

const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;
})();


startBtn.addEventListener("click", ()=> {
    //Game.start()
})


