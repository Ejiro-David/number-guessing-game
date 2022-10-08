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
    let numOfPoints = rangeWidth - 2;
    document.getElementById('userpoints').innerHTML = numOfPoints
}
