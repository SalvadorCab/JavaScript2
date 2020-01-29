const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
];

ulElements = document.createElement('ul');
myHobbies.forEach(item => {
    liElement = document.createElement('li');
    liElement.innerText = item;
    ulElements.appendChild(liElement);
});

document.body.appendChild(ulElements);