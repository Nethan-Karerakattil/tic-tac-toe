document.querySelectorAll(".tile").forEach((element) =>
    element.addEventListener("click", (e) => processInput(e))
)

function processInput(e){
    functions.addMark(e.currentTarget, data.turn);

    switch(functions.checkWinner(data.board)){
        case 1:
            functions.showEndScreen("🎉 Red Wins 🎉");
        break;

        case 2:
            functions.showEndScreen("🎉 Green Wins 🎉");
        break;

        case "tie":
            functions.showEndScreen("Tie");
        break;
    }
}

const endScreen = document.querySelector(".end-screen");
endScreen.lastElementChild.addEventListener("click", () => {
    endScreen.style.display = "none";
    functions.clearBoard();
})