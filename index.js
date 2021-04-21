const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021,8,20,9,0,0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

let month = futureDate.getMonth();
month = months [month];
const date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day];

giveaway.textContent = `Giveaway ends on ${day}, ${month} ${date} ${year} ${hours}:${minutes}am`;

if (minutes < 10){
    minutes = `0${minutes}`
}