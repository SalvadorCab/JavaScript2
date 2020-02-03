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


books.forEach(output);
function output(title,author,alreadyRead) {
  console.log(title,author,alreadyRead)
  
}