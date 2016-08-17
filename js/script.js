var quoteInterval;
var repeatCheck = [];
var index;
var quotes = [
  {
    quote: 'It always seems impossible until its done.',
    source: 'Nelson Mandela',
    catagory: 'Motivational'
  },
  {
    quote: 'We should not give up and we should not allow the problem to defeat us.',
    source: 'A. P. J. Abdul Kalam',
    catagory: 'Motivational'
  },
  {
    quote: 'In order to succeed, we must first believe that we can.',
    source: 'Nikos Kazantzakis',
    catagory: 'Motivational'
  },
  {
    quote: 'Always do your best. What you plant now, you will harvet later.',
    source: 'Og Mandino',
    catagory: 'Motivational'
  },
  {
    quote: 'Life is 10% what happens to you and 90% how you react to it.',
    source: 'Charles R. Swindoll',
    catagory: 'Motivational'
  },
  {
    quote: 'Start where you are. Use what you have. Do what you can.',
    source: 'Arthur Ashe',
    catagory: 'Motivational'
  },
  {
    quote: 'Some people are like clouds. When they go away, it\'s a brighter day.',
    source: 'Anonymous',
    catagory: 'Funny'
  },
  {
    quote: 'I love my job only when I\'m on vaction.',
    source: 'CoolFunnyQuotes.com',
    catagory: 'Funny'
  },
  {
    quote: 'They say money doesn\'t bring happiness, but everyone still wants to prove it for theemselves.',
    source: 'Anonymous',
    catagory: 'Money'
  }
];

 // Picks a random quote object from the array of quotes
function getRandomQuote() {
  index = Math.floor( Math.random() * quotes.length );

  while ( repeatCheck.indexOf(index) > -1){ //checks to make sure that a quote has not been repeated in the a particular cycle. Picks a different number if it has repeated
    index = Math.floor( Math.random() * quotes.length );
  }
  repeatCheck += index;
  if (repeatCheck.length === quotes.length ) { //clears the history of quotes so that thy cycle can start again
    repeatCheck = [];
  }
  var saying = quotes[index];
  return saying;
}

//Extracts information from chosen quote object and puts it in the variable 'message'
function printQuote() {
  var saying = getRandomQuote();
  var message = '<p class="quote">' + saying.quote + '</p>';
  message += '<p class="source">' + saying. source + '</p>';
  message += '<p class="catagory">' + saying.catagory + '</p>';
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
  getRandomColor();
}

function changeQuote() {
  quoteInterval = setInterval(printQuote, 15000);
}
function getRandomColor() {
  var letters = '56789ABCD';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 8)];
  }
  document.body.style.backgroundColor = color;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

changeQuote();
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
