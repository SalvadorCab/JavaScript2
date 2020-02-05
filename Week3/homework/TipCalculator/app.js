const bill = document.getElementById('bill');
const service = document.getElementById('service');
const people = document.getElementById('people');
const btn = document.getElementById('calc');
const tip = document.getElementById('tip');
const multi = document.getElementById('multi');

btn.addEventListener('click', e => {
    if (bill.value === '' || service.value === '' || people.value === '') {
        alert(`Please fill all the form before calculation!`);
        return;
    }
    let theTip = bill.value * service.value / 100;
    let tipPerPerson = theTip / people.value;
    tip.innerText = `$ ${tipPerPerson.toFixed(2)}`;
    if (people.value > 1) {
        multi.innerText = 'each';
    } else {
        multi.innerText = '';
    }
});