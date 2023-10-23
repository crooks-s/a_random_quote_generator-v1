/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



/* 
  This array will store quote objects
  .quote = actual quote
  .source = name of person/character who said quote
  .citation = reference to book/movie/song/etc.
  .year = year the quote originated
  .tag = provides context to quote
*/

const quotes = [
  {
    quote: 'Only a Sith deals in absolutes.',
    source: 'Obi-Wan Kenobi',
    citation: 'Star Wars: Episode III - Revenge of the Sith',
    year: '2005',
  },
  {
    quote: 'GOD DID.',
    source: 'DJ Khaled',
    year: '2022',
  },
  {
    quote: "I don't have friends; I got family.",
    source: 'Dominic Toretto',
  },
  {
    quote: "If you don't know, now you know.",
    source: 'The Notorious B.I.G., Biggie Smalls',
    tag: 'song, music'
  },
  {
    quote: 'Wakka wakka wakka.',
    source: 'Pac-Man',
    tag: 'video game, fiction'
  }
]

/*
 Retrieves a random quote from quotes array using a random number generator.
 @returns {object} The quote object
*/

const getRandomQuote = () => {
  const randomNum = Math.floor(Math.random() * 5);
  return quotes[randomNum];
}

// Changes background color for each time button is clicked
const changeBgColor = () => {
  // create random RGB value 0-255
  const randomRGB = () => Math.floor(Math.random() * 256);

  const red = randomRGB();
  const green = randomRGB();
  const blue = randomRGB();
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}


/* Stores quote object returned from getRandomQuote() and concatenates html code using string literals. The html code is then used to populate the quote-box in index.html
*/

let randomQuote, currentQuote;
const printQuote = () => {

  // ensures new quote is different from last
  do {
    randomQuote = getRandomQuote();
  } while (randomQuote === currentQuote);
  currentQuote = randomQuote;

  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    html += `<span class="tag">${randomQuote.tag}</span>`;
  }
  html += `</p>`;

  changeBgColor();
  document.getElementById('quote-box').innerHTML = html; 
}

// refresh quotes at set interval of milli-seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);