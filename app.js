// console.log("Hello");
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    // console.log(Math.floor(Math.random()*3));
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]

}

// console.log(getComputerChoice());

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";

}

function win(userChoice, computerChoice) {
    userScore++;
    // console.log("win");
    // console.log(userScore);
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();

    const userChoice_div = document.getElementById(userChoice);

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_p.innerHTML = convertToWord(userChoice) + "  beats  " + convertToWord(computerChoice) + ". you win";
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord} . you win :) `;
    userChoice_div.classList.add("green-glow")
    // setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 500);
    setTimeout(() =>  userChoice_div.classList.remove('green-glow'), 500);



}

// setTimeout(function() { console.log("hellowww")}, 3000);

function lose(userChoice, computerChoice) {
    // console.log("lost");

    computerScore++;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();

    const userChoice_div = document.getElementById(userChoice);


    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord} . you lost :( `;

    userChoice_div.classList.add("red-glow")
    // setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 500);
    setTimeout(() =>  userChoice_div.classList.remove('red-glow'), 500);  //arrow function of ES6 instead of normal function in ES5





}


function draw(userChoice, computerChoice) {
    // console.log("draw");

    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub(); 

    const userChoice_div = document.getElementById(userChoice);


    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws ${convertToWord(computerChoice)}${smallComputerWord} . Its a draw : `;
    userChoice_div.classList.add("gray-glow")
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);

}

function game(userChoice) {
    // console.log("xx:  "+ userChoice)
    const computerChoice = getComputerChoice();
    // console.log("user choice   : " + userChoice);
    // console.log("computer choice   : " + computerChoice);  
    switch(userChoice + computerChoice ){
        case "rs":
        case "pr":
        case "sp":
            // console.log("User wins.");
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            // console.log("User loses");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log("Its draw")
            draw(userChoice, computerChoice);
            break;
        
    }  
}

// game("c");



function main() {

    rock_div.addEventListener('click', function(){
        console.log("you clicked rock");
        game("r");
    })

    paper_div.addEventListener('click', function(){
        console.log("you clicked paper");
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        console.log("you clicked scissor");
        game("s");
    })

}

main();