const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
  { name: 'Bjorne', age: 24 },
];

function combineAges(people, combiner) {
  const ages = people.map(obj => obj.age);
  return `The collective age of the HYF team is:\n${combiner(ages)}`;
}

function add(ages) {
  const addedAges = ages.reduce((a, b) => a + b);
  return addedAges;
}

console.log(combineAges(hackYourFutureMembers, add));
