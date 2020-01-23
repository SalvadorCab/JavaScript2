document.body.setAttribute('style', 'font-family: Arial, sans-serif;');

document.getElementById('nickname').innerHTML = 'Midy';
document.getElementById('fav-food').innerHTML = 'Pizza';
document.getElementById('hometown').innerHTML = 'Heraklion';

let lists = document.getElementsByTagName('li');

for (let list in lists) {
  lists[list].classList.add('list-item');
}