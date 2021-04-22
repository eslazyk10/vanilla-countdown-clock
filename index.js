const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let temp

let futureDate = new Date(2021,7,20,9,0,0);
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

giveaway.textContent = `Giveaway ends on ${day}, ${month} ${date}, ${year} at ${hours}:0${minutes}am`;

// future tim in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    
    //1s = 1000 ms
    //1min = 60s
    //1hr = 60 min
    //1d = 24hr

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    // calculate values
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t % oneDay )/ oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    
    //set values array
    const values = [days, hours, minutes, seconds];

    function format(item){
        if (item < 10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if (t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h5 class="expired">Sorry, This giveaway has expired</h5>`;
    }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

// left off at 5:53:00