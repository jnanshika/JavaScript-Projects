const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; //added 90deg because by default it is set to 90 deg 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) +90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour /12) * 360) + 90; //added 90deg because by default it is set to 90 deg 
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    //console.log(hour);
    
}

setInterval(setDate, 1000);