const firstName=["Veeranji","Veeresh","Mallikarjuna","Lakshman","Saroja","Girija","Lakshmi"];
const SurName="Jilkara";

const newArray=[];
for(let i=0; i<=firstName.length-1; i++)
{
    newArray.push(`${firstName[i]} ${SurName}`);
}
console.log(newArray);