const list=[
    {
        name:"Veeru",
        location:"Hyderabad",
        course:"Java full stack",
        fees:2500
    }
];
console.log(list);
function app(java){
    console.log(java);
}
list.forEach(app);
list.forEach(function(java){
    console.log(java);
});