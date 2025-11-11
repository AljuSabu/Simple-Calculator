//DOM Elements
const display = document.querySelector("#display")
const keys = document.querySelector(".keys")
const allClear = document.querySelector("#allClear")

//Object Values
const calculator = {
    displayValue : "0",
    firstOperand : null,
    waitingForSecondOperand : false,
    operator : null
}

//Update Display
const updateDisplay = ()=>{
    display.value = calculator.displayValue || "0"
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
        return
    }

    if (target.classList.contains("decimal")){
        inputDecimal(target.value)
        updateDisplay()
        return
    }

    inputDigit(target.value)
    updateDisplay()
})

allClear.addEventListener("click",()=>{
    resetCalculator()
    updateDisplay()
})



//Input Digit
const inputDigit = (digit)=>{
    const { displayValue, waitingForSecondOperand } = calculator

    if (waitingForSecondOperand === true){
        calculator.displayValue = digit
        calculator.waitingForSecondOperand = false
    }else {
        if (displayValue === "0"){
            calculator.displayValue = digit
        }else {
            calculator.displayValue = displayValue + digit
        }
    }
}

//Input Decimal 
const inputDecimal = (dot)=>{
    if (calculator.waitingForSecondOperand === true){
        calculator.displayValue = "0."
        calculator.waitingForSecondOperand = false
        return
    }
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot
    }
}

//Operator Handling
const handleOperator = (nextOperator)=>{
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue)

    if (nextOperator === "%"){
        calculator.displayValue = `${parseFloat((inputValue/100).toFixed(7))}`
        if (firstOperand != null && operator){
            const result = calculate(firstOperand, parseFloat(calculator.displayValue),operator)
            calculator.displayValue = `${parseFloat(result.toFixed(7))}`
            calculator.firstOperand = result
        }
        calculator.waitingForSecondOperand = true
        calculator.operator = null
        return 
    }

    if (operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator
        return
    }

    if (firstOperand == null && !isNaN(inputValue)){
        calculator.firstOperand = inputValue
    }else if (operator){
        result = calculate(firstOperand, inputValue, operator)

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`
        calculator.firstOperand = result
    }

    calculator.waitingForSecondOperand = true
    calculator.operator = nextOperator
}

//Calcultor Logic
const calculate = (firstOperand, secondOperand, operator)=>{
    if (operator === "+"){
        return firstOperand + secondOperand
    }else if (operator === "-"){
        return firstOperand - secondOperand
    }else if (operator === "*"){
        return firstOperand * secondOperand
    }else if (operator === "/"){
        return firstOperand /secondOperand
    }
    return secondOperand
}

// Reset Calculator 
const resetCalculator = ()=>{
    calculator.displayValue = "0"
    calculator.firstOperand = null
    calculator.waitingForSecondOperand = false
    calculator.operator = null
}