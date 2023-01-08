const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')
const sreenwidth = document.querySelector(".screen").offsetWidth;
console.log(sreenwidth)

let calculations = []
let accumulativeCalculation

buttons.forEach(button => button.addEventListener('click',()=> calculate(button)))


function calculate(button){
    const value = button.textContent

    if (value === "Clear"){
        calculations = []
        screenDisplay.textContent = ""
    }
    else if (value === "="){
        let result = eval(accumulativeCalculation)
        screenDisplay.textContent = result
    }

    else if (calculations.length < 11){
        calculations.push(value)
        accumulativeCalculation = calculations.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

    else {
        screenDisplay.textContent = "ERROR"
    }




}