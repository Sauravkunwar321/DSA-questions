
//left rotation array by 1 element

//my approach

// const arr = [1,2,3,4,5];

// let i = 0, j = 0;
// let temp;


// while(i<arr.length){
//     if(i-j == 1){
//         temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j++ 
//     } else{
//         i++
//     }


// }

// console.log(arr)

//video solution

// let arr = [1,2,3,4,5,];

// let copy = arr[0];

// for(let i=0; i<arr.length-1; i++){
//     arr[i] = arr[i+1]
// }

// arr[arr.length-1] = copy;

// console.log(arr);

//Qn 2 , right rotation by 1 element

// let arr = [1,2,3,4,5];
// let copy = arr[arr.length-1];

// for(let i=arr.length-1; i>0; i--){
//     arr[i] = arr[i-1];
// }

// arr[0] = copy;

// console.log(arr);


//Q.3 left rotation by k steps

// let arr=[1,2,3,4,5];

// k = k%arr.length;
// let k = Number(prompt("Enter your left rotation stpes"))

// for(let i=0; i<k; i++){
//     let copy = arr[0];

//     for(let j=0; j<arr.length-1; j++){
//         arr[j] = arr[j+1]
//     }

//     arr[arr.length-1] = copy;
// }


// console.log(arr);




//Q.4 ., right rotation by k steps

let arr= [1,2,3,4,5]

let k = Number(prompt("Enter your right rotation steps"))

k = k % arr.length;

for(let i=0; i<k; i++){
    let copy = arr[arr.length-1];

    for(let j=arr.length-1; j>0; j--){
        arr[j] = arr[j-1];
    }

    arr[0] = copy;
}


console.log(arr);


