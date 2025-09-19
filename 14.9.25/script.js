//code 3
console.log("code challenge 3");
let eagles = [75, 89, 95];
let sharks = [92, 81, 78];

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

let eAvg = average(eagles);
let sAvg = average(sharks);

if (eAvg > sAvg && eAvg >= 80) {
  console.log("Eagles win with avg " + eAvg);
} else if (sAvg > eAvg && sAvg >= 80) {
  console.log("Sharks win with avg " + sAvg);
} else if (eAvg === sAvg && eAvg >= 80 && sAvg >= 80) {
  console.log("It's a draw. Avg: " + eAvg);
} else {
  console.log("No team wins");
}


//code 4
console.log("code challenge 4");

const calcdelivery = value => {
  let fee = value >= 100 && value <= 500 ? value * 0.10 : value * 0.15;
  console.log(`The order was ${value}, the delivery fee was ${fee}, and the total amount ${value + fee}`);
};

calcdelivery(450);
calcdelivery(80);
calcdelivery(600);


