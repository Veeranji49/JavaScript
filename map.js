const array=[
    {name:"veeru",age:23,location:"hyderabad"},
    {name:"veeresh",age:21,location:"Kurnool"}
];
const app=array.map(function(java){
    return java.name;
});
const yellow=array.map(function(java){
    return{
        name:"Lakshman",
        age:33,
        location:"peddakadabur"

    };
})
const backtick=array.map(function(java){
    return ` my name is ${java.name} and age is ${java.age} and my location is ${java.location} `;
})
console.log(app);
console.log(yellow);
console.log(backtick);