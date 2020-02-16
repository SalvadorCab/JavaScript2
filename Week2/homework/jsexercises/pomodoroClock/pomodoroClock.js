const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");

const setterText = document.querySelector(".setter");
const chronometerText = document.querySelector(".activeChronometer");

let minutes = parseInt(setterText.innerHTML);
let seconds = 0;
let stopflag = false;
let running = false;
let startClicked = false;

const addZero = number => number<10 ? ("0" + number) : number;
const displayTime = (mins, secs) => (mins === 0 && secs === 0) ? 
  chronometerText.innerHTML = "Time's Up!":
  chronometerText.innerHTML = addZero(minutes) + ":" + addZero(seconds);

arrowUp.addEventListener("click", function(){
  if(minutes < 99 && running === false) {
    minutes++;
    setterText.innerHTML = minutes;
  }
});

arrowDown.addEventListener("click", function(){
  if(minutes > 1 && running === false){
    minutes--
    setterText.innerHTML = minutes;
  }
});

play.addEventListener("click", function(){
  chronometerText.innerHTML = addZero(minutes) + ":" + addZero(seconds);
  stopflag = false;
  running = true;
  if(startClicked === false){
    startClicked = true;
    startTimer();
  }
});

const startTimer = a => {
  const timer = setInterval(function(){ 
    if(stopflag === true){
      clearInterval(timer);
      startClicked = false;
      seconds++
    }

    if(seconds === 0){
      if(minutes === 0){
        clearInterval(timer);
        startClicked = false;
        running = false;
        seconds = 0;
      }
      else {
        minutes--;
        seconds = 59;
      }
    }
    else
      seconds--;
    
  displayTime(minutes, seconds);
    
  }, 1000)
};

pause.addEventListener("click", function(){
  stopflag = true;
});

stop.addEventListener("click", function(){
  running = false;
  stopflag = true;
  minutes = 25;
  seconds = 0;
  chronometerText.innerHTML = addZero(minutes) + ":" + addZero(seconds);
  setterText.innerHTML = addZero(minutes);
});

