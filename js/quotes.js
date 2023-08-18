const quotes = [
    {
         quote: "I do not know what the future holds, but I know who holds the future.",
         author: "Oprah Winfrey",
    },
    {
        quote: "To follow, without halt, one aim: There's the secret of success.",
        author: "Anna Pavlova",
    },
    {
        quote: "Opportunities are never lost. The other fellow takes those you miss.",
        author: "Unknown",
    },
    {
        quote: "We find no real satisfaction or happiness in life without obstacles to conquer and goals to achieve." ,
        author: "Maxwell Maltz",
    },
    {
        quote: "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite." ,
        author: "G. K. Chesterton",
    },
    {
        quote: "Humanity can be quite cold to those whose eyes see the world differently.",
        author: "Eric A. Burns",
    },
    {
        quote: "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
        author: "David Rockefeller",
    },
    {
        quote: "The big secret in life is that there is no big secret. Whatever your goal, you can get there if you're willing to work.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Men are born to succeed, not fail." ,
        author: "Henry David Thoreau",
    },
    {
        quote: "A goal without a plan is just a wish.",
        author: "Antoine de Saint-Exupery",
    },
]

const quote = document.querySelector("#qutoes_text span:first-child");
const author = document.querySelector("#qutoes_text span:last-child");


const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
quote.classList.add("font_quotes");

author.innerText = randomQuote.author;
author.classList.add("font_author");