let guessRange = [1,2];
let numOfPoints = 0;

let start = false; // to control html body, the conditional rendering of the start button or the game page
//k = the correct guess, K-index = the position of the correct guess on the array.
function askName () {
    let username = sessionStorage.getItem('username');

    if(username === null){
        username = prompt('Enter your name: ');
    }
    
    if(username != null){
        document.getElementById('userpara').innerHTML = username;
        sessionStorage.setItem('username', username)
    }

    console.log(username)
}



function points(rangeWidth){
    document.getElementById('userpoints').innerHTML = numOfPoints
    // console.log(numOfPoints)
    // console.log(Math.floor(Math.random() * guessRange.length ))
    guessRange.push(guessRange[guessRange.length - 1] + 1)
    let kIndex = Math.floor(Math.random() * guessRange.length)
    let k = guessRange[kIndex]

    let userGuess = document.getElementById('userguess').value;//listen for onKyPress to know when user has guess
    console.log(guessRange)
    console.log(k)
    console.log(userGuess == k)
}



const score = document.querySelector('.btn')
document.getElementById('guessrange').innerHTML =  `${guessRange[0]} ${guessRange[guessRange.length - 1]}`

window.addEventListener("click", points)
// console.log(guessRange)


