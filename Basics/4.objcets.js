// let name ="Naveen";

// let age=24;

// let gender=male;

// var address="Nasiyanur,Erode";

let person={name:"Naveen",myAge:24,myGender:"Male",myAddress:"Nasiyanur,Erode",
isAlive:true,family:{
    parents:{
    dad:"muru",mom:"darling"
},
sibling:{
    sis1:"Keerthi",sis2:"Sandy"
}}
}

console.log(person.address);
console.log(person.family.parents.dad);
console.log(person.family.parents.mom);
console.log(person.family.sibling.sis1);
console.log(person.family.sibling.sis2);


// For in loop 

for(let key in person){
console.log("For in loop : "+person[key]);
}