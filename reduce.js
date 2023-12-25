const array=[
    {name:"anji",age:23,salary:5000},
    {name:"sandya",age:18,salary:6000},
    {name:"raji",age:22,salary:7000}
];
const app=array.reduce(function(total,current){
    console.log(`Total salaries : ${total}`);
    console.log(`Current salaries : ${current.salary}`);
    total=total+current.salary;
    return total;
},0);
console.log(app);