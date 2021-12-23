const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const tempTime = new Date();
const tempYear = tempTime.getFullYear();
const tempMonth = tempTime.getMonth();
const tempDate = tempTime.getDate();

// console.log(tempYear, tempMonth, tempDate);

const futureTime = new Date(tempYear, tempMonth, tempDate + 2, 10, 30, 0);

const futureYear = futureTime.getFullYear();
const futureMonth = months[futureTime.getMonth()];
const futureDate = futureTime.getDate();
const futureWeekday = weekdays[futureTime.getDay()];
const futureHour = futureTime.getHours();
const futureMinute = futureTime.getMinutes();
const futureSecond = futureTime.getSeconds();

giveaway.innerHTML = `<h3>Give Away Ends At ${futureWeekday} ${futureDate} ${futureMonth} ${futureYear} <h3>`;

const countDown = () => {
  let t1 = futureTime.getTime();
  let t2 = new Date().getTime();
  let t = t1 - t2;
  // console.log(t);

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  let countDay = Math.floor(t / oneDay);
  let countHour = Math.floor((t % oneDay) / oneHour);
  let countMinute = Math.floor((t % oneHour) / oneMinute);
  let countSecond = Math.floor((t % oneMinute) / oneSecond);
  let values = [countDay, countHour, countMinute, countSecond];
  console.log(countSecond);
  const format = (item) => {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  };

  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });

  if (t < 0) {
    clearInterval(tiemInterval);
    deadline.innerHTML = `<h1>Give Away is Over!</h1>`;
    giveaway.innerHTML = `<h1>Give Away is Over!</h1>`;
  }
};

const tiemInterval = setInterval(countDown, 1000);

countDown();
