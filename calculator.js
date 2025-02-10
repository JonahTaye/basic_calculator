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

let num1 = 0
let num2 = null
let operator = null
let total = null
function operate(num1, num2, operator) {
    if (num1 !== null) {
        total = num1
    }

    total = parseInt(total)
    num2 = parseInt(num2)
    

    switch (operator) {
        case "+":
            total = add(total, num2)
            break
        case "-":
            total = subtract(total, num2)
            break
        case "*":
            total = multiply(total, num2)
            break
        case "/":
            total = divide(total, num2)
            break
    }

    console.log(total)
}

let calc = document.querySelector(".numWithOperators")
let operand = ""
let values = []
let clickInput = ""
let op = []
const operationSigns = ["+", "-", "/", "*"]
calc.addEventListener("click", e => {
    let target = e.target.id
    
    if (target != "=" && !operationSigns.includes(target)) {
        clickInput += target
    } else {
        if (clickInput) values.push(clickInput)
        console.log(values)
        clickInput = ""

        if (target != "=") {
            op.push(target)
            
        }
        
    }

    if (target === "=" && values.length >= 1) {
        if (values.length == 2) {
            num1 = values[0]
            num2 = values[1]
            operator = op.at(-1)
           
        } else if (values.length == 1) {
            num1 = null
            num2 = values[0]
            operator = op.at(-1)
            console.log("Operation: " + operator)
            
        }
        
        console.log("equal sign")
        values = []
        operate(num1, num2, operator)
        num1 = 0
    } else if (operationSigns.includes(target)) {
        if (num1 !== null && values.length >= 2) {
            num1 = values[0]
            num2 = values[1]
            operator = op.at(-2)
            values = []
            console.log("not equal not null")
            operate(num1, num2, operator)
            num1 = null
            
        } else if (num1 === null && values.length >= 1) {
            num2 = values[0]
            operator = op.at(-2)
            values = []
            console.log('null')
            operate(num1, num2, operator)
        }    
    } 
})