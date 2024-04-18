///numbers


const score= 400
console.log(score);


const balance = new  Number(100)
console.log(balance) 

console.log(balance.toString());
console.log(balance.toString().length);

// for 2 decimal value  
console.log(balance.toFixed(2))


// starting ke digits ko 1 se(jab vo decimal ke pehle ho aur .5>= ho) ya(jab vo decimal ke baad ho) 0.1 se badha deta hai  aur(decimal ke pehle vale ko round off kar deta ahi)
const otherNumber =23.4966

console.log(otherNumber.toPrecision(2))

const hundreds =1000000

console.log(hundreds.toLocaleString('en-IN'));

///Maths  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  math library comes with javascript/


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.min(2,56,6,4,4,66))
// console.log(Math.max(2,56,6,4,4,66))


// the value of random is range form 0 t0 1

console.log((Math.random()*10)+1)

const min =10
const max =20

console.log(Math.floor(Math.random()*(max-min+1))+min)



