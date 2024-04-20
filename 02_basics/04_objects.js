//object ki singleton kaise kar sakte hai aur constructor ke through declare kaise kar sakte hai

// const tinderUser= new Object(); ///singleton object
const tinderUser= {}   /// non singleton object

tinderUser.id= "1234avc"
tinderUser.name="Rakehs"
tinderUser.isLoggedIn=false 

// console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); use ? for protection

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

// const obj3= {obj1, obj2}
const obj3=  Object.assign({},obj1, obj2) // {} is optinonal or {} behave as a target
console.log(obj3);

const obj4= {...obj1,...obj2}
//

const user=[
    {

    },
    {

    },
    {

    },
    {
        email:"some@gmail.com",
        fullname:{
            userfullname:{
                firstname:"Hitesh",
                lastname:"choudhary"
            }
        }
    }

]


// array[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //arr of arr

// sometimes key doesnot exist for that we have to check
console.log(tinderUser.hasOwnProperty('isLogged'));

// to check more property use console in browser


//++++++++++++++++++De- structuring 

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

}


// course.courseInstructor 
//naming is not compulsary 
//curly braces means destructuring
const {courseInstructor : instructor} = course

console.log(course.courseInstructor);
//OR
console.log(course.courseInstructor)
// OR 
console.log(instructor);

//+++++++++++++++++++++++++++++
//json is output  of  api
//json is object without name and the keys and values is of type string except boolean

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"

// }

// sometimes api will in the form of arrays (json)

[
    {},
    {},
    {}
]




