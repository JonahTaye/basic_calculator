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

const buttons = document.querySelector(".numWithOperators")
let index = 0
let number = []
let operator = []
let result = null
const OPERATORS = ["+", "-", "*", "/", "="]

buttons.addEventListener("click", event => {
    let target = event.target.id

    if (!OPERATORS.includes(target)) {
        if (number[index] === undefined) number[index] = target
        else number[index] += target
    } else if (number.length >= 1) {
        if (number.length >= 2) {
            if (!result) {
                result = operate(number[0], number[index], operator.at(-1))
            } else {
                result = operate(result, number[index], operator.at(-1))
            }

            console.log(result)
        }
        
        index++
        if (target !== "=") operator.push(target)
        else {
            result = null
            number = []
            index = 0
        }
    }
})