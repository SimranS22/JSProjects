function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    const ampm = document.getElementById("dn"); // Moved declaration here

    if(hours > 12){
        ampm.textContent = 'PM';
    }
    else{
        ampm.textContent = 'AM';
    }

    hours = hours < 10 ? "0"+ hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    const hr = document.getElementById("hours");
    const min = document.getElementById("minutes");
    const sec = document.getElementById("seconds");

    hr.textContent = hours;
    min.textContent = mins;
    sec.textContent = secs;
}

setInterval(updateClock,1000);
