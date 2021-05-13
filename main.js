// declare variables so you dont have to use query selector later on
const $clock = document.querySelector('.clock');
const $display = document.querySelector('.clock-display')
const $progressBar = document.querySelector('.clock-progress-bar')
// $ is not required, but it's a visual that you're triggering the DOM.
let isHovering = false;

$clock.addEventListener('mouseover' , function() {
  isHovering = true;
})

$clock.addEventListener('mouseout' , function() {
  isHovering = false;
});

const now = new Date();
console.log(now);

function setDate() {
  const now = new Date();
  // let seconds, hour, minutes;
  // console.log(now);
  let hour, minutes, seconds;

  if(isHovering) {
      hour = ('0' + now.getHours().toString(16)).slice(-2);
      minutes = ('0' + now.getMinutes().toString(16)).slice(-2);
      seconds = ('0' + now.getSeconds().toString(16)).slice(-2);
    } else {
      hour = ('0' + now.getHours()).slice(-2);
      minutes = ('0' + now.getMinutes()).slice(-2);
      seconds = ('0' + now.getSeconds()).slice(-2);
    }
  // strings have a starting value and an end value. If you say slice, you are going to the end and targets
  // let hour = ('0' now.getHours()).slice(-2);
  // let minutes = ('0' now.getMinutes()slice(-2);
  // let seconds = ('0' now.getSeconds()slice(-2);

// `${hour}` alerts
  let displayTime = `${hour}:${minutes}:${seconds}`;
  $display.innerHTML = displayTime;
  $progressBar.style.width = `${seconds / 60 * 14}rem`;
}
  setInterval(setDate, 1000);
  setDate();

// console.log(seconds / 60);

// modify the length of the timer bar. 14 is the length of the bar, found in the original CSS file.

// $progress.Bar.style.width = `${seconds / 60 * 14}rem`;

// console.log a hexidecimal color that is based on the current second, every second

// }
// set interval will fire code ever second, set time out would wait one second and then fire code 1x
// setInterval(setDate, 1000);
// setDate();

  // $clock.style.background = "blue, purple, yellow";

  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }


  function changeColor(){
    $clock.style.background= getRandomColor();
  }
  setInterval(changeColor,1000);

// *********************************
// var clockDisplay = document.querySelector('.clock-display');
// var clock = document.querySelector('.clock');
//
// function colorClock() {
//   var time = new Date();
//   var hours = (time.getHours() %12).toString();
//   var minutes = time.getMinutes().toString();
//   var seconds = time.getSeconds().toString();
//
//   if (hours.length < 2) {
//     hours = '0' + hours;
//   }
//
//   if (minutes.length < 2) {
//     minutes = '0' + minutes;
//   }
//
//   if (seconds.length < 2) {
//     seconds = '0' + seconds;
//   }
//
// var clockDisplayStr = hours + ':' + minutes + ':' + seconds;
// var clockStr = '#' + hours + minutes + seconds;
//
// clockDisplay.textContent = clockDisplayStr;
// clockStr.textContent = clockStr;
// }
//
// colorClock();
// setInterval(colorClock, 1000);

// *********************************

//  MOUSE OVER: need to figure out how to change the display to show hexdecimal
// clockDisplay.addEventListener("mouseover", function( event ) {
//   // highlight the mouseover target
// // below line changes text to purple
//   event.target.style.color = "purple";
//
//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 1000);
// }, false);


// *start code- the following displays the date/time in clock.
// var time = new Date();
//   console.log(time.getHours());
//   console.log(time.getMinutes());
//   console.log(time.getSeconds());
//
//   var clockDisplay = document.querySelector('.clock-display');
// clockDisplay.textContent = time
// *end code*



// (function colorClock() {
//   var time = new Date();
//   var hours = time.getHours();
//   var minutes = time.getMinutes();
//   var seconds = time.getSeconds();});

// var hexColor = document.getElementById('hex-color');
  // function colorClock() {
  //   var time = new Date();
  //   var hours = time.getHours();
  //   var minutes = time.getMinutes();
  //   var seconds = time.getSeconds();
  //
  //   // if(hours.length < 2) {
    //   hou
    // }


  // var time = new Date();
  //   console.log(time.getHours() % 12); /*this will make 12hr format*/
  //   console.log(time.getMinutes());
  //   console.log(time.getSeconds());

// const div = document.createElement('div');
// div.textContent = (var time = new Date());
// div.classList.add('uppercase');
// document.querySelector('.clock-display').appendChild(
//
//   function currentTime() {
//   hour = updateTime(hour);
//   min = updateTime(min);
//   sec = updateTime(sec);
// });
//
// function updateTime(k) {
//   if (k < 10) {
//     return "0" + k;
//   }
//   else {
//     return k;
//   }
// })

// (new Date());
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

// var clockDisplay = document.querySelector('.clock-display').appendChild(div);
//
//
// new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
//
// var time = new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
//
// document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;


// function clock() {
//   var logElem = document.querySelector(".clock-display");
//
//   var time = new Date();
//   var timeStr = time.toLocaleTimeString();
//   logElem.innerHTML += timeStr + ": " + msg + "<br/>";
// }

// // ***The code below works to show a clock***
// var time = new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());


// function currentTime() {
//   var date = new Date();
//   var hour = date.getHours();
//   var min = date.getMinutes();
//   var sec = date.getSeconds();
// }
// console.log(currentTime);


// // // This handler will be executed every time the cursor
// // is moved over a different list item
// test.addEventListener("mouseover", function( event ) {
//   // highlight the mouseover target
//   event.target.style.color = "orange";
//
//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);


// var textElem = document.querySelector(".clock");
// 			var textNode = document.createTextNode("");
// 			textElem.appendChild(textNode);
// 			var curFontSize = 24;  // Do not changes
//
// 			function updateClock() {
// 				var d = new Date();
// 				var s = "";
// 				s += (10 > d.getHours  () ? "0" : "") + d.getHours() + "|";
// 				s += (10 > d.getMinutes() ? "0" : "") + d.getMinutes();
// 				textNode.data = s;
// 				setTimeout(updateClock, 60000 - d.getTime() % 60000 + 100);
// 			}

// var clockDisplay = document.querySelector('.clock-display');
//
// clockDisplay = new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

// var time = new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
