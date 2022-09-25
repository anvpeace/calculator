// First this calculator application will take the value of the button selected by the client 

// Second the application will display the number selected by the client in the NumDisplay input field

const calculator = {
    displayValue: 0,
    operandOne: null,
    isSecondOperand: false,
    operator: null
}

function displayUpdate (){
    const display = document.querySelector(".numberInput")

    display.value = calculator.displayValue
}

displayUpdate();



const numbers = document.querySelector(".btnDisplay");

numbers.addEventListener("click", (event) =>{
    const {target} = event;

    switch (target.match){
        case !target.match:
            break;
        case target.classList.contains("operator"):
            console.log("operator", target.value);
            break;
        case target.classList.contains("decimal"):
            console.log("decimal", target.value);
            break;
        case target.classList.contains("all-clear"):
            console.log("all-clear", target.value);
            break;

    }
    console.log("digit", target.value)
})