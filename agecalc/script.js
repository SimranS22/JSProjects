const ageCalc = document.getElementById("ageCalculator");

ageCalc.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateAge();
});

function calculateAge(){
    const today = new Date();
    
    const formattedDate = today.toISOString().split('T')[0];
    console.log(formattedDate);
    const bday = document.getElementById("birthdate").value;
    
    const dateString = bday.toString();
    console.log(dateString);
    const bdayParts = dateString.split("-");
    const bdayDay = parseInt(bdayParts[2]);
    const bdayMonth = parseInt(bdayParts[1]) - 1;
    const bdayYear = parseInt(bdayParts[0])
    const bdayDate = new Date(bdayYear,bdayMonth,bdayDay);

    console.log(today);
    console.log(bday);
    console.log(bdayParts);
    console.log(bdayDay);
    console.log(bdayMonth);
    console.log(bdayYear);
    console.log(bdayDate);

    function isValidDate(){
        const birthdate = new Date(bdayYear, bdayMonth, bdayDay);
        return birthdate <= today;
    };

    if(!isValidDate()){
        alert("Invalid Birth Date!");
    }
    else{
        const ageInMilli = today - bdayDate;
        const ageInSecs = Math.floor(ageInMilli/1000);
        const ageInMins = Math.floor(ageInSecs/60);
        const ageInHours = Math.floor(ageInMins/60);
        const ageInDays = Math.floor(ageInHours/24);
        const ageInWeeks = Math.floor(ageInDays/7);
        const ageInMonths = Math.floor(ageInDays/30.436875);
        const ageInYears = Math.floor(ageInDays/365.25);

        const resultContainer = document.getElementById("resultContainer");
        const result = document.getElementById("result");

        result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} Years ${ageInMonths%12} Months ${ageInDays%30} Days</p>
        </div>
        <br>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${ageInMonths} Months</p>
        </div>
        <br>
        <div class="result-item">
            <h3>Days Passed:</h3>
            <p>${ageInDays%30} Days</p>
        </div>
        <br>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInHours} Hours</p>
        </div>
        <br>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInMins} Minutes</p>
        </div>
        <br>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInSecs} Seconds</p>
        </div>
        `;

        resultContainer.style.display = "block";
    }
}