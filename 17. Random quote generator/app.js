const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btnEl = document.getElementById("btn");
const category = "happiness";

const apiKey = "enter your api key from api-ninjas.com";
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

async function getQuote(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {"X-Api-Key": apiKey},
            contentType: "application/json"
        });
        if (!response.ok){
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const quoteContent = data[0].quote;
        const quoteAuthor = data[0].author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    } catch (error) {
        console.error(error,error.message)
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened";
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    }
}



btnEl.addEventListener("click", getQuote)