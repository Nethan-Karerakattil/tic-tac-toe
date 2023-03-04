const functions = {
    addMark(e, turn){
        if(e.firstChild)
            return alert("That tile is already clicked!");

        switch(turn){
            case 1:
                e.innerHTML = '<i class="icon fa-solid fa-x"></i>';
                data.board[e.className.split(" ")[0]] = 1

                data.turn = 2;
            break;

            case 2:
                e.innerHTML = '<i class="icon fa-regular fa-circle"></i>';
                data.board[e.className.split(" ")[0]] = 2

                data.turn = 1;
            break;
        }
    },

    checkWinner(arr){
        for(let p = 1; p < 3; p++) {
            // Find winner in sleeping rows
            for(let i = 0; i < 10; i += 3) {
                if(arr[i] === p && arr[i + 1] === p && arr[i + 2] === p) {
                    return p;
                }
            }

            // Find winner in standing rows
            for(let i = 0; i < 3; i++) {
                if(arr[i] === p && arr[i + 3] === p && arr[i + 6] === p) {
                    return p;
                }
            }

            // Find winner in slanting rows
            if((arr[0] === p && arr[4] === p && arr[8] === p) || (arr[2] === p && arr[4] === p && arr[6] === p)) {
                return p;
            }
        }

        for(let i = 0; i < 9; i++) {
            if(arr[i] === 0) break;
            if(i === 8) return "tie";
        }
    },

    showEndScreen(text){
        document.querySelector(".results-text").textContent = text
        document.querySelector(".end-screen").style.display = "flex";
    },

    clearBoard(){
        data = {
            turn: 1,
            
            board: [
                0, 0, 0,
                0, 0, 0,
                0, 0, 0,
            ]
        }

        document.querySelectorAll(".tile").forEach((e) => {
            if(e.firstChild) e.innerHTML = "";
        })
    }
}