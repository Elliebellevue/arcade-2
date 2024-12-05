let userName = prompt("What is your name?");
let gameSession = "y"
function welcomeMessage(userName) {
    alert(`Welcome to arcade, ${userName}`);
}
welcomeMessage(userName);

function welcomeToGame(gameName, userName) {
    alert(`Hello ${userName}, Let's play ${gameName}`);
}

function farewell(username) {
    document.getElementById("farewell-section").style = "display: block";
    document.getElementById("farewell-msg").innerHTML = `Good bye and thank you, ${username}`;
}
function reload() {
    gameSession = "y";
    location.reload();
}

function playAnotherGame() {
    do {
        gameSession = prompt(`${userName}, Would you like to play another game? y/n`);
    } while (gameSession.toLowerCase() == "y" ? true : false);

    if (gameSession === "n") {
        farewell(userName);
    }
}

function guessingGame() {
    welcomeMessage('Guessing game', userName);
    let inputNumber;

    let playSession = "y";

    outer: do {

        while (true) {
            inputNumber = prompt("Guess a number between 1 and 10:");
            inputNumber = parseInt(inputNumber) || -1;
            if (inputNumber < 1 || inputNumber > 10) {
                alert("Invalid input. Try again.");
            } else {
                break;
            }
        }
        let theNumber = Math.floor(Math.random() * 10) + 1;

        let guessCount = 1;

        while (inputNumber != theNumber) {
            if (inputNumber > theNumber) {
                inputNumber = prompt("Guess was too high. Guess again");
            } else if (inputNumber < theNumber) {
                inputNumber = prompt("Guess was too low. Guess again");
            }
            guessCount++;
        }
        alert("You guessed it in " + guessCount + " guesses");
        playSession = prompt(`${userName}, Would you like to keep playing this game? y/n`);
        if (playSession === null) {
            break outer;
        }
    } while (playSession.toLowerCase() == "y" ? true : false);

    playAnotherGame();

}


let consultOracle = function () {
    welcomeToGame("Magic 8 balls", userName);
    const answers = [
        "Yes",
        "No",
        "Not certain",
        "Seems unlikely",
        "Not a chance",
        "In your dreams",
        "Get real, kid",
        "Absolutely",
    ]
    let playSession = "y";
    outer: do {
        let question;
        while (true) {
            question = prompt("What is your question?");
            if (question == undefined || question.length <= 0) {
                continue;
            } else {
                break;
            }
        }

        while (true) {
            let userAction;
            while (true) {
                userAction = prompt("To get the answer, type shake. To stop, type stop.");
                if (userAction == undefined) {
                    continue;
                } else {
                    userAction = userAction.toLowerCase();
                    if (userAction == "shake" || userAction == "stop" || userAction == "again") {
                        break;
                    } else {
                        continue;
                    }
                }
            }

            if (userAction == "stop") {
                playSession = prompt(`${userName}, Would you like to keep playing this game? y/n`);
                if (playSession === "y") {
                    continue outer;
                } else {
                    break outer;
                }
            } else if (userAction == "shake") {
                let index = Math.floor(Math.random() * answers.length);
                let answer = answers[index];
                alert(answer);
            }
        }
    } while (playSession.toLowerCase() == "y" ? true : false);

    playAnotherGame();
}
let bnh = () => {
    let playSession = "y";
    const choices = ['bear', 'ninja', 'hunter'];

    let player = userName;
    // Print out welcome text
    welcomeToGame("Bear, Ninja, Hunter", player);

    function playGame() {
        // Prompt the player for input
        let choose = prompt('Who are you: Bear, Ninja or Hunter? Please wait 3 seconds for the result').toLowerCase();

        // Validate the player's choice
        if (!choices.includes(choose)) {
            alert("Invalid choice! Please enter one of the following: bear, ninja, hunter.");
            return;
        }

        let cpuChoice = Math.floor(Math.random() * 3);
        let computer = choices[cpuChoice];

        let result = "";

        if (choose === computer) {
            result = "tie";
        } else if (
            (choose === "bear" && computer === "ninja") ||
            (choose === "ninja" && computer === "hunter") ||
            (choose === "hunter" && computer === "bear")
        ) {
            result = "user";
        } else {
            result = "computer";
        }

        let countdown = 3;
        const interval = setInterval(function () {
            console.log(countdown);
            countdown--;

            if (countdown < 0) {
                clearInterval(interval);
                console.log("Time's up!!!");

                alert(`${player}, You picked ${choose}!`);
                alert(`The Computer Picked ${computer}`);

                switch (result) {
                    case "tie":
                        alert("Tie!!");
                        break;
                    case "user":
                        alert("You win!!");
                        break;
                    case "computer":
                        alert("Computer Wins!!");
                        break;
                    default:
                        console.log("Something went wrong");
                        break;
                }


                setTimeout(function () {
                    playSession = prompt(`${userName}, Would you like to keep playing this game? y/n`);
                    if (playSession.toLowerCase() == "y") {
                        playGame();
                    } else {
                        gameSession = prompt("Would you like to play another game? y/n");
                        if (gameSession === "n") {
                            farewell(userName);
                        }
                    }
                }, 1000);
            }
        }, 1000);
    }

    playGame();
}