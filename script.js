let guessRange = [1, 2];
let userName;

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


document.getElementById('userGuessed').addEventListener('submit', guessCheck)
