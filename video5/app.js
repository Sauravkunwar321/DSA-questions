// let name = "saurav";
// console.log(name);


// let arr = [10,20,30,40];
// console.log(arr[2])


// let s= "saurav";

// console.log(s.charAt(2))

// console.log(s.charCodeAt(2))

// console.log(s.split(" "))


// for(let i =0; i< s.length; i++){
//     console.log(s[i])
// }

// let s = prompt("Enter a value")
// let j = s.length-1;

// for(let i=0; i<=Math.floor(s.length/2 -1 ); i++){
//     if(s[i] == s[j]){
//         i++
//         j++
//     } else{
//         console.log("No a palindrome")
//         break;
//     }
//     console.log("palindrome")
// }


//toggle 


// let s = prompt("enter a  string")
// console.log(s);


// let toggle="";
// for(let i=0; i<=s.length-1; i++){

//     let ch = s.charCodeAt(i)
    

//     if(ch>=65 && ch<=90){
//         toggle = toggle + String.fromCharCode(ch+32)
//     } else if(ch>=97 && ch<=122){
//         toggle = toggle + String.fromCharCode(ch-32)
//     }
// }

// console.log(toggle)


// let s = prompt("Enter a string");
// console.log(s);

// let toggle = "";
// for(let i =0; i<=s.length-1; i++){
//     let ch = s.charCodeAt(i);

//     if(ch>=65 && ch<=90){
//         toggle = toggle +   String.fromCharCode(ch+32)
//     } else if(ch>=97 && ch<=122){
//         toggle = toggle + String.fromCharCode(ch-32);
//     }
// }


// console.log(toggle);



//frequency of each character

// let s = prompt("Enter a number");
// let arr = new Array(128).fill(0);

// for(let i =0; i<=s.length-1; i++){
//     let indx = s.charCodeAt(i);
//     arr[indx] = arr[indx] +1;
// }

// for(let i=0; i<=s.length-1; i++){
//     let ch = s.charCodeAt(i);
//     if(arr[ch]>0){
//         console.log(String.fromCharCode(ch)+ " appears at " + arr[ch] + " times");
//         arr[ch]=0;
//     }
// }


// let s = prompt("enter the string");
// let arr = new Array(128).fill(0);


// for(let i=0; i<=s.length-1; i++){
//     let ch = s.charCodeAt(i);
//     arr[ch] = arr[ch] + 1;

// }


// for(let i=0; i<=s.length-1; i++){
//     let ch = s.charCodeAt(i);
//     if(arr[ch]>0){
//         console.log(String.fromCharCode(ch)+ " appears "+ arr[ch] + " times.")
//         arr[ch] =0;
//     }
// }




// function counter(){
//     var count = 0;
//     return function y(){
//         count++;
//         console.log(count);
//     }
// }

// let count = counter();
// count();
// count()
// count()


// function counter(){
//     var count =0;



//     return {

//         increamentCounter: function(){
//             count++;
//             console.log(count);
//         },
    
//         decreamentCounter: function(){
//             count--;
//             console.log(count);
//         }

//     };
   
// }

// var counter1 =counter();
// counter1.increamentCounter();
// counter1.increamentCounter();
// counter1.decreamentCounter()

// console.log("start");
// setTimeout(function a(){
//     console.log("callback done")
// }, 5000);
// console.log("end");

// let startdate = new Date().getTime();
// let enddate = startdate;

// while(enddate<startdate+10000){
//     enddate = new Date().getTime();
// }


// console.log("while expire")

// function area(i){
    
//     return (Math.PI*i*i);
// }

// function calarea(radius)
// {

//     const output = [];
//     for(let i=0; i<radius.length; i++){
//        output.push(area(radius[i]))

//     }
//     console.log(output);
// }




// calarea(radius)

// const radius = [1,2,3,4]

// const output = radius.map((x)=> x*2)


// console.log(output)


// const binary = ['11', '101']

// const output = binary.map((x) => parseInt(x,2))

// console.log(output)


// const array= [1,2,3,4,5,6,7]

// const output = array.filter((x) => x%2!==0)

// console.log(output)

// const output = array.reduce(function(acc, curr){

//     return acc = acc + curr;

// }, 0);

// console.log(output);


// async function getName(){
//     return "saurav";
// }

// const data = getName();

// console.log(data)

// async function getName(){
//     return "saurav"
// }

// const data = getName();
// data.then(res => console.log(res))


// const p = new Promise((resolve, reject) => {
//     resolve("Hi sanchai xau")
// })

// async function name(){
//     const val = await p;
//     console.log(val)
// }


// name()


// async function  handlePromise(){
//     const data = await fetch("https://api.github.com/users/Sauravkunwar321");
//     const result = await data.json()
//     console.log(result)
// }

// handlePromise()


// const p1 = new Promise(function(resolve, reject){
//     setTimeout(()=> reject("p1 fail"), 3000);
// })

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(()=> reject("p2 success"), 1000);
// })
// const p3 = new Promise(function(resolve, reject){
//     setTimeout(()=> reject("p3 success"), 5000);
// })

// Promise.any([p1,p2,p3]).then(res => console.log(res)).catch((err)=>console.log(err.errors))




//  Function.prototype.mybind = function(...args){
//     let obj = this;
//     return function(){
//         obj.call(args[0])
//     }
//  }




// Function.prototype.mybind = function(...args){
//     let obj = this,
//     params = args.slice(1);
//     return function(...args2){
//         obj.apply(args[0], [...params, ...args2])
//     }
// }


// let printname1 = printname.mybind(name, "butwal");
// printname1("rupandehi") 


//currying in js

// let multiply = function(x,y){
//     console.log(x*y)
// }

// let multiplyby2 = multiply.bind(this, 2);
// multiplyby2(5); 

// let multiply = function(x){
//     return function(y){
//         console.log(x*y)
//     }
// }

// let multiplybytwo = multiply(2);
// multiplybytwo(3)
let counter =0;
// const getData = () => {
//     console.log("fetching data"+ counter++)
// }

// const debounce = function(fn, d){
//     let timer;
//     return function(){
//         let context = this;
//         args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn.apply(context, args)
//         },d)

//     }
// }

// const betterfunction = debounce(getData, 300);


// const getData= () =>{
//     console.log("fetching data"+ counter++)
// }


// const debounce = function(fn, d){
//     let timer;
//     return function(){
//         let context = this;
//         args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, args)
//         }, d);
//     }
// }

// const bestfunction = debounce(getData, 300)


// document.querySelector("#grandparent").addEventListener("click", ()=>{
//     console.log("grandparent called")
// }, true);

// document.querySelector("#parent").addEventListener("click", (e)=>{
//     console.log("parent called");
//     e.stopPropagation();
// }, true)

// document.querySelector("#child").addEventListener("click", ()=>{
//     console.log("children called")
// }, true)


// document.querySelector("#category").addEventListener("click", (e)=>{
//     console.log(e.target.id)
//     window.location.href ="/"+e.target.id;
// })

// window.location.href = "/"+e.target.id;

// let sum = function(a){
//     return function(b){
//         if(b){
//             return sum(a+b);
//         }
//         return a;
//     }
// }







// console.log(sum(1)(2)(3)(4)())


let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b)
        }
        return a;
    }
}

console.log(sum(1)(2)(3)())



const throttle = (fn, d) => {
    let flag = true;
    return function(){
        let context = this;
        args = arguments;
        if(flag){
            fn.apply(context, args);
            flag = false;
            setTimeout(()=>{
                flag= true
            }, d)
        }
    }
}