const updateTime = () => {
    if (document.querySelector('h1') !== null) {
        lastTime = document.querySelector('h1');
        lastTime.remove();
    }

    let date = new Date;
    let minutes, seconds;

    let time = document.createElement('h1');
    if (date.getMinutes() < 10) {
        minutes = `0${date.getMinutes()}`;
    } else {
        minutes = date.getMinutes();
    }

    if (date.getSeconds() < 10) {
        seconds = `0${date.getSeconds()}`
    } else {
        seconds = date.getSeconds();
    }
    time.textContent = `${date.getHours()}:${minutes}:${seconds}`;
    document.body.appendChild(time);
}

window.setInterval(updateTime, 500);