const apiKey = "e5bde98ae54c2a85ac093f3ea3c8568c";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

const getWeatherData = async(cityValue) => {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        
        if(!response.ok){
            throw new Error("Network response was not ok")
        };
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.log(error)
    };
};