'use strict'

let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

let interval = setInterval(function(){
    let divDays = document.getElementById('dias')
    let divHours = document.getElementById('horas')
    let divMinutes = document.getElementById('minutos')
    let divSeconds = document.getElementById('segundos')
    let now = new Date().getTime()
    let distance = countDownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    divDays.textContent = days
    divHours.textContent = hours
    divMinutes.textContent = minutes
    divSeconds.textContent = seconds
}, 1000)