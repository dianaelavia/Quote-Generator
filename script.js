//let apiQuotes = [];


const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader");


//Show loading
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

//Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show quote
function newQuote(){
    loading();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
  //console.log(quote.author);
  
  //Check if author name is blank. Add Anonymous
  if(!quote.author){
    authorText.innerHTML = "Anonymous";
  }else{
    authorText.innerHTML = quote.author;
  }
  // Cehck quote length to determine styling
  if(quote.text.length>120){
    quoteText.classList.add("long-quote");
  }else{
    quoteText.classList.remove("long-quote");
  }
  //Set Quote , Hide Loader
   quoteText.textContent = quote.text;
   setTimeout(complete,800);
}

//Tweet Once
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}
//Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

// Get quotes from API 
// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//      const response = await fetch(apiUrl);
//      apiQuotes = await response.json();
//     // console.log(apiQuotes[23]);
//     newQuote();
//     }
//     catch(error){
// // Catch Error here
//     }
// } 

   //On load
   //getQuotes();
 newQuote();
  //loading();