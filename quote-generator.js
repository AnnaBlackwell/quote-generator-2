// Make and array of quotes
var quotes = ["I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives. —Persuasion (1817)",
              "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody. —Mansfield Park (1814)",
              "Surprises are foolish things. The pleasure is not enhanced, and the inconvenience is often considerable. —Emma (1815)",
              "Know your own happiness. Want for nothing but patience - or give it a more fascinating name: Call it hope. —Sense and Sensibility (1811)",
              "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature. —Northanger Abbey (1817)",
              "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid. —Northanger Abbey (1817)",
              "To look almost pretty is an acquisition of higher delight to a girl who has been looking plain the first fifteen years of her life than a beauty from her cradle can ever receive. —Northanger Abbey (1817)",
              "Dress is at all times a frivolous distinction, and excessive solicitude about it often destroys its own aim. —Northanger Abbey (1817)",
              "To sit in the shade on a fine day, and look upon verdure is the most perfect refreshment. —Mansfield Park (1814)",
              "Indulge your imagination in every possible flight. —Pride and Prejudice (1813)",
              "They are much to be pitied who have not been given a taste for nature early in life. —Mansfield Park (1814)",
              "I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal. — Personal correspondence",
              "The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of merit or sense. —Pride and Prejudice (1813)"]

//when the new quote button is clicked, 
document.getElementByID("newquotebutton").addEventListener("click", getQuote);
//randomly select one of the objects in the array
function getQuote() {
  var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  console.log(randomQuote);
  //insert the quote into html element ID="quote"
  document.getElementByID("quote").innerHTML = randomQuote;
  };

// Tweet the quote