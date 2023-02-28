const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// convertion formulas
// 360 degree / 24 hours = 15 degree/hour
// 1 degree = 60 Minutes
// 1 degree = 3600 Seconds


// ************************************** Solution 1: with ticking position (aesthetic) *******************************************
// function runTheClock() {
//     let date = new Date(); // get the time

//     let hr = date.getHours(); // the degrees we want to turn each of the arm
//     let min = date.getMinutes();
//     let sec = date.getSeconds();

//     let hrposition = (hr * 360) / 12 + (min * (360 / 60)) / 12; // convert to degrees
//     let minposition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
//     let secposition = (sec * 360) / 60;

//     HOURHAND.style.transform = "rotate(" + hrposition + "deg)";
//     MINUTEHAND.style.transform = "rotate(" + minposition + "deg)";
//     SECONDHAND.style.transform = "rotate(" + secposition + "deg)";

//     console.log(date.getHours(), date.getMinutes(), date.getSeconds());
//   }

//   setInterval(runTheClock, 1000); // calls the function every one second to run and rotate the clock

// ************************************** Solution 2: with animation (aesthetic) ***************************************************
let date = new Date(); // an object that holds full current date and time
//Tue Feb 28 2023 11:38:26 GMT-0500 (Eastern Standard Time)

let hr = date.getHours(); // the degrees we want to turn each of the arm
let min = date.getMinutes();
let sec = date.getSeconds();

let hrposition = (hr * 360) / 12 + (min * (360 / 60)) / 12; // convert to degrees
let minposition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
let secposition = (sec * 360) / 60;

function runTheClock() {
  hrposition = hrposition + 3 / 360;
  minposition = minposition + 6 / 60;
  secposition = secposition + 6;

  HOURHAND.style.transform = "rotate(" + hrposition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minposition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secposition + "deg)";

  console.log(date.getHours(), date.getMinutes(), date.getSeconds());
}

setInterval(runTheClock, 1000); // calls the function every one second to run and rotate the clock
