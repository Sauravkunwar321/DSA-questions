// let n = Number(prompt("Enter the natural numbers"));
// var fact = 1;

// for(let i =1; i <= n; i++){
//      fact *= i;

// }

// console.log(fact);

// var pr = prompt("Enter the number");

// if(!pr || isNaN(pr)){
//     console.log("Enter valid number")
// } else{
//     num = Number(pr);
//     for(i=1; i<=num/2; i++){
//         (num%i===0)?console.log(i + "is a factor of "+num): "";

//     }
//     console.log(num + "is a factor of" +num);
// }

// var pr = prompt("Enter the number");

// if(!pr || isNaN(pr)){
//     console.log("Enter valid number")
// } else{
//     num = Number(pr);
//     if(num>0){
//       isPrime(num);
//     }else{
//         console.log("enter positive")
//     }

// }

// function isPrime(num){
//     var primexa = true;
//     for(i=2; i< Math.floor(num/2); i++){
//         if(num%i===0){
//             primexa = false;
//             break;
//         }
//     }

//     (primexa)?console.log(num + "is prime"): console.log(num + "is consonant");
// }

// for( var i = 1; i<23; i++){
//     if(i===11) continue;
//     console.log(i)
// }

// var ans = prompt("number dedo(exit for close")

// while(ans != 'exit'){
//     ans = prompt("number dedo(exit for close")
// }

// var pr = prompt("Enter the number");

// if(!pr || isNaN(pr)){
//     console.log("Enter valid number")
// } else{
//     num = Number(pr);
//     var rev =0;
//     while(num>0){
//         digit = num%10;
//         num = Math.floor(num/10);
//         rev = rev*10 + digit;

//     }
//     console.log(rev);
// }
// var pr = prompt("Enter a number");

// if (!pr || isNaN(pr)) {
//   console.log("Enter valid number");
// } else {
//   num = Number(pr);
//   let org = num;
//   var sum = 0;
//   while (num > 0) {
//     rem = num % 10;
//     var fact = 1;
//     for (var i = 1; i <= rem; i++) {
//       fact = fact * i;
//     }
//     num = Math.floor(num / 10);
//     sum = sum + fact;
//   }
//   sum == org  ? console.log("strong number")
//     : console.log("Not a strong number");
// }

// var ans = prompt("enter number")

// do{
//     console.log("hello");
//     ans = prompt("enter number");
// }while(ans!=0);

// var comp = Math.floor(Math.random()*10);
// console.log(comp);

// do{
// var guess = prompt("Guess number between 0-100")

// if(isNaN(guess) || guess<0 || guess>10){
//     console.log("enter between 0-10");
// }

// if(comp== guess) {
//     break;
// } else if (guess<comp){
//     console.log("guess a little higher");
// } else{
//     console.log("Guess it little lower")
// }

// }while(comp != guess);

// console.log("You gueessed the number right. It is "+ comp )

var guess = Number(prompt(
  "Enter what you want to do, 1 for add, 2 for sub, 3 for mul, 4 for div"
));

var num1 = Number(prompt("Enter 1st num"));
var num2 = Number(prompt("Enter 2nd num"));
var add, sub, mul, div;
switch (guess) {
  case 1:
    add = num1 + num2;
    console.log(add);
    break;
  
  case 2:
    sub = num1-num2;
    console.log(sub);
    break;  
 
  case 3:
    mul = num1* num2;
    console.log(mul);
    break;

  case 4:
    div = num1/num2;
    console.log(div);
    break;

  default:
    console.log("Enter a valid number");
    break;  
}
