let guessRange = [1, 2];
let userName;

const setNameStore = () => {
    userName = document.getElementById('userName').value
    sessionStorage.setItem("username", userName);
}

 userName = sessionStorage.getItem('username')
 document.getElementById('dp-username').innerHTML = userName;
 