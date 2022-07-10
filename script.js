let buttons = document.querySelectorAll('.hand');
let handsScreen = document.querySelector('.hands');
let contest = document.querySelector('.contest');
let userScore = 0;
let aiScore = 0;


let handOptions = {
  "rock" : "./Assets/Rock.png",
  "paper" : "./Assets/Paper.png",
  "scissors" : "./Assets/Scissors.png"
}


const pickAiHand = () => {

  const hands = ["rock", "paper", "scissors"];
  let aiHand = hands[Math.floor(Math.random()*3.0)]
  document.getElementById("ai-pick").src = handOptions[aiHand];
  console.log(aiHand);
  return aiHand;
  
}

const pickUserHand = () => {

  buttons.forEach(button => {
    button.onclick = () => {
      handsScreen.style.display = "none";
      contest.style.display = "flex";
      let userHand = button.id;
      document.getElementById("user-pick").src = handOptions[button.id];
      console.log(userHand);
      aiHand = pickAiHand();
      calcResult(userHand, aiHand);
    }
  })
}  

let calcResult = (userHand, aiHand) => {

  let count = 0;
  if (userHand == "rock" && aiHand == "scissors") {
    count = 1;
  } 
  else if (userHand == "paper" && aiHand == "rock") {
    count = 1; 
  }
  else if (userHand == "scissors" && aiHand == "paper") {
    count = 1;
  }
  else if (userHand == "rock" && aiHand == "paper") {
    count = -1;
  }
  else if (userHand == "paper" && aiHand == "scissors") {
    count = -1;
  }
  else if (userHand == "scissors" && aiHand == "rock") {
    count = -1;
  }
  displayResult(count);
  return count;
}

let displayResult = (count) => {

  if (count == 1) {
    document.getElementById("decision").innerText = "YOU WIN!"; 
    console.log("you win");
    userScore+= 1;
  } 
  else if (count == -1) {
    document.getElementById("decision").innerText = "YOU LOSE!"; 
    aiScore+= 1;
  }
  else if(count == 0) {
    document.getElementById("decision").innerText = "IT'S A TIE!";
  }
  calcScore(userScore, aiScore); 
}

let calcScore = (userScore, aiScore) => {

  document.getElementById("user-score-display").innerText = userScore;
  document.getElementById("ai-score-display").innerText = aiScore;
}

let keepPlaying =() => {

  handsScreen.style.display = "flex";
  contest.style.display = "none";
}

document.getElementById('clear').onclick = () => {
  console.log("bruh");
  document.getElementById("user-score-display").innerText = 0;
  document.getElementById("ai-score-display").innerText = 0;
  userScore = 0;
  aiScore = 0;
  keepPlaying();
}
