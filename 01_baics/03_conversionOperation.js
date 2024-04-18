let score ="33abc"

//score = null hai to 0 aayega
//score = 33 hai to 33 aayega
//score =undefined hai to NaN
//score = true hai to 1 nahi to 0


//dono tarike se likh sakte hai
console.log(typeof score);
console.log(typeof(score));
 
let valueInNumber =Number (score)
//upar convert kiya hai


console.log(typeof(valueInNumber))
console.log(valueInNumber);
//agar output number hai to thik hai nahi to output me NaN aaya hai isliye check karte rehna hai


//"33" => 33
//"33abc" =>NaN
//"true" => 1 ; false=>0


let isLoggedIn =1

let booleanIsLoggedIn= Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

//1 =>true 
//0 =>false
//"" =>false
//"hitesh" => true


let someNumber= 33


let stringsomeNumber= String( someNumber)
console.log( typeof stringsomeNumber);

////////////////**************Operations*********************/


let value=3
let negValue= -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power
// console.log(2%3); //remainder


let str1="hitesh"

let str2="Rakesh"

let str3= str1+str2

// console.log(str3);

// console.log("1"+2) /// pehle stirng hai to vo string me convert hoga

// console.log(1+"2");// pehle number hai to number me convert hoga

// console.log("1"+2+2);
// console.log(1+2+"2");



// console.log(+true)// op 1
// console.log(+""); //op 0


let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter=100

gameCounter++;
console.log(gameCounter);

// link to study 

//https:tc39.es/ecma262/multipage/abstract-operations.
//  html#sec-type-conversion
  