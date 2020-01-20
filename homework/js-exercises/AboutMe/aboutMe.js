document.body.setAttribute('style', 'font-family: Arial, sans-serif');
document.getElementById('nickname').textContent = 'Lio';
document.getElementById('fav-food').textContent = 'Falafel';
document.getElementById('hometown').textContent = 'Heraklion';

let listItems = Array.from(document.querySelectorAll('ul li'));


for (let i in listItems) {
    listItems[i].classList.add('list-item');
}

let myImg = document.createElement('img');
myImg.setAttribute('src', 'https://i1.rgstatic.net/ii/profile.image/280073803452431-1443786206974_Q512/Stelios_Anastasakis.jpg');
myImg.setAttribute('style', 'width: 250px;');
document.body.appendChild(myImg);