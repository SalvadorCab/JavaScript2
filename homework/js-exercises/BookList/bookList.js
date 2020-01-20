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

let list = document.createElement('ul');
document.body.appendChild(list);
images = ['https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png', 'https://images-na.ssl-images-amazon.com/images/I/51aKPFuUy1L._SX324_BO1,204,203,200_.jpg'];

for (let i in books) {
    let book = document.createElement('li');
    let image = document.createElement('img');
    image.setAttribute('src', images[i]);
    image.setAttribute('style', 'width:200px;');
    book.textContent = `${books[i].title} by ${books[i].author}`;
    let newLine = document.createElement('br');
    book.appendChild(newLine);
    let link = document.createElement('a');
    link.setAttribute('href', images[i]);
    link.appendChild(image);
    book.appendChild(link);
    if (books[i].alreadyRead) {
        book.style.backgroundColor = 'green';
    } else {
        book.style.backgroundColor = 'red';
    }
    list.appendChild(book);
}