let input1 = document.getElementById("num1")
let list = document.getElementById("list")
let input2 = document.getElementById("num2")

let button = document.getElementById("convert")
let result = document.getElementById("result")
function one (){
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let id= list.value;
    let res
    if (id == "+"){
        res= number1 + number2
    }
    if (id == "-"){
        res= number1 -number2
    }
    if (id == "*"){
        res= number1 * number2
    }
    if (id == "/"){
        res= number1 / number2

    }
    result.value=res
}
button.addEventListener("click", one)
console.log(list.value);
