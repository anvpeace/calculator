
let displayNum = document.getElementById('numberInput');
let firstOperand = document.getElementsByClassName('numberDisplay');




function display (val){

    nums = displayNum.value += val

    operandOne = String(nums)
   
    firstOperand.innerHtml = `${parseFloat(operandOne).toFixed(7)}`

    console.log(operandOne)
    console.log(firstOperand)

}

function decimal(dot){

    if(!displayNum.value.includes(dot)){
        displayNum.value += dot
    }
    // }else if(displayNum.value.includes(dot)){
    //     console.log("decimal found")
    //     console.log(firstOperand)

    // }

}

// function decimal(dot){

//     let firstOp = document.getElementsByClassName('numberDisplay');
//     console.log(firstOp)

//     if(!firstOp.includes(dot)){
//         firstOp += val

//     }
// }


 
