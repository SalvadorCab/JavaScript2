//Koristi codepen za ovo

// HTML
<div id="app"></div>

//Javascript:

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

// Get the app element
var app = document.querySelector('#app');

// Create markup
app.innerHTML = '<ul>' + myHobbies.map(function (myhobby) {
	return '<li>' + myhobby + '</li>';
}).join('') + '</ul>';