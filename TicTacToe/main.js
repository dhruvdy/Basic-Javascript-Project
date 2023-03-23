const gamePlayer = document.getElementById('gamePlayer');
const reset = document.querySelector('.reset');
const boxes = document.querySelectorAll('.box');
let currentPlayer = '';
let winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function startGame(){
    currentPlayer= 'X';
    gamePlayer.innerText = `Current Player - ${currentPlayer}`;
    reset.classList.remove('visible');
    boxes.forEach((box,index)=>{
        box.className=`box box${index+1}`;
        box.innerText = '';
    })
    makeBoxesClickable();
}

function makeBoxesClickable(){
    boxes.forEach((box)=>{
        box.addEventListener('click',handleClick)
    })
}

function handleClick(e){
    e.target.innerText = currentPlayer;
    e.target.removeEventListener('click',handleClick);
    if(!isGameOver())  swapCurrentPlayer();
}

function isGameOver(){
    let someOneWonGame = false;
    winningPosition.forEach((position) => {
        if((boxes[position[0]].innerText !== '') && (boxes[position[1]].innerText !== '') && (boxes[position[2]].innerText !== '') &&
        (boxes[position[0]].innerText == boxes[position[1]].innerText) && (boxes[position[1]].innerText == boxes[position[2]].innerText))
        {
            boxes[position[0]].classList.add('green');
            boxes[position[1]].classList.add('green');
            boxes[position[2]].classList.add('green');
            boxes.forEach((box)=>{
                box.removeEventListener('click',handleClick)
            })
            gamePlayer.innerText=`${currentPlayer} is the Winner`;
            reset.classList.add('visible');
            someOneWonGame = true;
        }
    })
    if(someOneWonGame) return true;
    let boxClicked=0;
    boxes.forEach((box)=>{
        if(box.innerText!=='') boxClicked++;
    })
    if(boxClicked === 9) {
        gamePlayer.innerText = 'Game Tied!!!';
        reset.classList.add('visible');
        return true;
    }
    return false;

}

function swapCurrentPlayer(){
    if(currentPlayer == 'X') 
    {
        currentPlayer = 'O';
        gamePlayer.innerText = `Current Player - ${currentPlayer}`;
    }
    else {
        currentPlayer = 'X';
        gamePlayer.innerText = `Current Player - ${currentPlayer}`;
    }
}

reset.addEventListener('click',startGame);

startGame();