function app(){
    console.log("Good morning");
    return ;
        
}
function greet(myname,cb){
    cb();
    const fathername="Mallikarjuna";
    const mothername="Saroja";
    console.log(`My name is ${myname} my father name is ${fathername}  my mother name is ${mothername}`);
}
greet("Anji",app);