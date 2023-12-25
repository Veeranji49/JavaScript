const array=[
    {name:"veeru",age:23,fees:25000},
    {name:"anji",age:24,fees:30000}
];
const id=array.filter(function(java){
    return java.age>=23;
});
console.log(id);

const cristiano=array.filter(function(java){
    return java.name==="veeru";
});
console.log(cristiano);