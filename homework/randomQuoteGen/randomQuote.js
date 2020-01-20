let quotes = ['The goal of socialism is communism.', 'Flow in the total openness of the living moment.', 'I\'m a pessimist because of intelligence, but an optimist because of will.', 'To tell the truth is revolutionary.', 'Those who do not move, do not notice their chains.', 'You may not be interested in strategy, but strategy is interested in you.'];
let authors = ['Vladimir Lenin', 'Brucce Lee', 'Antonio Gramsci', 'Antonio Gramsci', 'Rosa Luxemburg', 'Leon Trotsky'];

let button = document.querySelector('.new__quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

button.addEventListener('click', (e) => {
    e.preventDefault();
    index = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = `<i class="fas fa-quote-left"></i> ${quotes[index]}`;
    author.innerText = `- ${authors[index]}`;
});