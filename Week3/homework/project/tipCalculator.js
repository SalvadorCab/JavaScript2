const btn = document.getElementById('btn');
const billAmount = document.getElementById('billAmount');
const service = document.getElementById('service');
const peopleSharing = document.getElementById('peopleSharing');
const tipAmount = document.getElementById('tipAmount');
const each = document.getElementById('each');

btn.addEventListener("click", tip_calculator);

function tip_calculator() {
    if (billAmount.value === '' || service.value === '' || peopleSharing.value === '') {
        alert(`You need to fill in all the fields!`)
    }
    else {
        let tip_amount = billAmount.value * service.value / peopleSharing.value / 100;
        tipAmount.textContent = `$ ${tip_amount.toFixed(2)}`
        console.log(tip_amount)
    }
    if (peopleSharing.value == 1) {
        each.textContent = '';
    }
    else {
        each.textContent = 'each';
    }
}

