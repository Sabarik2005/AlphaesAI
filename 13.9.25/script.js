console.log("code challenge 1");
//Data 1
let mw = 78, mh = 1.69;
let jw = 92, jh = 1.95;

let mbmi = mw / (mh * mh);
let jbmi = jw / (jh * jh);



console.log("Mark's BMI:", mbmi);
console.log("John's BMI:", jbmi);
if (mbmi > jbmi){
    console.log("Mark's BMI is higher");
}
else{
    console.log("John's BMI is higher");
}
//Data 2
mw = 95; mh = 1.88;
jw = 85; jh = 1.76;

mbmi = mw / (mh * mh);
jbmi = jw / (jh * jh);



console.log("Mark's BMI:", mbmi);
console.log("John's BMI:", jbmi);
if (mbmi > jbmi){
    console.log("Mark's BMI is higher");
}
else{
    console.log("John's BMI is higher");
}

//code 2
console.log("code challenge 2");

 mw = 95, mh = 1.88;
 jw = 85, jh = 1.76;

 mbmi = mw / (mh * mh);
 jbmi = jw / (jh * jh);

if (mbmi > jbmi) {
  console.log(`Mark's BMI (${mbmi.toFixed(2)}) is higher than John's (${jbmi.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${jbmi.toFixed(2)}) is higher than Mark's (${mbmi.toFixed(2)})!`);
}
