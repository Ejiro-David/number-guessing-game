let guessRange = [1, 2];
let userName = document.getElementById('userName')


console.log(userName)
function getName(){
  let username = sessionStorage.getItem("username");
  if(userName !== null){
    document.getElementById('dis-username').innerHTML = userName
  }
}