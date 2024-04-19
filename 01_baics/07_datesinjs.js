//Dates

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

//interview question
console.log(typeof(myDate));

//declare new date
//here yy mm dd   /// month 0 means january
let myCreatedDate = new Date(2023,0,23)

console.log(myCreatedDate.toDateString())

//with time which is in work with 24 hr cycle

myCreatedDate= new Date(2023,1,13,16,5,4)
console.log(myCreatedDate.toLocaleString())

//i want specific format like yy mm dd or  mm dd yy
// when we use  string month start with 1 first month
myCreatedDate= new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());
myCreatedDate = new Date("01-14-2024")

console.log(myCreatedDate.toLocaleString());

// what is the exact time stamp

let myTimeStamp =  Date.now();

// the time will be in millisecond form 1 st jan 1970
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));


//

let newDate = new Date()
console.log(newDate.getDay()); 
console.log(newDate.getMonth()+1)

// String interpolation
console.log(`Todays date is ${newDate.getDate()} and the month is ${newDate.getMonth() +1}`);

//imp  konsa  format chaiye uske liye control+space
newDate.toLocaleString('default',{
    weekday : "long",
    hour:"2-digit"
    
})
console.log( newDate);