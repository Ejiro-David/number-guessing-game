let guessRange = [1, 2];
let numOfPoints = 0;
let inPlay = false;
let stageNum = 0;
let userGuess = document.getElementById("userguess").value;


// to control html body, the conditional rendering of the start button or the game page
//k = the correct guess, K-index = the position of the correct guess on the array.
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
  document.getElementById("guessrange").innerHTML = `${guessRange[0]} and ${
    guessRange[guessRange.length - 1]
  }`;
}
function winOrLose(points, stage, isGameOn) {
  let winDisplay = document.getElementById("winDisplay");
  isGameOn
    ? (winDisplay.innerHTML = `Correct!, you now have x ${points}, move to stage ${stage}`)
    : (winDisplay.innerHTML = `Wrong!, you have x points, Try Again?`);
}

function guessCheck(e) {
    e.preventDefault();
    console.log(userGuess)
    return
  let kIndex = Math.floor(Math.random() * guessRange.length);
  let k = guessRange[kIndex];

  if (k == userGuess) {
    numOfPoints++;
    document.getElementById("userpoints").innerHTML = numOfPoints;

    stageNum++;
    document.getElementById("userstage").innerHTML = stageNum;

    guessRange.push(guessRange[guessRange.length - 1] + 1);
    inPlay = true;
  } else {
    inPlay = false;
  }

  hint()
  winOrLose(numOfPoints, stageNum, inPlay);
}

function checker(e){
    console.log('this makes stuff easier')
}
form.

// Make form submission work, then work on start, win and loose displays
//listen for user guess submiition to trigger guesscheck() with userguess value
