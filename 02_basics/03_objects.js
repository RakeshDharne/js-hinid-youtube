/// agar hum constructor se banate hai to singleton 
Object.create
// Object literals
// objects ke andar keys aur values dete hai


// symmbol 
const mySym=  Symbol("key1")


const jsUser= {
    name:"Rakesh",
   age: 24,
   [mySym]: "key1my",         // syntax to use symbol in js give square bracket to sybol else it will show the datatype string
   "full_name": "Rakesh Bharat Dharne",
   location: "rawanwadi",
   email: "hitesh@hoogle.com",
   isLoggedIn:false,
   LastLogininDays: ["MOnday","Saturday"] 
}

//how  to access 2 method
console.log(jsUser.email);
console.log(jsUser["email"]); /// but in object it treat as  a string
console.log(jsUser.full_name);
console.log(jsUser[mySym]);

jsUser.email="chatgpt@opnesource.com"
// Object.freeze(jsUser) // now values in object cant be changed
jsUser.email="akashsdl.com"


// we can treaat function as variable

jsUser.greeting= function(){
    console.log("Hello js user");  //simple 
}

jsUser.greetingTwo= function(){
    console.log(`hello js user ${this.full_name}`); //we are referring values
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


 