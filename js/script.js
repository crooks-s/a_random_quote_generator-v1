/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// This array will store quote objects
// source is name of person/character who said quote
const quotes = [
  {
    quote: '',
    source: '',
    citation: ''
  },
  {
    quote: '',
    source: '',
    year: ''
  },
  {
    quote: '',
    source: ''
  },
  {
    quote: '',
    source: ''
  },
  {
    quote: '',
    source: '',
  }
]

// This function retrieves a random quote from quotes array using
// a random number generator
const getRandomQuote = () => {
  const randomNum = Math.floor(Math.random() * 5);
  const getQuote = quotes[randomNum];
  return getQuote;
}


// This will print the quote to 
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);