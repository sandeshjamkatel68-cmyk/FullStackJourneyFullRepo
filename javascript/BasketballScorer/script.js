

let scoreHomeTeam = document.getElementById("score-home-team");

let scoreGuestTeam = document.getElementById("score-guest-team");

let count = 0;
function increment(point) {
    if(point == 'one'){
        count+=1;
    }else if(point == 'two'){
        count+=2;
    }else if(point == 'three'){
        count+=3;
    }
    scoreHomeTeam.textContent = count;

}

let counts = 0;

function increments(point) {
    if(point == 'one'){
        counts+=1;
    }else if(point == 'two'){
        counts+=2;
    }else if(point == 'three'){
        counts+=3;
    }
    scoreGuestTeam.textContent = counts;
}


function reset(){
    count = 0;
    counts = 0;
    scoreGuestTeam.textContent = counts;
    scoreHomeTeam.textContent = count;
}