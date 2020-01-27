const quotes = [
    {
      content: '“Nothing exists except atoms and empty space; everything else is just opinion”',
      author: 'Don Democritus',
    },
    {
        content: '“One thing I know, that I know nothing. This is the source of my wisdom”',
        author: 'Socrates',
    },
    {
        content: '“False words are not only evil themselves, but they infect the soul with evil”',
        author: 'Socrates',
    },
    {
        content: '“An unexamined life is not worth living”',
        author: 'Socrates',
    },
    {
        content: '“Worthless people live only to eat and drink; people of worth eat and drink only to live”',
        author: 'Socrates',
    },
    {
        content: '“Man: a being in search of meaning”',
        author: 'Plato',
    },
    {
        content: '“The worst of all deceptions is self-deception”',
        author: 'Plato',
    },
    {
        content: '“There is nothing permanent except change”',
        author: 'Heraclitus',
    },
    {
        content: '“Big results require big ambitions”',
        author: 'Heraclitus',
    },
    {
        content: '“Nothing is more active than thought, for it travels over the universe, and nothing is stronger than necessity for all must submit to it”',
        author: 'Thales',
    }
];


//console.log('rrrrrr');

//quotes.forEach((quote) => {
    //let content1 = document.createTextNode(`${quote.author}`);
    // console.log(content1);
    
    //var it = document.parentDOM.getElementsByClassName("quot")[0].style.backgroundColor = "red";
   // document.querySelector(".quot").innerHTML = content1;

 //});

 document.getElementById("quotebtn").addEventListener("click", function(){
    var randomquote = quotes[Math.floor(Math.random()*quotes.length)];
    console.log(randomquote.content);
    document.querySelector(".quot").innerHTML = randomquote.content;
    document.querySelector(".author").innerHTML = "- " + randomquote.author;
    //console.log(randomquote.author);
  });

 
