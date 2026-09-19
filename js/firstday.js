// reverse the string ..

function reverseString(str){
    return(
        str.split("").reverse().join("")
    )
}

console.log(reverseString("hyroX"))


//print the longest word in the sentence ..



function longestWord(sentence){
    let words = sentence.split(" ");
    let longest = "";

    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;

}



console.log(longestWord("My name is shubham AWASTI"))


function reverseString(){
    sh
}







let name = "shubham";
let age = 20;
let city = "New Delhi";
let college = "Nims University";


console.log(`${name} is belongs to ${city} and he is ${age} year old and he study at ${college}`)



function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2