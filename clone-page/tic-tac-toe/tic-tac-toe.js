const ticTacToe = {
    board: document.getElementById("board"),
    cells: document.querySelectorAll("#board .row .cell"),
    message: document.getElementById("message"),
    btnRestart: document.getElementById("btn-restart"),
    turn: "cross",
    winState: [
        [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]
    ],
    cross: [], /**indices of cross */
    circle: [], /**indices of circle */
    markCell: function(ev){
        ev.currentTarget.removeEventListener("click", ticTacToe.markCell);
        ev.currentTarget.classList.remove("empty");
        ev.currentTarget.classList.add(ticTacToe.turn);
        let index = Number.parseInt(ev.currentTarget.getAttribute("data-index"));
        (ticTacToe.turn == "cross")? ticTacToe.cross.push(index) : ticTacToe.circle.push(index);
        let message = ticTacToe.gameStatus();
        ticTacToe.turn = (ticTacToe.turn == "cross")? "circle": "cross";
        ticTacToe.board.className = ticTacToe.turn + "-turn";
        if(message){
            if(((ticTacToe.cross.length + ticTacToe.circle.length) % 2) == 0){
                ticTacToe.turn = (ticTacToe.turn == "cross")? "circle": "cross";
                ticTacToe.board.className = ticTacToe.turn + "-turn";
            }
            ticTacToe.message.innerText = message;
            ticTacToe.cells.forEach(cell => cell.removeEventListener("click", ticTacToe.markCell));
            modal.showModal();
        }
    },
    gameStatus: function(){
        let winner = ticTacToe.winState.some(state => {
            return state.every(item => {
                return(ticTacToe.turn == "cross")? 
                ticTacToe.cross.includes(item): 
                ticTacToe.circle.includes(item)
            });
        });
        if(winner) return (ticTacToe.turn == "cross")? "X Win!": "O Win!";
        if((ticTacToe.cross.length + ticTacToe.circle.length) == 9) return "Draw!";
        return null;
    },
    init: function(){
        ticTacToe.cross = [];
        ticTacToe.circle = [];
        ticTacToe.board.className = ticTacToe.turn + "-turn";
        ticTacToe.cells.forEach((cell, index) => {
            cell.className = "cell empty";
            cell.setAttribute("data-index", index);
            cell.addEventListener("click", ticTacToe.markCell);
        });
        ticTacToe.btnRestart.addEventListener("click", ticTacToe.restart);
    },
    restart: function(ev){
        ev.currentTarget.removeEventListener("click", ticTacToe.restart);
        ticTacToe.init();
    },
};
const modal = {
    modalNode: document.querySelector(".modal"),
    overlay: document.querySelector(".overlay"),
    btnClose: document.getElementById("btn-restart"),
    hideModal: function(){
        modal.overlay.classList.add("hidden");
        modal.modalNode.classList.add("off");
    },
    showModal: function(){
        modal.overlay.classList.remove("hidden");
        modal.modalNode.classList.remove("off");
    },
    init: function(){
        modal.btnClose.addEventListener("click", modal.hideModal);
    },
};
ticTacToe.init();
modal.init();