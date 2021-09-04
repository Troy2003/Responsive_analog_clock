console.log('clock');


// set a inter function so it repeate work after every 1 second 
setInterval(() => {
    // create a target variables to select elements from dom 
    let hourDiv = document.getElementById('hour');
    let minDiv = document.getElementById('min');
    let secDiv = document.getElementById('sec');

    // console log for check our target is success
    // console.log(hourDiv, minDiv, secDiv);

    // creating a date object and use inbuilt functions to get current time 
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // create a variables to rotate clock hands 
    let hourHandRotation = (30 * hours) + (min / 2);
    let minuteHandRotation = 6 * min;
    let secondHandRotation = 6 * sec;

    // set a css of the dives for rotation
    hourDiv.style.transform = `rotate(${hourHandRotation}deg)`;
    minDiv.style.transform = `rotate(${minuteHandRotation}deg)`;
    secDiv.style.transform = `rotate(${secondHandRotation}deg)`;
}, 1000);