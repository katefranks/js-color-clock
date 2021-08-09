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

// Function that sets the current date to show with hour, minutes, & seconds
function setDate() {
  const now = new Date();
  let hour, minutes, seconds;
  if(isHovering) {
    //isHovering=true, sets the hour, minutes and seconds to hexidecimal value
      hour = ('0' + now.getHours().toString(16)).slice(-2);
      minutes = ('0' + now.getMinutes().toString(16)).slice(-2);
      seconds = ('0' + now.getSeconds().toString(16)).slice(-2);
    } else {
    // isHovering=false, shows time w/ 2 digits each
      hour = ('0' + now.getHours()).slice(-2);
      minutes = ('0' + now.getMinutes()).slice(-2);
      seconds = ('0' + now.getSeconds()).slice(-2);
    }


  let displayTime = `${hour}:${minutes}:${seconds}`;
  $display.innerHTML = displayTime;

   // modify the length of the timer bar:
   //console.log(seconds / 60); taking seconds and dividing by 60 (percentage of a minute)
  // 14 is the length of the bar, found in the original CSS file.
  $progressBar.style.width = `${seconds / 60 * 14}rem`;
  //uses the width to set the progress bar to increase at the set increment
}

  setInterval(setDate, 1000);
  setDate();
// set interval will fire code ever second, set time out would wait one second and then fire code 1x

// The hexadecimal numeral system, often shortened to "hex", is a numeral system made up of 16 symbols (base 16).
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
