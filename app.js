const display = document.querySelector(".ClockDisplay");

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  let session = "AM";

  if (hour === 0 && session == "AM") {
    hour = 0;
  }

  if (hour === 12 && session == "PM") {
    hour = 12;
  }

  if (hour > 12) {
    session = "PM";
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (second < 10) {
    second = "0" + second;
  }

  display.innerHTML = hour + ":" + minutes + ":" + second + ":" + session;
}

setInterval(showTime, 1000);
