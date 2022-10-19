let guessRange = [1, 2];
var userPoints = 0
var stageNum = 1;
document.getElementById('dp-userstage').innerHTML = stageNum;
let userName;
var inPlay;

const setNameStore = () => {
    userName = document.getElementById('userName').value
    sessionStorage.setItem("username", userName);
}

 userName = sessionStorage.getItem('username')
 document.getElementById('dp-username').innerHTML = userName;
 
 const setHint = () => {
    let firstNum = guessRange[0];
    let lastNum = guessRange[guessRange.length - 1]

    document.getElementById('guessrange').innerHTML = `${firstNum} thru ${lastNum}`
 }


 const guessCheck = () => {
    let userInput = document.getElementById("userInput").value;
    let kIndex = Math.floor(Math.random() * guessRange.length);
    let k = guessRange[kIndex];
    console.log("k is ", k, "and user guessed ", userInput);
    if (userInput != null && k == Number(userInput)) {
    document.getElementById('dp-userpoints').innerHTML = userPoints++;
      stageNum++;
      guessRange.push(guessRange[guessRange.length - 1] + 1);
      inPlay = true;
      document.getElementById('winOrLose').innerHTML = 'Correct! To the next'
      setHint();
    } else {
      inPlay = false;
      document.getElementById('winOrLose').innerHTML = 'Wrong. Try again.'
    }
  
    form.reset();
  };

let form = document.getElementById('guessForm')
form.addEventListener('click', guessCheck)


