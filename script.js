let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const ShowUserChoice = document.querySelector("#showuserchoice");
const ShowCompChoice = document.querySelector("#showcompchoice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        /* console.log("Choice was clicked", userChoice); */
        playgame(userChoice);
    });
});

const playgame = (userChoice) => {
    /* console.log("User Choice = ", userChoice); */
    // Generate computer choice
    const compChoice = gencompChoice();
    /* console.log("Comp Choice = ", compChoice); */

    // Check if it's a draw
    if (userChoice === compChoice) {
        drawGame();
    } 
    else 
    {
        let userWin = true;

        // Check winning conditions
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

    // Show user and computer choices
    ShowUserChoice.innerText = userChoice;
    ShowCompChoice.innerText = compChoice;
};

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"]; 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    /* console.log("The Game was Drawn!!"); */
    msg.innerText = "The Game was Drawn!!";
    msg.style.backgroundColor = "yellowgreen";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        /* console.log("You Win!!"); */
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;  
        /* console.log("You Lost!!"); */
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
};
