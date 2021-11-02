const quotes = [
  {
    quote:
      "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
    author: "Michael Scott",
  },
  {
    quote: "I talk a lot, so I’ve learned to tune myself out.",
    author: "Kelly Kapoor",
  },
  {
    quote: "I’m not superstitious, but I am a little stitious.",
    author: "Michael Scott",
  },
  {
    quote:
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    author: "Michael Scott",
  },
  {
    quote: "If I don’t have some cake soon, I might die.",
    author: "Stanley Hudson",
  },
  {
    quote: "The worst thing about prison was the dementors",
    author: "Michael Scott",
  },
  {
    quote:
      "Identity theft is not a joke, Jim! Millions of families suffer every year.",
    author: "Dwight Schrute",
  },
  {
    quote:
      "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    author: "Michael Scott",
  },
  {
    quote: "I am running away from my responsibilities. And it feels good.",
    author: "Michael Scott",
  },
  {
    quote:
      "I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.",
    author: "Kevin Malone",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
