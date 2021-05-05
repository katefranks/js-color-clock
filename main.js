var time = new Date();
  console.log(time.getHours());
  console.log(time.getMinutes());
  console.log(time.getSeconds());

  var clockDisplay = document.querySelector('.clock-display');
clockDisplay.textContent = time

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
