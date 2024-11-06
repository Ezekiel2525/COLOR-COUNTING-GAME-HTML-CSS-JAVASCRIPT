const colorSquares = document.querySelectorAll('.colorBtn');
const stopGame = document.getElementById('cleargame');
const timesClicked = {
    red : 0,
    blue : 0,
    green : 0,
    yellow : 0
}

colorSquares.forEach((square) => {
    square.addEventListener('click', (event) => {
        event.stopPropagation();
        timesClicked[square.value] += 1 
        square.innerText = timesClicked[square.value]
    })
})


stopGame.addEventListener('click', (event) => {
    event.stopPropagation();
    clearScores();
})

const clearScores = () => {
    colorSquares.forEach((score) => {
        score.innerText = 0;
    })
    timesClicked.red = 0;
    timesClicked.blue = 0;
    timesClicked.green = 0;
    timesClicked.yellow = 0;
}