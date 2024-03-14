// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For starting, restarting, and ending the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will attempt to guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not play again
let playAgain;
// Starting alert message
alert('Welcome to the GUESS THAT NUMBER! Please click OK to start the game');
// Game Restarts as long as the restartGame has a value of true
while(restartGame){
    // Asks the user to enter a number to set the upper bound for the random number that will be created. Also using parseInt to attempt to convert the user's response into the number value.
    rangeNum = prompt('Please enter a maximum number for the range:');
    rangeNum = parseInt(rangeNum);
    // Verifying the user's entry for a range number is a number greater than ONE (NOTE: All numbers, positive and negative, have a default boolean value of true, except for zero which has a boolean value of false. Also, NaN has a boolean value of false as well.)
    while(randomNum <= 1 || !rangeNum){
        rangeNum = prompt(`Please enter a number greater than 1`);
        rangeNum = parseInt(rangeNum);
    }
    // alert(randomNum);
    // Creates the random number using range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;
    // alert(randomNum);
    // Prompts user to enter a number of attempts allowed (AKA Number of guesses)
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));
    // Verifies the user's entry for a number of attempts allowed is a number greater than zero and one less than the range they set.
    while (attempts < 1 || !attempts || attempts >= rangeNum){
        attempts = prompt(`Please enter a number from 1 to ${rangeNum - 1}`)
        attempts = parseInt(attempts);
    }
    // Ask user ti enter a guess in the range that they set
    guess = prompt(`Please enter a guess 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);
    // Continue looping until the guesses the correct number or runs out of attempts (NOTE: Loops until a BREAK keyword is run)
    while (true){
        // Tries to convert the user's guess into a number
        guess = parseInt(guess);
        // Verifies the user's guess is a number greater than zero and within the range they set
        while (!guess || guess < 1 || guess > rangeNum){
            guess = prompt(`Please enter a guess 1 to ${rangeNum}.`);
            guess = parseInt(guess);
        }
        // Removes an attempt
        attempts--;
        // Checks if the user guessed correctly. If so, the game ends.
        if (guess === randomNum){
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;
            // Checks if the user has any attempts left. If not, then the game ends and the number us displayed to the user. (NOTE: \n creates a new line)
        } else if (attempts === 0) {
            alert(`Sorry, but you have run out of attempts :(\nThe number was ${randomNum}`);
            break;
            // Checks if user's guess was too low and prompts the user to guess again if so
        } else if (guess < randomNum){
            guess = prompt(`Too low. You have ${attempts} attempts left.`);
            // Checks if user's guess was too high and prompts the user to guess again if so
        } else if (guess > randomNum){
            guess = prompt(`Too High. You have ${attempts} attempts left.`)
        }
    // break;
    }
    // Prompts user with option for play again
    playAgain = prompt(`Would you like to play again? Y for yes, N for no.`)
    // Loop continues until the user inserts valid response
    while (true){
        // Checks if the user's answer is no (???)
        if (playAgain.toUpperCase === `N`){
            // Alerts the user the game is over and the game does not restart
            alert(`Thanks for playing!`);
            restartGame = false;
            break;
        } else if (playAgain.toUpperCase === `Y`){
            break;

        } else {
            prompt(`Please enter Y or N:`);
        }
        // break
    }
    // break;
}