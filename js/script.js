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
    source: ''
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
    source: ''
  },
  {
    quote: '',
    source: '',
  }
]


// Random number generator to use with getRandomQuote function.
// The random number will be used to access a random index in quotes array
const randomNum = Math.floor(Math.random() * 5);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);