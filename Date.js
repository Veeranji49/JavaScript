const days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months=[
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
    "December"
];
const date=new Date();
const weekday=date.getDay();
console.log(days[weekday]);

const month=date.getMonth();
console.log(months[month]);

const datee=date.getDate();
console.log(datee);

const year=date.getFullYear();
console.log(year);

console.log(`${days[weekday]},${date.getDate()} ${months[month]} ${date.getFullYear()}`);