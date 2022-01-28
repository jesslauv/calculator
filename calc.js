function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "oops"
    }
    return num1 / num2
}

// console.log(divide(4, 2))
// console.log(add(4, 2))
// console.log(subtract(5, 2))
// console.log(multiply(4, 2))

function operate(num1, num2, operator) {
    switch (operator) {
        case "multiply":
            return multiply(num1, num2)
        case "add":
            return add(num1, num2)
        case "subtract":
            return subtract(num1, num2)
        case "divide":
            return divide(num1, num2) 
    }
}

console.log(operate(6, 2, "subtract"))

const nums = document.querySelectorAll(".num")
const displayBox = document.getElementById("display")
let num1 = null
let num2 = null
let operation = null

Array.from(nums).forEach(number => number.addEventListener("click", e => {
    val = e.target.value


    if (num1 !== null && num2 === null && operation === null && result !== null) {
        clear()
    }
    // 1 x 
    if (num1 === null && num2 === null && operation === null) {
        num1 = val 
        displayBox.innerHTML = num1
    }
    // 
    else if (num1 !== null && num2 === null && operation === null && result === null) {
        num1 += val
        displayBox.innerHTML = num1
    }
    else if (operation !== null && num1 !== null && num2 === null) {
        num2 = val
        displayBox.innerHTML = num2
    }
    // 1 x 23
    else if (operation !== null && num1 !== null && num2 !== null) {
        num2 += val
        displayBox.innerHTML = num2
    }
}))
    // if (result !== null)


    // if (operation === null) {
    //     if (num1 === null) {
    //         num1 = val 
    //     }
    //     else {
    //         if (result !== null) {
    //             num1 += val
    //         }
    //         else {
    //             clear()
    //             num1 = val 
    //         }
    //     }
    // }

    // if (operation !== null) {
    //     if (result === null) {
    //         if (num2 !== null) {
    //             num2 += val 
    //         }
    //         else {
    //             num2 = val 
    //         }
    //     }
    //     else {

    //     }
    // }




    
    // if (operation !== null && num2 ===null) {
    //     num2 = parseInt(val)
    // }
    // if (operation !== null && num2 !== null) {
    //     num2 = parseInt(val)
    //     console.log("num2: " + num2)
    // }
    // if (operation === null && num1 !== null && result !== null) {
    //     clear()
    //     num1 = val
    //     displayBox.innerHTML = num1
    // }

    // if (operation === null && num1 !== null && result === null) {
    //     num1 += val
    //     displayBox.innerHTML = num1
    // }
    // if (operation === null && num1 === null) {
    //     num1 = parseInt(val)
    //     displayBox.innerHTML = num1
    //     // console.log("num1: " + num1)
    // }
    // 

const operations = document.querySelectorAll(".operator")

let result = null

Array.from(operations).forEach(op => op.addEventListener("click", (e) => {
    
    console.log(operation)
    console.log(num1)
    console.log(num2)
    if (operation === null ) {
        operation = e.target.value
    }
    
    else {
        eval()
        operation = e.target.value
    }
   

    // console.log(operation)
    // if (num1 !== null) {
       
    // }
}))

const evalButton = document.querySelector(".eval")

console.log(operate(num1, num2, "multiply"))


evalButton.addEventListener("click", eval
    // num1 = result
    // num2 = null
)

function eval() {
    // console.log(num1)
    // console.log(num2)
    // console.log(operation)
    if (num1 !== null && num2 !== null && operation !== null) {
        result = operate(parseFloat(num1), parseFloat(num2), operation)
        console.log(result)
        if (result === "oops") {
            clear()
            displayBox.innerHTML = "-___- Impossible"
        }
        else {
            num1 = result
            num2 = null
            operation = null 
            if (result == parseInt(result)) {
                displayBox.innerHTML = parseInt(result)
            }
            else {
                displayBox.innerHTML = result.toFixed(10)
            }
           
        }
        
    }
}


//clear num1 = 0 result = null 


let clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", clear)

function clear() {
    result = null 
    num1 = null
    num2 = null
    operation = null
    displayBox.innerHTML = 0
}





    
    // displayBox.innerHTML = this.value
