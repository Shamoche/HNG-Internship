document.getElementById("slackUserName").textContent = "Slack Name: Alakinde akintomiwa";
document.getElementById("slackDisplayImage").src = "HNG-Internship/tom.jpg";
document.getElementById("slackDisplayImage").alt = "Alakinde akintomiwa";
document.getElementById("myTrack").textContent = "Track: Frontend";
document.getElementById("githubURL").href =
  "https://github.com/Shamoche/HNG-Internship";

  function updateTimeAndDay() {
    const date = new Date();
    const options = { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('currentUTCTime').textContent = "Current Time (GMT+1): " + date.toLocaleTimeString('en-GB', options);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('currentDayOfTheWeek').textContent = "Current Day of the Week: " + days[date.getDay()];
}

setInterval(updateTimeAndDay, 1000);
