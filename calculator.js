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
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let total = 0

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
}