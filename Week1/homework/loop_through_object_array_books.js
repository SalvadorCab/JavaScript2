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
];

for (var i = 0; i < books.length; i++) {
  console.log(books[i].title);
  console.log(books[i].author);
  console.log(books[i].alreadyRead);
 }

var par = document.createElement("p");
console.log (par)