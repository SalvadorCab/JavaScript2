const currentTime = document.getElementById('sessionLength');
const currentTimer = document.getElementById('timer');
const btnUp = document.getElementById('up');
const btnDown = document.getElementById('down');
const btnPlay = document.querySelector('.fa-play');
const btnPause = document.querySelector('.fa-pause');
const btnReset = document.querySelector('.fa-undo-alt');
let isRunning = false;
let interTimer;

const formatNumbers = num => {
    if (num < 10) {
        num = `0${num}`;
    }
    return num;
}

const updateTime = time => {
    currentTime.innerText = time;
    currentTimer.innerText = `${formatNumbers(time)}:00`;
}

btnUp.addEventListener('click', e => {
    if (!isRunning) {
        let getCurrentTime = currentTime.innerText;
        let newTime = Number(getCurrentTime) + 1;
        updateTime(newTime);
    }
});

btnDown.addEventListener('click', e => {
    if (!isRunning) {
        let getCurrentTime = currentTime.innerText;
        if (getCurrentTime > 0) {
            let newTime = Number(getCurrentTime) - 1;
            updateTime(newTime);
        }
    }
});

btnPlay.addEventListener('click', e => {
    if (!isRunning) {
        isRunning = true;
        [curTimerMin, curTimerSec] = currentTimer.innerText.split(':');
        interTimer = window.setInterval(() => {
            if (Number(curTimerSec) > 0 && isRunning) {
                curTimerSec = Number(curTimerSec) - 1;
                curTimerSec = formatNumbers(curTimerSec);
                currentTimer.innerText = `${curTimerMin}:${curTimerSec}`;
            } else if (Number(curTimerSec) == 0 && Number(curTimerMin) > 0 && isRunning) {
                curTimerSec = 59;
                curTimerMin = Number(curTimerMin) - 1;
                curTimerMin = formatNumbers(curTimerMin);
                currentTimer.innerText = `${curTimerMin}:${curTimerSec}`;
            } else if (isRunning) {
                currentTimer.innerHTML = `<h5 style="font-family: 'Orbitron', sans-serif">Done!</h5>`
                isRunning = false;
                clearInterval(interTimer);
            }
        }, 1000);
    }
});

btnPause.addEventListener('click', e => {
    if (isRunning) {
        clearInterval(interTimer);
        isRunning = false;
    }
});

btnReset.addEventListener('click', e => {
    if (!isRunning) {
        currentTimer.innerText = `${formatNumbers(currentTime.innerText)}:00`;
    }
});