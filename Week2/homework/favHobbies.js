const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
];

const body = document.querySelector('body');
const newUl = document.createElement('ul');


function newList(hob) {
    hob.forEach(item => {
        const newLi = document.createElement('li');
        newLi.innerHTML = item;
        newUl.appendChild(newLi)
    })
    body.appendChild(newUl);
}

newList(myHobbies)
