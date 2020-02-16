var generatedNum = 100;

let quotes = {
    quote: ["Alea iacta est", "Vestis virum reddit", "Fortes fortuna adiuvat", "Acta est fabula",
            "Militiae species amor est", "Nulla dies sine línea"],
    author: ["Ivlivs Caesar", "Qvintilianvs", "Qvintvs Septimivs Florente", "Caesar Avgvstvs", 
            "Ovidio", "Caivs Plinivs Secvndvs"]
};

let generateQuote = function(){
    let randomNum = Math.floor(Math.random() * 5);

    if(randomNum === generatedNum && generatedNum !== quotes.quote.length)
        randomNum += 1
    
    if(randomNum === generatedNum && generatedNum !== 0)
        randomNum -= 1

    generatedNum = randomNum;
    document.querySelector(".quote").innerHTML = quotes.quote[randomNum];
    document.querySelector(".author").innerHTML = "- " + quotes.author[randomNum];
};

document.querySelector(".boton").addEventListener("click", generateQuote);

