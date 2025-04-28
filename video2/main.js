// let amount = Number(prompt("What is your amount shopped"));
// let discount;
// let pays;

// if(amount>=0 && amount <= 5000){
//     pays = amount;
//     console.log("Your total bill amount is"+ pays);
// } else if (amount>5000 && amount <=7000){
//     discount = (5/100)*amount;
//     pays = amount - discount;
//     console.log("Your total bill amount is"+ pays);

// } else if ( amount > 7000 && amount <=9000){
//     discount = (10/100)*amount;
//     pays = amount - discount;
//     console.log("Your total bill amount is"+ pays);

// } else if ( amount>9000) {
//     discount = (20/100)*amount;
//     pays = amount - discount;
//     console.log("Your total bill amount is"+ pays);

// } else {
//     comsole.log("Give positive value")
// }
 
// let units = Number(prompt("What is the total amount of bill"));
// let total;

// if(units>0){
//     if(units<100){
//         let total = units*4.2
//         console.log(total);

//     } else if (units>100 && units<=200){
//         total = 100*4.2 + (units-100)*6;
//         console.log(total);
//     } else if (units>200 && units<=400){
//         total = 100*4.2 + 100* 6 + (units-200)*8;
//         console.log(total);
//     } else {
//         total = 100*4.2 + 100* 6 +200*8 + (units-400)*13;
//         console.log(total);

//     }
// } else {
//     console.log("Enter positive units")
// }

// let unit = Number(prompt("Enter your units"))
// let amount = 0;

// if(unit>400){
//     amount += (unit-400)*13;
//     unit = 400;
// } 
// if(unit>200 && unit<=400){
//     amount += (unit-200)* 8;
//     unit =200;
// } 
// if(unit>100 && unit<=200){
//     amount += (unit-100)* 6;
//     unit =100;
// } 

// amount += unit*4.2;
// console.log(amount)

// let amount = Number(prompt("Enter the amount"));
// let fiv =0;
// let rem = 0;
// let hun = 0;
// let fivt = 0;
// let ten = 0;
// let on = 0;

// if(amount>=500){

//  fiv = Math.floor(amount/500);
//  amount = amount%500;
// }

// if(amount>=100){
//     hun = Math.floor(amount/100);
//     amount = amount%100;
// }
// if(amount>=50){
//     fivt = Math.floor(amount/50);
//     amount = amount%50;
// }

// if(amount>=10){
//     ten = Math.floor(amount/10);
//     amount = amount%10;
// }

// on = amount;

// console.log("You have "+ fiv + " 500's " + hun + " 100's " + fivt + " 50's " + ten + " 10's " + on +" 1's money")




// let age = Number(prompt("Enter your age"));

// (age>18)? console.log("You can vote"): console.log("You can't vote");

// console.log(9>2?"Hi":"Bye")

let day =1;

switch(day){
    case 1:
    case 2:
        console.log("monday")
        break;
        
    default:
        console.log("any other day");
}