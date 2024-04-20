//Arrays
// imp documentataion padhna
// arrays in java are resizable
// mix elements can be added
// zero based indexing
//  when we change in copy of array it will also change in original array bcz of pass by reference
//shallow copy or deep copy

const myArray = [0,1,2,4,5] /// can contain different tyoes of elements

console.log(myArray[0]);

const myHeros =["Rakesh" ,"Ramesh" , "Suresh","Naresh","Prakash"]
const myArray2= new Array(1,2,3,4)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//Arrays methods

myArray.push(6)
myArray.push(7)
myArray.pop()

  
// myArray.unshift(9)  /// used to add at first index of array
// myArray.shift()    // it is remove the first  element of array
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9));  // boolean return type
// console.log(myArray.indexOf(12) );
// console.log(myArray.indexOf(5) );

const newArr= myArray.join()  // it is used to convert array into string and it also bind it

console.log( myArray); //arr
console.log( newArr); // string

//slice, splice
//slice : 
console.log("A ",myArray)
const myn1=  myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);

//splice  it manipulate array  and  it also include the last index

const myn2= myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2)



