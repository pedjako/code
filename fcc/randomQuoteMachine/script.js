function setScript()
{
  /*create script*/
var script = document.createElement('script');
script.src = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=getQuote';
/*append script to the head of the html*/
document.head.appendChild(script); 
}

function getQuote(data) 
{
  document.getElementById('quote').innerHTML = '"' + data.quoteText + '"';
  document.getElementById('author').innerHTML = data.quoteAuthor;
  /*make quote global so tweetQuote may access it*/
  quote = data.quoteText + ' - ' + data.quoteAuthor;
}
/*tweet*/
function tweetQuote()
{
 /*add href attribute to tweet anchor button*/
  document.getElementById('twitter').href = 'https://twitter.com/intent/tweet?text=' + quote; 
}
