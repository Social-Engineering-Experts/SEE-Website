const startTime = new Date(Date.parse("04 Jun 2022 00:00:00 GMT+0800"));
const endTime = new Date(Date.parse("06 Jun 2022 00:00:00 GMT+0800"))

const getTimeRemaining = (endtime) => {
  let t = Math.max(Date.parse(endtime) - Date.parse(new Date()), 0);
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

const initializeClock = (id, endtime) => {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');
  const updateClock = () => {
    let t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  }
  updateClock();
  setInterval(updateClock, 1000);
}

initializeClock('clockdiv', startTime);