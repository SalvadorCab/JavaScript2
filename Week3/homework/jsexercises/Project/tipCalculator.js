const totalBill = document.querySelector("#billTotal");   // First textbox
const service = document.querySelector("#service");   // Selector
const peopleNumber = document.querySelector("#peopleNumber");   // Second textbox
const button = document.querySelector(".buttonSubmit");      // Submit Button
const amountText = document.querySelector(".tipAmountText");
const tip = document.querySelector(".totalTip");
const eachText = document.querySelector(".tipEachText");

// Checks everytime someone type a value in the textfield
totalBill.addEventListener("input", function() {

    totalBill.value = totalBill.value.trim(); // Eliminate spaces

    if(isNaN(totalBill.value))
        totalBill.value = totalBill.value.slice(0, totalBill.value.length - 1);
});

peopleNumber.addEventListener("input", function() {

    peopleNumber.value = peopleNumber.value.trim(); // Eliminate spaces

    if(isNaN(peopleNumber.value) || peopleNumber.value.slice(-1) === ".")
        peopleNumber.value = peopleNumber.value.slice(0, peopleNumber.value.length - 1);
});

/*
function filterNumbers(element){
    element.value = element.value.trim(); // Eliminate spaces

    if(isNaN(element.value))
        element.value = element.value.slice(0, element.value.length - 1);   
}
*/

// Checks everytime someone clicked the button
button.addEventListener("click", function() {
    //Checks that the two textfields are not empty
    if(totalBill.value.length === 0 || peopleNumber.value.length === 0){
        alert("You need to fill in all the fields!");
        amountText.innerHTML = "";
        tip.innerHTML = "";
        eachText.innerHTML= "";
        return;
    }
    
    if(parseInt(peopleNumber.value) === 0){
        alert("At least one person must pay!");
        amountText.innerHTML = "";
        tip.innerHTML = "";
        eachText.innerHTML= "";
        return;
    }

    amountText.innerHTML = "TIP AMOUNT";
    tip.value = calculateTip(parseFloat(totalBill.value),         // Calculates the tip and assignes it
                        parseInt(service.value), parseInt(peopleNumber.value)); // to the tip parragraph.
    tip.value = parseFloat(tip.value).toFixed(2);
    tip.innerHTML = "$" + tip.value;
    if(parseInt(peopleNumber.value)>1)
        eachText.innerHTML = "each";
    else    
        eachText.innerHTML = "";
    
});

function calculateTip(bill, percentage, numberOfPeople){
    return (bill * percentage/100)/numberOfPeople;
}