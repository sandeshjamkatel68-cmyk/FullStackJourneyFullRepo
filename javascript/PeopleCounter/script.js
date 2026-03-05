// document.getElementById('count-el').innerHTML = 5;
// let count = 0;
// console.log(count);


// console.log(myAge);
// let myAge = 21;
// console.log(myAge);

// let val = 3+34;
// console.log(val);

// let myAge = 21;
// let dogRatio = 7;

// let myDogAge = myAge * dogRatio;

// console.log(myDogAge);


// let bonusPoint = 50;
// bonusPoint +=100;
// bonusPoint -=25;

// bonusPoint +=70;

// console.log(bonusPoint);


let incrementBtn = document.getElementById('increment-btn');
let countValue = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let count = 0;

function increment(){
    count +=1;
    countValue.innerHTML=count;
}

increment();

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countValue.textContent =count;
}
save();






// function countDown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// countDown();
// countDown();
// countDown();

// function logsFortyTwo() {
//     console.log(42);
// }


// logsFortyTwo();
// logsFortyTwo();
// logsFortyTwo();

// let lap1 = 34;
// let lap2 = 32;
// let lap3 = 30;

// function totalLaps(){
//     let sum = lap1+lap2+lap3;
//     console.log(sum);
// }

// totalLaps();



// let lapsCompleted  = 0;


// function incrementLabs() {
//     lapsCompleted +=1;
// }
// incrementLabs();
// incrementLabs();
// incrementLabs();

// console.log(lapsCompleted);