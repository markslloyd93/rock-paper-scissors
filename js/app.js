//cache the DOM
//DOM variables '_htmltag'
var userScore = 0;
var computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();


//functions
//generate a random letter
function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertTwoWord(letter){
  if (letter === "r"){
    return "rock";
  }else if (letter === "p"){
    return "paper";
  }else{
    return "scissors"
  }
}

//win function
function win(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  //ES5 syntax
  //result_p.innerHTML =  convertTwoWord(userChoice) + " beats " + convertTwoWord(computerChoice ) + " . You win!";
  //ES6 syntax
  result_p.innerHTML =  `${convertTwoWord(userChoice)}${smallUserWord} beats ${convertTwoWord(computerChoice)}${smallCompWord}. You win!`;

  //animation effect
  userChoice_div.classList.add('green-glow');
  //ES5 syntax
  //setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 500);
  //ES6 syntax
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);

}
//win function
function lose(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  //ES5 syntax
  //result_p.innerHTML =  convertTwoWord(computerChoice) + " beats " + convertTwoWord(userChoice) + " . You lose!";
  //ES6 syntax
  result_p.innerHTML =  `${convertTwoWord(userChoice)}${smallCompWord} beats ${convertTwoWord(computerChoice)}${smallUserWord}. You lose!`;

  //animation effect
  userChoice_div.classList.add('red-glow');
  //ES6 syntax
  //setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 500);
  //ES6 syntax
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

//win function
function draw(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  //ES5 syntax
  //result_p.innerHTML =  convertTwoWord(computerChoice) + " equals " + convertTwoWord(userChoice) + " . Its a draw!";
  //ES6 syntax
  result_p.innerHTML =  `${convertTwoWord(userChoice)}${smallCompWord} equals ${convertTwoWord(computerChoice)}${smallUserWord}. Its a draw!`;
  //animation effect
  userChoice_div.classList.add('grey-glow');
  //ES5 syntax
  //setTimeout(function(){userChoice_div.classList.remove('grey-glow')}, 500);
  //ES6 syntax
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

//set the rules for the game
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
  }
}

function main(){
  //event listeners
  //ES5 syntax
  //rock_div.addEventListener('click', function(){ game("r"); });
  //ES6 syntax
  rock_div.addEventListener('click', () => game("r"));

  //ES5 syntax
  //paper_div.addEventListener('click', function(){game("p");});
  //ES6 syntax
  paper_div.addEventListener('click', () => game("p"));

  //ES5 syntax
  //scissors_div.addEventListener('click', function(){game("s");});
  //ES6 syntax
  scissors_div.addEventListener('click', () => game("s"));
}
main();
