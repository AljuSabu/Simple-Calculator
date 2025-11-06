//DOM Element Selection
const display = document.querySelector("#display")
const keys = document.querySelector(".keys")
const equals = document.querySelector("#equals")
const allClear = document.querySelector("#allClear")

//Object Values
const calculator = {
    displayValue : "0",
    firstOperand : null,
    waitingFOrSecondOperand : false,
    operator : null
}

//Update Display
const updateDisplay = ()=>{
    display.value = calculator.displayValue
}
updateDisplay()

//Handle Key Press
keys.addEventListener("click",(event)=>{
    const { target } = event
    if (!target.matches("button")){
        return
    }

    if (target.classList.contains("operator")){
        handleOperator(target.value)
        updateDisplay()
    }

    if (target.classList.contains("decimal")){
        InputDecimal(target.value)
        updateDisplay()
        return
    }
    
})
allClear.addEventListener("click",()=>{
    resetCalculator()
    updateDisplay()
})


//Input Digit
const inputDigit = (digit)=>{
    const { displayValue, waitingFOrSecondOperand } = calculator

    if (waitingFOrSecondOperand === true){
        calculator.displayValue = digit
        calculator.waitingFOrSecondOperand = false
    }else{
        if (displayValue === "0"){
            calculator.displayValue = digit
        }else{
            calculator.displayValue = displayValue + digit
        }
    }
}

//Input Decimal 
const InputDecimal = (dot)=>{
    if(calculator.waitingFOrSecondOperand === true){
        calculator.displayValue = "0."
        calculator.waitingFOrSecondOperand = false
        return
    }
    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot
    }
}