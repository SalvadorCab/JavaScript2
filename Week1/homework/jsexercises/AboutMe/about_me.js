  
let changeStyles = function(){
    let bodyEl = document.querySelector("body");
    let firstSpanEl = document.querySelector("#nickname");
    let secondSpanEl = document.querySelector("#fav-food");
    let thirdSpanEl = document.querySelector("#hometown");
    let liEls = document.querySelectorAll("li");

    // Step 2
    bodyEl.style.fontFamily = "Arial, sans-serif";

    // Step 3
    firstSpanEl.innerHTML = "El Barto";
    secondSpanEl.innerHTML = "Lasagna";
    thirdSpanEl.innerHTML = "Heraklion";

    // step 4
    for(let i=0; i<liEls.length; i++)
        liEls[i].className = "list-item";
    
    //step 6
    let imgEl = document.createElement("img");
    imgEl.src = "img/barto.png";

    document.body.appendChild(imgEl);
}

function main(){
    changeStyles();
}

main();
