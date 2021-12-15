'use strict'

let display = document.getElementById('display')
let numbers = document.querySelectorAll('[id*=Number]')
let operators = document.querySelectorAll('[id*=Operator]')
let newNumber = true
let newOperator
let lastNumber

const pendentOperation = () => newOperator !== undefined
const calculate = () => {
    if(pendentOperation()){
        const actualNumber = parseFloat(display.textContent)
        newNumber = true
        const result = eval(`${lastNumber}${newOperator}${actualNumber}`)
        displayReload(result)
        // if(newOperator == '+'){
        //     displayReload(lastNumber + actualNumber)
        // }else if(newOperator == '-'){
        //     displayReload(lastNumber - actualNumber)
        // }else if(newOperator == '*'){
        //     displayReload(lastNumber * actualNumber)
        // }else if(newOperator == '/'){
        //     displayReload(lastNumber / actualNumber)
        // }
    }
}
const displayReload = (text) => {
    if(newNumber){
        display.textContent = text
        newNumber = false
    }else{
        display.textContent += text
    } 
}
const selectOperator = (event) => {
    if(!newNumber){
        calculate()
        newNumber = true
        newOperator = event.target.textContent
        lastNumber = parseFloat(display.textContent)
    } 
}
const resultAtivation = () => {
    calculate()
    newOperator = undefined
}
const clearCalc = () => {
    display.textContent = ''
    newOperator = undefined
    newNumber = true
    lastNumber = undefined
}
const backspaceFunction = () => display.textContent = display.textContent.slice(0, -1)
const signalSwitchFunction = () => {
    newNumber = true
    displayReload(display.textContent * -1)
}
const decimal = () => display.textContent.indexOf('.') !== -1
const haveValue = () => display.textContent.length > 0
const dotFunction = () => {
    if(!decimal()){
        if(haveValue()){
            displayReload('.')
        }else{
            displayReload('0.')
        }
    }
}
const insertNumber = (event) => displayReload(event.target.textContent)
const keyboardMap = {
    '0': 'key0',
    '1': 'key1',
    '2': 'key2',
    '3': 'key3',
    '4': 'key4',
    '5': 'key5',
    '6': 'key6',
}
const mappingKeyboard = (event) => {
    const key = event.key
    document.getElementById(keyboardMap[key]).click()
}
numbers.forEach(number => number.addEventListener('click', insertNumber))
operators.forEach(operator => operator.addEventListener('click', selectOperator))
document.getElementById('result').addEventListener('click', resultAtivation)
document.getElementById('clear').addEventListener('click', clearCalc)
document.getElementById('backspace').addEventListener('click', backspaceFunction)
document.getElementById('signalSwitch').addEventListener('click', signalSwitchFunction)
document.getElementById('dot').addEventListener('click', dotFunction)
document.addEventListener('keydown', mappingKeyboard)
