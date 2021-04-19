loadMails = function () {
  //1. fetch the emails.json from /data
  //2. on successful load, parse the data and generate html
  //3. append the generated html in the mail area
  //4. if not found, display a fallback image
};

// var displayAlert = function () {
//   window.alert("Hello");
// };

// var searchTextUpdated = function () {
//   var searchText = document.getElementById("mainSearchText").value;
//   document.getElementById("paragraphDisplay").innerHTML =
//     "Hello you typed : " + searchText;
// };

// function parseTime(seconds) {
//   var formattedTime = "";
//   var mm = Math.floor(seconds / 60);
//   var ss = (seconds - mm * 60) % 60;
//   mm = mm.toLocaleString("en-US", { minimumIntegerDigits: 2 });
//   ss = ss.toLocaleString("en-US", { minimumIntegerDigits: 2 });
//   formattedTime = mm + ":" + ss;
//   return formattedTime;
// }

// function displayTime(time) {
//   document
//     .getElementById("timer")
//     .getElementsByClassName("timerCount")[0].innerHTML = time;
// }

// var timerInstance;
// function timer() {
//   var currentSeconds = 0;
//   displayTime(parseTime(0));
//   timerInstance = setInterval(function () {
//     currentSeconds = currentSeconds + 1;
//     displayTime(parseTime(currentSeconds));
//   }, 1000);
// }
// timer();

// var resetTimer = function () {
//   clearInterval(timerInstance);
//   timer();
// };
