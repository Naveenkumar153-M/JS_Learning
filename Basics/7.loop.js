
let personDetails={name:"Naveen",myAge:24,myGender:"Male",
           myAddress:"Nasiyanur,Erode",
isAlive:true}

let techGaintsCompany=["TATA","INFO","GOOGLE","AMAZON"];


// For loop

for(let i=0;i<techGaintsCompany.length;i++){
    console.log("techGaintsCompany : "+techGaintsCompany[i]);
}


console.log("emi "+(4265+35+194));

let i=techGaintsCompany.length;
let j=0;

while(j<i){
    console.log("While loop values : "+techGaintsCompany[j]);
    j++;
}

console.log();

do {
    console.log("Do While loop values "+techGaintsCompany[j]);
    j++;
} while (j<i);


for(let key in personDetails){
    console.log("For in loop values : "+personDetails[key]);
}

for(let key in personDetails){
    console.log("For in loop key & values : "+key+" : "+personDetails[key]);
}


let data=new Date();

console.log("data "+data);





