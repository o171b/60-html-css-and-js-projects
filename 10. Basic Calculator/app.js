const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");


for (let i=0; i<buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C"){
        clearValue();
    } else if (buttonValue === "="){
        calculateResult();
    } else {
        appendValue(buttonValue)
    }
    });
};

const clearValue = () => {
    inputFieldEl.value = "";
};

const calculateResult = () => {
    inputFieldEl.value = eval(inputFieldEl.value);
};

const appendValue = (buttonValue) => {
    inputFieldEl.value += buttonValue
    
};