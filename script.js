const allQuotes = [
    'Hello world!',
    'Beautiful Universe',
    'Don\'t be savage'
];

function showQuotes() {
    let randomQuotes = Math.floor( Math.random() * allQuotes.length );

    document.getElementById('quotes').innerHTML = allQuotes[randomQuotes];
}