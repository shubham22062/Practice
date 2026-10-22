// reverse the string ..

// function reverseString(str){
//     return(
//         str.split("").reverse().join("")
//     )
// }

// console.log(reverseString("hyroX"))


// //print the longest word in the sentence ..



// function longestWord(sentence){
//     let words = sentence.split(" ");
//     let longest = "";

//     for(let word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }
//     return longest;

// }



// console.log(longestWord("My name is shubham AWASTI"))


// function reverseString(){
//     sh
// }







// let name = "shubham";
// let age = 20;
// let city = "New Delhi";
// let college = "Nims University";


// console.log(`${name} is belongs to ${city} and he is ${age} year old and he study at ${college}`)



// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const increment = counter();

// console.log(increment()); // 1
// console.log(increment()); // 2

// //for each is an array method used to run the function for evey elements of array ...

// array.forEach(function(element , index , array){
//     //code ..
// });


// const number = [20,30,60,70,80];

// number.forEach((number)=>{
//     console.log(number);
// })


// extration of digits..

let nums = 5647;

while(nums>0){
    digit = nums%10;
    console.log(digit);

    nums = Math.floor(nums/10)
}

print("Hello")
print("World")
print("Python")


function factorial(n){
       if(n<=1) return 1;

       return n* factorial(n-1);
}

console.log(factorial(5));


// variable store data in memory that your program can use..

var name = "shubham";

let age = 22;

const country = "india";


// power operator ..

console.log(2**3);


// ternery opertore..


const result = age>=18? "Adult":"Minor"

// string ..



const name = "Shubham"


console.log(name.length);

console.log(name.toUpperCase())
console.log(name.toLowerCase());

console.log(name.includes("ham"));

console.log(name.slice(0,3));

console.log(name.replace("shub", "S"))
