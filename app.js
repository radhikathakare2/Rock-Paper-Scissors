let userScore=0;
let computerScore=0;

const moves = document.querySelectorAll(".moves");
const Uscore = document.querySelector("#userScore");
const Cscore = document.querySelector("#computerScore");
const result = document.querySelector(".msgBox");
const restartBtn = document.querySelector(".restart");
const genCompMove = () => {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()*3);
    console.log(options[randomChoice]);
    return options[randomChoice];
}

const play = (userChoice) => {
    const compChoice = genCompMove();
    
    if(userChoice===compChoice){
        draw(userChoice, compChoice);
        result.style.backgroundColor = "Red";
    }else{
        result.style.backgroundColor = "";
    }

    checkRock(userChoice, compChoice);
    checkPaper(userChoice, compChoice);
    checkScissors(userChoice, compChoice);
}

function checkRock(userChoice, compChoice){
    if(userChoice=="rock" && compChoice=="paper"){
        Cscore.innerHTML=++computerScore;
        Uscore.innerHTML = userScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `COMPUTER WON! <br> User : ${userChoice} ; Computer = ${compChoice}`;
        restartBtn.style.display = 'block';
    }else if(userChoice=="rock" && compChoice=="scissors"){
        Uscore.innerHTML=++userScore;
        Cscore.innerHTML = computerScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        
        result.innerHTML = `YOU WON! <br> User : ${userChoice} ; Computer = ${compChoice}`;
        restartBtn.style.display = 'block';
    }
}

function checkPaper(userChoice, compChoice){
    if(userChoice=="paper" && compChoice=="rock"){
        Uscore.innerHTML=++userScore;
        Cscore.innerHTML = computerScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `YOU WON! <br> User : ${userChoice} ; Computer = ${compChoice}`;
        restartBtn.style.display = 'block';
    }
    else if(userChoice=="paper" && compChoice=="scissors"){
        Cscore.innerHTML=++computerScore;
        Uscore.innerHTML = userScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `COMPUTER WON! <br> User : ${userChoice} ; Computer = ${compChoice}`;
        restartBtn.style.display = 'block';
    }
}
function checkScissors(userChoice, compChoice){
    if(userChoice=="scissors" && compChoice=="paper"){
        Uscore.innerHTML=++userScore;
        Cscore.innerHTML = computerScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `YOU WON! <br> User : ${userChoice} ; Computer = ${compChoice}`;
        restartBtn.style.display = 'block';
    }else if(userChoice=="scissors" && compChoice=="rock"){
        Cscore.innerHTML = ++computerScore;
        Uscore.innerHTML = userScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `COMPUTER WON! <br> User : ${userChoice} ; Computer = ${compChoice}`;
        restartBtn.style.display = 'block';

    }  
}

moves.forEach((move) => {
    move.addEventListener("click", () => {
        const userChoice = move.getAttribute("id");
        play(userChoice);
    })
})

function draw(userChoice, compChoice){
    result.style.display = 'flex';
    result.style.alignItems = 'center';
    result.style.justifyContent = 'center';
    result.innerHTML = `Draw! <br> User : ${userChoice} ; Computer = ${compChoice}`;
    restartBtn.style.display = 'block';
}

restartBtn.addEventListener("click", () => {
    Cscore.innerHTML = ``;
    Uscore.innerHTML = ``;
    result.style.display = 'none';
    restartBtn.style.display = 'none';
    userScore=0;
    computerScore=0;
})