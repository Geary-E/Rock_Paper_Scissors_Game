const computerChoiceDisplay = document.getElementById('computer-choice');

const userChoiceDisplay = document.getElementById('user-choice');
let amountOfTries = 0;

 const resultDisplay = document.getElementById('result');
 const secondResultDisplay = document.getElementById('result2');    // result for the computer

 /* This is for the images in the website */
 let image1 = document.getElementById('img1');  // first image 
 let image2 = document.getElementById('img2');  // second image


 function startButton() {       // Whenever you click on start button, this stuff happens
    alert("Game Has Started. Best 2 out of 3 Wins.")
    /*setTimeout(() => {
        alert(`Go!`);
     }, 2000); */
 }
 

 //let imageArray = ["paper.jpg", "rock.jpg", "scissors.jpg"];    // images - Redundant

image1.style.background = "url('rock.jpg')";
image1.style.backgroundSize = "100%";
image2.style.background = "url('scissors.jpg')";
image2.style.backgroundSize = "100%";



 const possibleChoices = document.querySelectorAll('div.button-style');
 let userChoice;
 let counter1 = 0;
 let counter2 = 0;
 let computerChoice;
 let result;
 let result2;
 //let amountOfTries = 0;

 function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;   // or 3
    //console.log(randomNumber);
    if(randomNumber === 1) {
        computerChoice = 'rock';
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if(randomNumber === 3) {
        computerChoice = 'paper';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
        if(computerChoice === userChoice) {
            image1.style.background = "url('tie.jpg')";
            image1.style.backgroundSize = "95%";
            image2.style.background = "url('tie.jpg')";
            image2.style.backgroundSize = "95%";
            result2 = 'Its a Draw!';
            result = 'Its a Draw!';
        }
        if(computerChoice === 'rock' && userChoice === 'paper') {
            image1.style.background = "url('rock.jpg')";
            image1.style.backgroundSize = "100%";
            image2.style.background = "url('paper.jpg')";
            image2.style.backgroundSize = "100%";
            result = 'You won!';
            result2 = 'Computer Lost!';
        }
        if(computerChoice === 'scissors' && userChoice === 'paper') {
            image1.style.background = "url('scissors.jpg')";
            image1.style.backgroundSize = "100%";
            image2.style.background = "url('paper.jpg')";
            image2.style.backgroundSize = "100%"; 
            result = 'You lost!';
            result2 = 'Computer Won!';
        }
        if(computerChoice === 'rock' && userChoice === 'scissors') {
            image1.style.background = "url('rock.jpg')";
            image1.style.backgroundSize = "100%";
            image2.style.background = "url('scissors.jpg')";
            image2.style.backgroundSize = "100%"; 
            result = 'You lost!';
            result2 = 'Computer Won!';
        }
        if(computerChoice === 'paper' && userChoice === 'rock') {
            image1.style.background = "url('paper.jpg')";
            image1.style.backgroundSize = "100%";
            image2.style.background = "url('rock.jpg')";
            image2.style.backgroundSize = "100%";
            result = 'You lost!';
            result2 = 'Computer Won!';
        }
        if(computerChoice === 'paper' && userChoice === 'scissors') {
            image1.style.background = "url('paper.jpg')";
            image1.style.backgroundSize = "100%";
            image2.style.background = "url('scissors.jpg')";
            image2.style.backgroundSize = "100%";
            result = 'You won!';
            result2 = 'Computer Lost!';
        }
        if(computerChoice === 'scissors' && userChoice === 'rock') {
            image1.style.background = "url('scissors.jpg')";
            image1.style.backgroundSize = "100%";
            image2.style.background = "url('rock.jpg')";
            image2.style.backgroundSize = "100%";
            result = 'You won!';
            result2 = 'Computer Lost!';
        }
    resultDisplay.innerHTML = result;
    secondResultDisplay.innerHTML = result2;            
   }

   function countWins() {
        getResult();
        if(result === 'You won!' && result2 === 'Computer Lost!') {
            counter2++;
            amountOfTries++;
        }
        if(result === 'You lost!' && result2 === 'Computer Won!') {
            counter1++;
            amountOfTries++;
        }

   }

   //let amountOfTries = 0;

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
        countWins();    // count number of wins.
        if(amountOfTries === 3) {
                alert(`End of Game`);
                if(counter1 > counter2) {
                    alert('Computer Wins the Game.');
            }
            if(counter2 > counter1) {
                alert(`User wins the game.`);
            }
        //}
    }
    }));



 