var minutes = 0;
var seconds = 0;
var tenths = 0;
var appendTenths = document.getElementById("tenths")
var appendSeconds = document.getElementById("seconds")
var appendMinutes = document.getElementById("minutes")
var startBtn = document.getElementById("start-btn")
var stopBtn = document.getElementById("stop-btn")
var resetBtn = document.getElementById("reset-btn")
var Interval;

startBtn.onclick = function() {
    console.log("start btn working");
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
}

stopBtn.onclick = function() {
    console.log("stop btn working");
    clearInterval(Interval);
}

resetBtn.onclick = function() {
    console.log("reset btn working");
    clearInterval(Interval);
    minutes = "00";
    tenths = "00";
    seconds = "00";
    appendTenths.innerHTML = tenths;
    appendSeconds.innerHTML = seconds;
}



function startTimer() {
    debugger
    tenths++;

    if (tenths <= 9) {
        appendTenths.innerHTML = "0" + tenths;
    }

    if (tenths > 9) {
        appendTenths.innerHTML = tenths;
    }

    if (tenths > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tenths = 0;
        appendTenths.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }
}