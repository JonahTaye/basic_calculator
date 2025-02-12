const buttons = document.querySelector(".numWithOperators")
const operation = document.querySelector(".operation")
const finalvalue = document.querySelector(".result")
const OPERATORS = ["+", "-", "*", "/", "="]
let index = 0
let result = null
let reset = false
let number = []
let operator = []

function add(number1, number2) {
    return number1 + number2
}

function subtract(number1, number2) {
    return number1 - number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    if (number2 == 0) return "ERROR"
    return number1 / number2
}

function operate(num1, num2, operator) {
    let total = null
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    
    switch (operator) {
        case "+":
            total = add(num1, num2)
            break
        case "-":
            total = subtract(num1, num2)
            break
        case "*":
            total = multiply(num1, num2)
            break
        case "/":
            total = divide(num1, num2)
            break
    }

    return total
}

function calculator(target) {
    if (target === "clear") {
        number = []
        index = 0
        result = null
    } else if (!OPERATORS.includes(target)) {
        if (number[index] === undefined) number[index] = target
        else {
            if (number[index].length < 15) {
                console.log(number[index].length)
                number[index] += target
            }
        }
    } else if (number.length >= 1) {
        if (number.length >= 2) {
            if (!result) {
                result = operate(number[0], number[index], operator.at(-1))
            } else {
                result = operate(result, number[index], operator.at(-1))
            }

            finalvalue.textContent = result
        }
        
        index++
        if (target !== "=") operator.push(target)
        else {
            result = null
            number = []
            index = 0
        }
    }
    console.log(number)
}

function display(value) {
    if (value === "clear") {
        operation.textContent = ""
        finalvalue.textContent = 0

    } else if (!OPERATORS.includes(value)) {
        if (number[index].length < 15) {
            if (reset) {
                operation.textContent = value
                finalvalue.textContent = 0
            } else operation.textContent += value
        }

        reset = false
    } else {
        if (value !== "=" && number.length != 0) {
            if (!result) operation.textContent = `${number[0]} ${operator.at(-1)} `
            else operation.textContent = `${result} ${operator.at(-1)} `
        } else if (value === "="){
            if (operation.textContent.length > 4) {
                if (!operation.textContent.includes(value)) {
                    operation.textContent += ` ${value}`
                }
                
            } else {
                operation.textContent = 0
            }
            reset = true
        }
    }
}

buttons.addEventListener("click", event => {
    let target = event.target.id
    calculator(target)
    display(target)
})

