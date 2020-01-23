const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'You',
    author: 'Caroline Kepnes',
    alreadyRead: false
  },
  {
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    alreadyRead: true
  },
];

let booksDiv = document.createElement('div');
let bookList = document.createElement('ul');

booksDiv.appendChild(bookList);

for (let book in books) {
  let bookListItem = document.createElement('li')
  bookListItem.appendChild(document.createTextNode(`
  ${books[book].title} by ${books[book].author}.
  `));
  bookListItem.setAttribute('class', books[book].alreadyRead ? 'hasRead' : 'hasNotRead')
  bookList.appendChild(bookListItem);
}

document.body.appendChild(booksDiv);