//variable memory me space reserve ho gaya hai aur usko change kiya ja sakta hai

// we use only let not var because of scope problem

const accountId =12345
let accountEmail="rakesh@gmail.com"
var accountPassword="123456"

accountCity="jaipur"

// accountId=2  it means that we can not change the value of const
//not allowed


accountEmail="samirkarem@gmail.co"
accountPassword="646644"
accountCity="Bhandara"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
prefer  not to  use var
because of issue in block scope and functional 
wihtout using type we can declare variable
*/

let accountState
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//output of accoutnState is undefined
