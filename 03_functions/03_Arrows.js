// this keyword reffer the current context of  scope

const user={

    username:"hitesh",
    price:999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //current context ke bare me batata hai matlab uska scope 
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);//  the output will be {} empty object because we are in node environment having global scope 


// function chai(){
//     let username="hitesh"
//     console.log(this.username); /// this works on objects  output undefined
// }

// chai()



// in arrow function this keyword is not work but it will work in normal function. availability of arguments objets is not available in arrow function
// const chai = () => {
//     let username="hitesh"
//     console.log(this)

// }

// chai()

//baisc arrow funcion
// const addTwo=(num1, num2)=>{

//     return num1+num2;
// }

// console.log(addTwo(12,13));



// implicit return 
// when using curly braces use return 
//paranthesis ke samay nahi lagana padta
// to return object form function wrapp in paranthesis

const addTwo=(num1, num2)=>   ({username: "Rakesh"}) ;

console.log(addTwo(12, 13));
 
 















