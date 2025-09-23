// challenge 7

let mark = {
  name: "mark miller",
  mass: 78,
  height: 1.69,
  bmi: 0
};

let john = {
  name: "john smith",
  mass: 92,
  height: 1.95,
  bmi: 0
};

mark.bmi = mark.mass / (mark.height * mark.height);
john.bmi = john.mass / (john.height * john.height);

if (mark.bmi > john.bmi) {
  console.log(mark.name + "'s bmi (" + mark.bmi.toFixed(1) + ") is higher than " + john.name + "'s (" + john.bmi.toFixed(1) + ")");
} else {
  console.log(john.name + "'s bmi (" + john.bmi.toFixed(1) + ") is higher than " + mark.name + "'s (" + mark.bmi.toFixed(1) + ")");
}

//challenge 8

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  let tip;
  if (bills[i] >= 50 && bills[i] <= 300) {
    tip = bills[i] * 0.15;
  } else {
    tip = bills[i] * 0.2;
  }
  tips.push(tip);
  totals.push(bills[i] + tip);
}

let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum = sum + totals[i];
}
let avg = sum / totals.length;

console.log("bills:", bills);
console.log("tips:", tips);
console.log("totals:", totals);
console.log("average total:", avg.toFixed(2));
