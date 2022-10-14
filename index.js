
var displayCurrentValue = document.getElementById('number-input');

var resultDisplay= document.querySelector('.numberContainer')

var numberOneDisplay = document.getElementById('operand-one');

var operatorDisplay = document.getElementById('operator-display');

var numberTwoDisplay = document.getElementById('operand-two');

var numbers = document.querySelectorAll('.number');

var operations = document.querySelectorAll('.operation');

var equalsEl = document.querySelector('.equals');

var total = document.getElementById('equation-total');

var clear = document.querySelector('.clear');




let firstOperand = '';
let operatorValue = '';
let secondOperand = '';
let result = null;
let hasDot= false

clear.addEventListener('click', ()=>{

    function clear(){
        displayCurrentValue.value= '';
        operatorValue.innerText = '';
        operatorValue = '';
        operatorDisplay.innerHTML=''
        numberOneDisplay.innerText= '';
        numberTwoDisplay.innerText= '';
        total.innerText = ''
        result = null;
        hasDot= false
    }

    clear()
    

})


numbers.forEach(number =>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText === "." && !hasDot){
            hasDot = true

        }else if(e.target.innerText === "." && hasDot){
            return;
        }
        
        firstOperand = displayCurrentValue.value += e.target.innerText




    })

})


operations.forEach(operator =>{
    operator.addEventListener("click", (e)=>{
        displayCurrentValue.value = ""
        numberOneDisplay.innerText = ` ${parseFloat(firstOperand).toFixed(2)} `

        if(!displayCurrentValue)return;
        hasDot = false
        // operatorDisplay.innerText= `${e.target.innerText}`
        operatorValue = e.target.innerText
        operatorDisplay.innerText = operatorValue

        // console.log(operatorValue)

       
        // console.log(result)
    })
})

equalsEl.addEventListener("click", (e) =>{
    secondOperand = displayCurrentValue.value

    numberTwoDisplay.innerText = ` ${parseFloat(secondOperand).toFixed(2)} `

        displayCurrentValue.value = ""

    if(firstOperand && secondOperand){
        operation()

    }


})

function operation(){
    opOne = Number(numberOneDisplay.innerText)
    opTwo = Number(secondOperand)

    switch(operatorValue){
        case "+":
           result= opOne + opTwo;
           total.innerText = ` = ${parseFloat(result).toFixed(3)}`
           displayCurrentValue.value = `${parseFloat(result).toFixed(2)}`
           console.log(result)
           break;

        case "-":
            result = opOne - opTwo;
            total.innerText = ` = ${parseFloat(result).toFixed(3)}`
            displayCurrentValue.value = `${parseFloat(result).toFixed(2)}`
            console.log(result)
            break;
        case "÷":
            result = opOne / opTwo;
            total.innerText = ` = ${parseFloat(result).toFixed(3)}`
            displayCurrentValue.value = `${parseFloat(result).toFixed(2)}`
            console.log(result)
            break;
        case "x":
            result = opOne * opTwo;
            total.innerText = ` = ${parseFloat(result).toFixed(3)}`
            displayCurrentValue.value = `${parseFloat(result).toFixed(2)}`
            console.log(result)
            break;
        case "%":
            result = opOne % opTwo;
            total.innerText = ` = ${parseFloat(result).toFixed(3)}`
            displayCurrentValue.value = `${parseFloat(result).toFixed(2)}`
            console.log(result)
            break;        

    }
}



































































// function secondOperand (val){


//     // numsTwo = displayNum.value += val
//     // operandTwo = String(numsTwo)

//     // console.log(numsTwo)

//     // operandTwo = String(numsTwo)

//     // opTwoDisplay.innerText = operandTwo

//     // displayNum.append(operandTwo)
// }

 
