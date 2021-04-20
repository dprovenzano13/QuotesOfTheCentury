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
    citation: "Book: Poor Richard's Almanac",
    year: 1756
  },
  {
    quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    source: 'Dr. Martin Luther King Jr.',
    citation: 'Sermon: Loving Your Enemies',
    year: 1957,
    tag: `#Religious`
  },
  {
    quote: 'My fellow Americans: ask not what your country can do for you—ask what you can do for your country.',
    source: 'John F. Kennedy',
    citation: 'Speach: Inaugural Address',
    year: 1961,
    tag: `#Political`
  },
  {
    quote: 'A house divided against itself cannot stand.',
    source: 'Abraham Lincoln',
    citation: 'Speech: House Divided',
    year: 1858,
    tag: `#Political`
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: 'John Lennon',
  },
  {
    quote: 'Do it.',
    source: 'Senator Palpatine',
    citation: 'Star Wars: Episode III',
    year: 2005
   }
];

/***
 * `getRandomQuote` function
***/
/* This function randomly creates a number and uses that number
to retrieve objects from the array of objects.*/
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
  let rgbColor = `rbg(${red}, ${green}, ${blue})`
  document.body.style.backgroundColor = rgbColor;
  return rgbColor;
}

// function setTimer() {
//   let timer = setInterval(printQuote, 10000);
// }
/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = ``;
  html += `<p class="quotes">${randomQuote.quote}</p>`
  html += `<p class="source">${randomQuote.source}`

  if ('citation' in randomQuote) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  }

  if ('year' in randomQuote ){
    html += `<span class="year">${randomQuote.year}</span>`
  }
  if ('tag' in randomQuote ){
    html += `<span class="year">${randomQuote.tag}</span></p>`
  }
  document.getElementById('quote-box').innerHTML = html;
  return html;
}
// console.log(printQuote());
printQuote();
// getRandomColor();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
