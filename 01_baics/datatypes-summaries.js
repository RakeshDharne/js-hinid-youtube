// dataypes -- premitive and non  premitive
// # primitive  (call by value)
// 7 Types  : stiring, Number, Boolean, null, undefined,  Symbol, BigInt, 



// js is a  dynamically typed language

const  score=100
const  scoreVale=100.3
const isLoggedIn = false

let userEmail= undefined

const id=Symbol('123')  //return type symbol milta hai
const anotherId= Symbol('123')
// if the input value is in symbol is same but return  will not be same while checking
 console.log(id===anotherId); //false

const bigNumber=252462626356256262n;


 // Reference (non primitive) reference

//Array, Objects, Functtions,

//array
const heros= ["shaktiman", "nagraj", "doga"]

// object banate samay key value pair use karte hai

let myObj= {
    name: "hitesh",
    age : 22
}

//function

const myFunction =function(){

    console.log("hello world");
}


//ecma-international.org for study read typeof Operator

