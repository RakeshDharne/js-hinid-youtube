// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);

//problem faced when two datatype  is not same


console.log("2">1);// true automatically convert string into number 
console.log("02">1);// true 
//always check that the comparision is between the same data type

console.log(null>0) //false
console.log(null==0)///false
console.log(null>=0)//true
 
// teh reason is that an equality check == and comparisions > < >= <= works differently
// thats why null >=0 is true and null >0 si false
//because it convert null =0
// the above must not use


console.log(undefined==0);

//=== strict check
// it check values and data types also

console.log("2"===2);
console.log(2===2);
