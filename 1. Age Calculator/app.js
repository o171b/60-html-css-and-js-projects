document.addEventListener("DOMContentLoaded", function(){
    const btnEl = document.getElementById("btn");
    const birthdayEl = document.getElementById("birthday");
    const resultEl = document.getElementById("result");

    function calculateAge(){
        const birthdayValue = birthdayEl.value;
        
        if (birthdayValue === ""){
            alert("Select a valid date")
        }else{
            const age = getAge(birthdayValue)
            resultEl.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"}`
        }
    }

    function getAge(birthdayValue){
        const currentDate = new Date();
        const birthdayDate = new Date(birthdayValue);
        let age = currentDate.getFullYear() - birthdayDate.getFullYear();
        const month = currentDate.getMonth() - birthdayDate.getMonth();

        if (month < 0 || (month === 0 && currentDate.getDay() < birthdayDate.getDate())){
            age --
        }
        return age;
    }



    btnEl.addEventListener("click", calculateAge)
});



