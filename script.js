let guessRange = [1, 2];
let numOfPoints = 0;
let inPlay = false;
let stageNum = 1;
let form = document.getElementById("form");

// to control html body, the conditional rendering of the start button or the game page
// k = the correct guess, K-index = the position of the correct guess on the array.
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
    ? (winDisplay.innerHTML = `Correct! You now have ${points} points, move to stage ${stage}`)
    : (winDisplay.innerHTML = `Wrong! Try Again?`);
}

const guessCheck = () => {
  let userInput = document.getElementById("userInput").value;
  let kIndex = Math.floor(Math.random() * guessRange.length);
  let k = guessRange[kIndex];
  console.log('k is ', k, 'and user guessed ', userInput )
  if (userInput != null && k == Number(userInput)) {
    numOfPoints++;
    document.getElementById("userpoints").innerHTML = numOfPoints;

    stageNum++;
    document.getElementById("userstage").innerHTML = stageNum;

    guessRange.push(guessRange[guessRange.length - 1] + 1);
    inPlay = true;
    hint()
  } else {
    inPlay = false;
  }

  form.reset()
  winOrLose(numOfPoints, stageNum, inPlay);
}

const refreshPage = () => {
  window.location.reload()
}


form.addEventListener('submit', guessCheck)

