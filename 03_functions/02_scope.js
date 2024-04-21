
// {} -->scope

// this is global scope
var c=300
let a=200;
if (true) {
  let a=10;
  const b=20;             ///this is a block scope
   c=30;
   console.log("Inner "+a);
}

// console.log(a);
// console.log(b);
console.log(c);


////+++++++++ Nested Scope
console.log("///////////////////////////////////");
function one(){
   
    const username="hitesh"

    function two(){
        const webstie="youtube"
        console.log(username);
    }
    // console.log(webstie);// yahi error de diya isliye aage exec nahi hua
    two()
}

one()

if (true) {
    const username ="hitesh"
    if (username==="hitesh") {
        const webstie=" youtube"
        console.log(username + webstie);
    }
    // console.log(webstie);
}

// console.log(username);


console.log("++++++++++++++++++++++ interesting ++++++++++++++++++++");



console.log(addone(5));/// it will work   

function addone(num) {
    return num+1
}



const addTwo =function(num) {
    return num+2
}

console.log(addTwo(5));
