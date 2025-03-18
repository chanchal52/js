//const tinderuser=new Object() //declaring an object  - single ton object
const tinderuser={} //another way of declaring object
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false
//console.log(tinderuser)
const regularuser={
    email:"some@gmail.com",
    fullname:{ //object k andr object (nested)
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"

        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// console.log(obj3)
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3)//
 //agr database se values aati h tw array of objects aata h 
 const users=[{id:1,email:"ha@gmail.com"},{id2:2,email:"hv@gmail.com"}]
 users[1].email
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'))
const course={
    coursename: "js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
course.courseinstructor //valid hai lkn agr 3baar print krana ho tw not a good practice 
const{courseinstructor}=course
console.log(courseinstructor) // isse ye hora h ki baar baar course.courseinstructor ni likhna pdega...courseinstructor krkre bhi op milega
// pr lgra ki courseinstructor bht bda naam hai tw usko apn short bhi kr skte h 
const{courseinstructor:instructor}=course
console.log(instructor)     // tw bhi result same aaega....oject destructuring 

