
$(document).ready(function() {
   
  //Function to obtain JSON data in the form of quote content from the Forismatic API and fade in
  var getQuote = function() { $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=42&callback=", function(json) {
    
    
    var quoteArray = [json][0];
    var goodQuotes = [];
    
    
    
    //Iterate through array of JSON objects first
    for (i = 0; i < quoteArray.length; i++) {
    //Then iterate through object key/values  
         if (quoteArray[i].content.length < 140) {
           goodQuotes.push(quoteArray[i]);
         }
     }
    
    
    //Get random quote from array
    var randomQuote = goodQuotes[Math.floor(Math.random() * goodQuotes.length + 1)];
    
  
    
    
       
    
    var slicedStr = randomQuote.content.slice(0, -3);
    
    console.log(slicedStr);
    
//If title field is blank, print "Unknown Author"    

$("#quotebox").animate({
        opacity: 0
      }, 375, function () {
        $(this).animate({
          opacity: 1
        }, 750); 
  $("#quotebox").html("<i class = 'fa fa-quote-left fa-2x quote-mark'></i>" + "<span class = 'quote-content>'" + slicedStr + "</span>" + "<i class = 'fa fa-quote-right fa-2x quote-mark'></i>" + "<br>" + "<h3>" + randomQuote.title + "</h3>");
  
      });
    });
  };

  
  


 

  //Enable sharing of quote via Twitter using Tweet button
  var tweetQuote = function() {
    window.open("https://twitter.com/intent/tweet?text=" +
  $('#quotebox').text());
  };

  $('#shareBtn').on('click', tweetQuote);
  $('#newQuoteBtn').on('click', getQuote);
  
   //Function to run when page is loaded
  //Ensures there is a quote when page is loaded initially 
  getQuote();
});
