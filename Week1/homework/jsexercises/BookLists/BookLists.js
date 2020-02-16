// Array with all the books
const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
      imageDir: 'img/book1.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      imageDir: 'img/book2.jpg',
    },
    {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        alreadyRead: true,
        imageDir: 'img/book3.jpg',
      },
  ];    

let bookListCreator = function(listBooks){
    for(let i=0; i<listBooks.length; i++){
        let newPBookInfo = document.createElement("p");  // Creates new element p
        let newBookInList = document.createElement("li");  // Creates new li
        let bookCover = document.createElement("img");  // Creates new image for the book
        let bookText = books[i].title + " by " + books[i].author  // Creates the text to display
        newBookInList.className = "bookInList";   // Adds a CSS class to the element li
        bookCover.src = listBooks[i].imageDir;        

        //console.log(bookCover.src);

        let textNote = document.createTextNode(bookText);  // Creates a textNode with the text of bookText
        newPBookInfo.appendChild(textNote);   // Appends the text to the element p
        newBookInList.appendChild(newPBookInfo);  // Appends the element p to the element li
        newBookInList.appendChild(bookCover);  // Appends the book cover to the element li
        document.querySelector(".booksList").appendChild(newBookInList);   // Appends li to ul

        if(listBooks[i].alreadyRead === true)
          newBookInList.style.color = "green";
        else
          newBookInList.style.color = "red";
    
    }
}

function main(){
    bookListCreator(books);
}

main();
