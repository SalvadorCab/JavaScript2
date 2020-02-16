
let showCurrentTime = function(){
let timePanel = document.querySelector(".showTime");
let today = new Date();
let time = fixTimeView(today.getHours(), today.getMinutes(), today.getSeconds());

console.log(time);
timePanel.innerHTML = time;
}

let fixTimeView = function(hours, minutes, seconds){
    let finalTime = "";
    
    if(hours == 0)
        finalTime += "00:"
    else
        finalTime += hours + ":"
    
    if(minutes == 0)
        finalTime += "00:"
    else
        finalTime += minutes + ":"

    if(seconds == 0)
        finalTime += "00"
    else
        finalTime += seconds;

    return finalTime;

}

function main(){
    setInterval(showCurrentTime, 1000);
}

main();
