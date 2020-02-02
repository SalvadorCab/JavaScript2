const btn_down = document.getElementById('btn_down');
const session_time = document.getElementById('session_time');
let run;

btn_down.addEventListener("click", length_decrease);

function length_decrease() {
    let newNumber = Number(session_time.innerText);
    if (newNumber > 0) {
        newNumber--;
        session_time.innerHTML = newNumber;
    }
    min.innerText = newNumber;
    sec.innerText = '00';
}

const btn_up = document.getElementById('btn_up');

btn_up.addEventListener("click", length_increase);

function length_increase() {
    let newNumber = Number(session_time.innerText);
    newNumber++;
    session_time.innerHTML = newNumber;
    min.innerText = newNumber;
    sec.innerText = '00';
}

const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

const btn_play = document.getElementById('btn_play');
btn_play.addEventListener("click", time_passes);

function time_passes() {
    run = window.setInterval(() => {
        // btn_down.disabled = true;
        // btn_up.disabled = true;
        btn_down.removeEventListener('click', length_decrease);
        btn_up.removeEventListener('click', length_increase)
        let minutes = Number(min.innerText);
        let seconds = Number(sec.innerText);

        if (seconds !== 0) {
            seconds--;
        }
        else if (seconds === 0 && minutes !== 0) {
            seconds = 59;
            minutes--;
        }
        else {
            timer.innerHTML = "Time's up"
        }

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        min.textContent = minutes;
        sec.textContent = seconds;

    }, 1000);
}

const btn_pause = document.getElementById('btn_pause');
btn_pause.addEventListener("click", time_pauses);

function time_pauses() {
    btn_down.addEventListener('click', length_decrease);
    btn_up.addEventListener('click', length_increase)

    clearInterval(run);
}

const btn_reload = document.getElementById('btn_reload');
btn_reload.addEventListener("click", time_reloads);

function time_reloads() {
    btn_down.addEventListener('click', length_decrease);
    btn_up.addEventListener('click', length_increase)

    min.textContent = session_time.textContent;
    sec.textContent = '00';
    console.log(min.textContent)
}