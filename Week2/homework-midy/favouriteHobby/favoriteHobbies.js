const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
  'Programming again',
];

const unorderedList = document.createElement('ul');

myHobbies.forEach(i => {
  const item = document.createElement('li');
  item.innerHTML = i;
  unorderedList.appendChild(item);
});

document.body.appendChild(unorderedList);
