let boxes=document.querySelectorAll(".box");
let restBtn=document.getElementById("reset");
let newgameBtn=document.getElementById("new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let turnO = true;//player x,player o
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],    
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],    
];

const resetGame =() => {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") {
            return; // Prevent overwriting a box
        }
        if (turnO) {
            // player O
            box.style.color = "blue";
            box.innerText = "O";
            turnO = false;
        } else {
            // player X
            box.style.color = "red";
            box.innerText = "X";
            turnO = true;
        }
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is: ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
    }
};

newgameBtn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);
