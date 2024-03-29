let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-borad");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userScore === 5){
        result_p.innerHTML = "Yey!!! You win!!!";
    }
    else    result_p.innerHTML = convertToWord( userChoice) + " beats " + convertToWord(computerChoice) + ": user score +1 point."
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (computerScore === 5){
        result_p.innerHTML = "You lost shitface... Game Over!";
    }
    else    result_p.innerHTML = convertToWord( userChoice) + " looses to " + convertToWord(computerChoice) + ": computer score +1 point."
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord( userChoice) + " matches " + convertToWord(computerChoice) + ". Drawww."}

function game(userChoice){
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}



function  main(){
rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click', function(){
    game("p");
})
scissors_div.addEventListener('click', function(){
    game("s");
})
}

main();

