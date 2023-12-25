const array=[
    {name:"anji",age:23,id:1},
    {name:"veeru",age:24,id:2},
    {name:"sandya",age:18,id:3}
];
// console.log(array);
const string=["anji","sandya","purnima"];
const fun=array.find(function(java){
    return java.name==="sandya";

});
console.log(fun);