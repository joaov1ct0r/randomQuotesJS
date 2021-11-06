const generateQuote = document.getElementById("generateQuote");

const quote = document.getElementById("quote");

const quoteAuthor = document.getElementById("quoteAuthor");

generateQuote.addEventListener("click", genQuotes);

let quotes = {};

quotes.selectedQuote = "";

quotes.selectedAuthor = "";

function genQuotes() {
    let api = "https://type.fit/api/quotes";

    fetch(api)
        .then(function (response) {
            let data = response.json();

            return data;
        })
        .then(function (data) {
            let selected = Math.floor(Math.random() * data.length);

            quotes.selectedQuote = data[selected].text;

            quotes.selectedAuthor = data[selected].author;
        })
        .then(function () {
            displayQuote();
        });
}

function displayQuote() {
    quote.innerHTML = `<p><span style="font-size: 5rem;">"</span>${quotes.selectedQuote}</p>`;

    quoteAuthor.innerHTML = `<p>${quotes.selectedAuthor}</p>`;
}
