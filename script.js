let guessRange = [1, 2];
let numOfPoints = document.getElementById("userpoints").innerHTML;
let stageNum = document.getElementById("userstage").innerHTML;
numOfPoints = 0
stageNum = 1
var inPlay;
let form = document.getElementById("form");
let startDisplay = '<button id="start-btn">yolo</button>';
let start = document.getElementById("start-btn");
let end = document.getElementById("end-btn");
let userName = document.getElementById('user-name').value

// to control html body, the conditional rendering of the start button or the game page
// k = the correct guess, K-index = the position of the correct guess on the array.



const gameStart = () => {
  inPlay = true;
  document.getElementById("game-body").hidden = false;
  start.hidden = true;
};

const gameEnd = () => {
  winOrLose(numOfPoints, stageNum, inPlay);
  inPlay = !inPlay;
  stageNum = 1;
  numOfPoints = 0;
  document.getElementById("game-body").hidden = true;
  start.hidden = false;
}

start.addEventListener("click", gameStart);
end.addEventListener("click", gameEnd);

function askName() {
  let username = sessionStorage.getItem("username");
  if (username === null) {
    username = prompt("Enter your name: ");
  }
  if (username != null) {
    document.getElementById("userpara").innerHTML = username;
    sessionStorage.setItem("username", username);
  }
  console.log(username);
}

function hint() {
  document.getElementById("guessrange").innerHTML = `${guessRange[0]} thru ${
    guessRange[guessRange.length - 1]
  }`;
}
function winOrLose(points, stage, isGameOn) {
  let winDisplay = document.getElementById("winDisplay");
  isGameOn
  //add vanishing +1 
  //steady display of point and stage
    ? (winDisplay.innerHTML = `Correct! You now have ${points} points, move to stage ${stage}`)
    : (winDisplay.innerHTML = `Wrong! Try Again?`);
}

const guessCheck = () => {
  let userInput = document.getElementById("userInput").value;
  let kIndex = Math.floor(Math.random() * guessRange.length);
  let k = guessRange[kIndex];
  console.log(userInput, k)
  console.log("k is ", k, "and user guessed ", userInput);
  if (userInput != null && k == Number(userInput)) {
    numOfPoints++;
    stageNum++;
    guessRange.push(guessRange[guessRange.length - 1] + 1);
    inPlay = true;
    hint();
  } else {
    inPlay = false;
  }

  form.reset();
  winOrLose(numOfPoints, stageNum, inPlay);
};

const refreshPage = () => {
  window.location.reload();
};

form.addEventListener("submit", guessCheck);
