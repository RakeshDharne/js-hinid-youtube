//Functions
// syntax  keyword  name(){}


function sayMyName(){
console.log("R");
console.log("A");
console.log("K");
console.log("E");
console.log("S");
console.log("H");
}


// sayMyName --reference   ()--output
sayMyName()   //print

function addTwoNo(number1, number2){  //parameters
    
   console.log( number1+number2);

}

function addTwoNo(number1, number2){  //parameters
    
   // let result =number1+number2
   // return result
   return number1+number2
}

addTwoNo(3,null)  //argument

const result = addTwoNo(5,32)


console.log("result",  result)
 
//function logInUser(username ="sam" )   sam is default value is nothing is passed then default value will used
function logInUser(username= "sam"){
   // if(!undefinde)  -- true
   if(username===undefined){
      console.log("Please enter the user name")
      return 
   }
   return `${username} just logged in `
}

console.log(logInUser("Hitesh")) // if no value is passed then undefined


//////++++++++++++++++++

/// ...  restoperator or spreadoperator
// if(val1,val2, ...num1)  then num1 contains 500 2000 644 and val1-200 and val2-400
function calculateCartPrice(...num1){

   return num1;

}

console.log(calculateCartPrice(200,400,500,2000,644));

const user={

   username: "hitesh",
   price: 199
}

function handleobject(anyObject){
   console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleobject(user)
handleobject({
   username:"sam",
   price: 399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
   return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600]))


