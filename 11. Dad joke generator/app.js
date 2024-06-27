const apiKey = "Enter api Key here";
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey},
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes";

const dadjokes = async () => {
    try {
    btnEl.innerText = "Loading..."
    btnEl.disabled = true;
    jokeEl.innerText = "Updating..."
    const response = await fetch(apiUrl, options)
    const data = await response.json(); //data[0].joke
    jokeEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"
    } catch(error){
        jokeEl.innerText = "An error has occured, try again later!"
        btnEl.disabled = false;
        btnEl.textContent = "Tell me a joke"
    }
}

btnEl.addEventListener("click", dadjokes);
