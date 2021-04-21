/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

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
 * `getRandomQuote` function
***/
/* This function randomly creates a number and uses that number
to return a random object from the quotes array.*/

function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  for (let i = 0; i < array.length; i++) {
    let randomQuote = array[randomNumber]
    return randomQuote;
  }
}

function getRandomColor () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbColor = `rgb(${red}, ${green}, ${blue})`
  document.body.style.backgroundColor = rgbColor;
  return rgbColor;
}

function setTimer() {
  let timer = setInterval(printQuote, 10000);
}
/***
 * `printQuote` function
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

  // html += `</p>`


  document.getElementById('quote-box').innerHTML = html;
  document.getElementById('load-quote').style.backgroundColor = getRandomColor();

  getRandomColor();
  return html;
}

printQuote();
setTimer();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
