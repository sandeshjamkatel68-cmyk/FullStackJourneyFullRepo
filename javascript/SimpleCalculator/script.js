
let result = document.getElementById('result');

function calculate(op){
    let firstNumber = parseInt(document.getElementById('first-num').value);
    let secondNumber = parseInt(document.getElementById('second-num').value);
    let value = 0;
    
    if(op == "add"){
        value = firstNumber+secondNumber;
    }else if(op == "sub") {
        value = firstNumber-secondNumber;
    }else if(op == "mul") {
        value = firstNumber*secondNumber;
    }else if(op == "div") {
        value = firstNumber/secondNumber;
    }else if(op == "mod") {
        value = firstNumber%secondNumber;
    }

    result.innerHTML= value;
}
