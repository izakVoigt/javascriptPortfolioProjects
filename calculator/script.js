'use strict'

let display = document.getElementById('display')
let numbers = document.querySelectorAll('[id*=Number]')

const insertNumber = (event) => {
    display.textContent = event.target.textContent
}

numbers.forEach(number => number.addEventListener('click', insertNumber))