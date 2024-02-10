
const gameBoard = document.getElementById("game-board");

function gridGameBoard(rows, cols){
    for(let i=0; i<cols; i++){
        for(let j=0; j<rows; j++){
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.dataset.rows = i;
            gridCell.dataset.cols = j;
            gameBoard.appendChild(gridCell);
        }
        gameBoard.appendChild(document.createElement("br"));
    }
}
gridGameBoard(10,10);