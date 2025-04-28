// let arr = [];
// arr.push(10);
// arr.push(20);
// arr.push("saurav")
// console.log(arr);
// console.log(arr[1])
// arr.pop();
// console.log(arr);

// let arr = [];
// arr [0] = 10;
// arr[1] = 20;
// arr[2] = 40;
// arr[6] = 50;
// console.log(arr);

// let arr = new Array(3);
// arr[0] =10;
// arr[1] =20;
// arr[2] =30;
// arr[3] = 150;

// console.log(arr);

// enter 5 value in prompt and kepp it in array

// let arr = new Array(5);
// for(let i =0; i<5; i++){
//     var ans = Number(prompt("Enter your value"));
//     arr[i] = ans;
// }

// console.log(arr);

//sum of n elemnets of an array

// let arr = [10,20,30,40,50];
// var sum =0;
// for(let i =0; i<arr.length; i++){
//     sum += arr[i];

// }

// console.log(sum);




//finding maximum element of an array

// simple way
//  let arr = [20, 30, 10, 8, 79];

//  let max = Math.max(...arr);
//  console.log(max);

//  let arr = [20, 30, 10, 8, 89];
//  let max = arr[0];

//  for(let i =1; i< arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }

//  }

//  console.log(max);


//to find 2nd maximum element

// let arr = [20,30,10,8,40, 40, 40];
// let max = arr[0];
// let smax = arr[1];

// for(let i=1; i< arr.length; i++){
//     if(arr[i]>max){
//         smax = max;
//         max= arr[i];
        
//     }else{
//         if(arr[i]>smax && arr[i] != max){
//             smax = arr[i];
//         }
//     }
// }

// console.log(max, smax);


// let arr = [10,20,30,40,50,60,70];
// let j =0;
// for(let i = arr.length-1; i>j; i--){
//     let temp = arr[j];
//     arr[j]=arr[i]
//     arr[i] = temp; 
//     j += 1;
// }
// console.log(arr);


let arr = [0,1, 0, 1, 0, 1, 0, 1];
let i;
let j = 0;



for(let i = 0; i< arr.length; i++){
    if(arr[i]==0){
        let temp =arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    } 
}

console.log(arr);