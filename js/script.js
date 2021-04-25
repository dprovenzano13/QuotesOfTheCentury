/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Please read README file before reviewing thanks!

// This is an array of objects containing all of my quotes and information about them.
let quotes = [
  {
    quote: 'Love your Enemies, for they tell you your Faults.',
    source: 'Benjamin Franklin',
    citation: "Poor Richard's Almanac",
    year: 1756
  },
  {
    quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    source: 'Dr. Martin Luther King Jr.',
    citation: 'Loving Your Enemies',
    year: 1957,
    tag: `#Religious`
  },
  {
    quote: 'Just keep swimming.',
    source: 'Dory',
    citation: 'Finding Nemo',
    year: 2003,
    tag: `#Entertainment`
  },
  {
    quote: 'Why so serious?',
    source: 'Joker',
    citation: 'The Dark Knight',
    year: 2008,
    tag: `#Entertainment`
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: 'John Lennon',
  },
  {
    quote: 'Do it.',
    source: 'Senator Palpatine',
    citation: 'Star Wars: Episode III',
    year: 2005,
    tag: '#Entertainment'
   }
];

/***
 * Randomly creates a number and uses that number
 * to return a random object from the quotes array.
 ***/

function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
    let randomQuote = array[randomNumber]
    return randomQuote;
}
/***
 * Randomly creates a number from 0 to 255
 * and assigns that number to each variable. All three variables are
 * combined into one variable to create a random RGB color.
 * I wasnt sure on how to change the background so I had to look it up on google.
 * Here is the link: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
 ***/
function getRandomColor () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbColor = `rgb(${red}, ${green}, ${blue})`
  document.body.style.backgroundColor = rgbColor;
  return rgbColor;
}

/***
 * Calls the getRandomQuote function.
 * Creates an HMTL string which displays all of the object's info a certain way.
 * Contains if statmets which determine if the objects contain
 * 'citations', 'year', or 'tag' parameters in them.
 * Changes background color of 'body'.
 * Changes background color of 'load-quote' which is the button.
 ***/
function printQuote() {
  let currentQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${currentQuote.quote}</p>`;
  html += `<p class="source">${currentQuote.source}`;

  if ('citation' in currentQuote) {
    html += `<span class="citation">${currentQuote.citation}</span>`;
  }

  if ('year' in currentQuote ){
    html += `<span class="year">${currentQuote.year}</span>`;
  }
  if ('tag' in currentQuote ){
    html += `<span class="year">${currentQuote.tag}</span> </p>`;
  }

  document.getElementById('quote-box').innerHTML = html;
  document.getElementById('load-quote').style.backgroundColor = getRandomColor();
  document.querySelector('body').style.backgroundColor = getRandomColor();
}

printQuote();

/***
 * Uses the setInterval method which allows the
 * function printQuote() to run every 10 seconds
 ***/
 function setTimer() {
   let timer = setInterval(printQuote, 10000);
 }

setTimer();

document.getElementById('load-quote').addEventListener("click", printQuote, false);
