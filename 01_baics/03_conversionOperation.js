let score ="33abc"

//score = null hai to 0 aayega
//score = 33 hai to 33 aayega
//score =undefined hai to NaN
//score = true hai to 1 nahi to 0


console.log(typeof score);
console.log(typeof(score));
 
let valueInNumber =Number (score)
//upar convert kiya hai


console.log(typeof(valueInNumber))
console.log(valueInNumber);
//agar output number hai to thik hai nahi to output me NaN aaya hai isliye check karte ahi

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

