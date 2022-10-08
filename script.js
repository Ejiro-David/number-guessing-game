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
    let numOfPoints = 0;
    document.getElementById('userpoints').innerHTML = numOfPoints
    console.log(numOfPoints)
}



const score = document.querySelector('.btn')
score.addEventListener("click", points)


