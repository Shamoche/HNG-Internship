document.getElementById("slackUserName").textContent = "Slack Name: John Doe";
document.getElementById("slackDisplayImage").src = "HNG-Internship/tom.jpg";
document.getElementById("slackDisplayImage").alt = "Alakinde akintomiwa";
document.getElementById("myTrack").textContent = "Track: Frontend";
document.getElementById("githubURL").href =
  "https://github.com/Shamoche/HNG-Internship";

function updateTimeAndDay() {
  const date = new Date();
  document.getElementById("currentUTCTime").textContent =
    "Current UTC Time in Milliseconds: " + date.getTime();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("currentDayOfTheWeek").textContent =
    "Current Day of the Week: " + days[date.getDay()];
}

setInterval(updateTimeAndDay, 1000);
