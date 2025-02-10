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

let num1 = null
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
let count = 0
let values = []
let clickInput = ""
calc.addEventListener("click", e => {
    let target = e.target.id

    if (target != "*" && target != "+" && target != "-" && target != "/" && target != "=") {
        clickInput += target
        
    } else {
        count++
        values.push(clickInput)
        if (count < 2) values.push(target)
        clickInput = ""
    }
    console.log("Count" + count)
    if (count == 2) {
        num1 = values[0]
        operator = values[1]
        num2 = values[2]
        if (target === "=") {
            console.log("Empty")
            values = []
            count = 0
        } else {
            console.log("Not empty")
            values = [target]
            count++ 
        }

        console.log("if")
        operate(num1, num2, operator)

    } else if (count > 2 && values.length > 1) {
        num1 = null
        num2 = values[1]
        operator = values[0]
        console.log(values)
        
        if (target === "=") {
            values = []
            count = 1
        } else {
            values = [target]
            count++ 
        }

       
        operate(num1, num2, operator)
    }
   

    
    //console.log(values)
})