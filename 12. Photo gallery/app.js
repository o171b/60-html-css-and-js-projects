const client_id = "enter api client id from unsplash.com";

const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const errorMsgEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");


const fetchImage = async () => {
  const inputValue = inputEl.value;

  if (inputValue < 1 || inputValue > 10){
    errorMsgEl.style.display = "block";
    errorMsgEl.innerText = "Number should be between 1 and 10";
    return;
  }

  let imgs = "";

  try {
    btnEl.style.display = "none";
    const loading = `<img src="spinner.svg" />`;
    galleryEl.innerHTML = loading;

    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}
      &client_id=${client_id}`
    ).then((resy) => 
    resy.json().then((dati) => {
      if (dati) {
        dati.forEach((pic) => {
          imgs += `<img src=${pic.urls.small} alt="image" />`;
          galleryEl.style.display = "block";
          galleryEl.innerHTML = imgs;
          btnEl.style.display = "block";
          errorMsgEl.style.display = "none";
        })
      }
    })
  )
    
    
  } catch (error) {
    console.log(error);
    errorMsgEl.style.display = "block";
    errorMsgEl.innerText = "something went wrong, try again later";
    btnEl.style.display = "block";
    galleryEl.style.display = "none";
  }






};

btnEl.addEventListener("click", fetchImage)
