// This is not linked to the HTML as this is the extended challenge

let hours = 50;
let wage = 10;

basePaycheck = hours * wage;
if (hours > 40){
    wageIncrease = wage*1.5;
    extraHours = hours - 40;
    totalPaycheck = wage * 40 + extraHours*wageIncrease;
}else{
    totalPaycheck = basePaycheck;
}
console.log(totalPaycheck);


let week = 1;
let totalMoney = totalPaycheck;

while (totalMoney< 1000000){
    totalMoney = totalPaycheck * week;
    //console.log(totalMoney);
    week++;
};
console.log(`it took ${week} weeks for them to earn $1,000,000`);