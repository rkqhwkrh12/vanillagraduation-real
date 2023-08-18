const clock = document.querySelector("#clock");


const restClock = document.querySelector("#rest_of_day");

function restTime(){
    const date = new Date();
    const hour = String(24-date.getHours()).padStart(2,"0");
    const minute = String(60-date.getMinutes()).padStart(2,"0");
    const second = String(60-date.getSeconds()).padStart(2,"0");
    restClock.innerText = `${hour}:${minute}:${second}`;
}

restTime();
setInterval(restTime,1000);
