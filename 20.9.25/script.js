// challenge 5
let d1 = 44, d2 = 23, d3 = 71;
let k1 = 65, k2 = 54, k3 = 49;

let davg = (d1 + d2 + d3) / 3;
let kavg = (k1 + k2 + k3) / 3;

if (davg >= 2 * kavg) {
    console.log("dolphins win (" + davg + " vs. " + kavg + ")");
} else if (kavg >= 2 * davg) {
    console.log("koalas win (" + kavg + " vs. " + davg + ")");
} else {
    console.log("no team wins");
}

d1 = 85; d2 = 54; d3 = 41;
k1 = 23; k2 = 34; k3 = 27;

davg = (d1 + d2 + d3) / 3;
kavg = (k1 + k2 + k3) / 3;

if (davg >= 2 * kavg) {
    console.log("dolphins win (" + davg + " vs. " + kavg + ")");
} else if (kavg >= 2 * davg) {
    console.log("koalas win (" + kavg + " vs. " + davg + ")");
} else {
    console.log("no team wins");
}

// challenge 6
let bills = [125, 555, 44];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    let tip = (bills[i] >= 50 && bills[i] <= 300) ? bills[i] * 0.15 : bills[i] * 0.2;
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);
