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
    tag: 'movie'
  },
  {
    quote: 'GOD DID.',
    source: 'DJ Khaled',
    year: '2022',
    tag: 'song'
  },
  {
    quote: "I don't have friends; I got family.",
    source: 'Dominic Toretto',
    tag: 'movie'
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
  const randomRGB = () => Math.floor(Math.random() * 255);

  const rgbOne = randomRGB();
  const rgbTwo = randomRGB();
  const rgbThree = randomRGB();
  document.body.style.backgroundColor = `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`;
}


/* Stores quote object returned from getRandomQuote() and concatenates html code using string literals. The html code is then used to populate the quote-box in index.html
*/

const printQuote = () => {
  const randomQuote = getRandomQuote();
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