var startTime = new Date().getTime();
var flag = true;
var cycleCounter = 0;
var cycleTime = 0;
var newPosition = 0;
// STEP 2
var imgEl = document.querySelector("img");

let initialConditions = function(imgEl){
// STEP 3
imgEl.style.left = "0px";
imgEl.style.margin = 0;
imgEl.style.padding = 0;
};

// STEP 4
let catWalk = function(){
    let currTime = new Date().getTime(); 

    // STEP 7
    if (newPosition >= (screen.width/2 - imgEl.width/2) && cycleCounter < 5){

        if(flag === true){
            imgEl.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";
            cycleTime = currTime;
            flag = false;
        }

        cycleCounter = (currTime - cycleTime)/1000;
        if(cycleCounter < 5){
            newPosition = screen.width/2 - imgEl.width/2;
        } else{
            imgEl.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
            startTime += cycleCounter * 1000;
        }

    } else {
        newPosition = ((currTime - startTime)/50) * 10;
    }

    // STEP 5
    if (newPosition > (screen.width - imgEl.width)){
        startTime =  currTime;
        cycleCounter = 0;
        flag = true;
        newPosition = 0;
    }
    
    imgEl.style.left = newPosition + "px";
    window.requestAnimationFrame(catWalk);
};

function main(){
    initialConditions(imgEl);
    catWalk();
}

main();
