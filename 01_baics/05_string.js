
const name= "hitesh"
const repoCount= 50

//old way 
// console.log(name + repoCount+" Value");


//modern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('hiteshhc')


console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));


const newString= gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-8,4)
console.log(anotherString);

//to remove unwanted space we use trim()
const newStringOne= "    hitesh     "
console.log(newStringOne)
// trim remove starting space and ending space
console.log(newStringOne.trim());

const url="https://hitesh.com/hites%20choudhary"

console.log(url.replace("%20","-"));



console.log(url.includes("hitesh"));
console.log(url.includes("Rakesh"));

 