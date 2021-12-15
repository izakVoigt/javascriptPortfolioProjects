let interval = setInterval(function(){
    let nowHour = new Date().getHours()
    let nowMinutes = new Date().getMinutes()
    let nowSeconds = new Date().getSeconds()
    let hour = document.getElementById('hours')
    let minute = document.getElementById('minutes')
    let second = document.getElementById('seconds')

    hour.textContent = nowHour
    minute.textContent = nowMinutes
    second.textContent = nowSeconds
}, 1000)