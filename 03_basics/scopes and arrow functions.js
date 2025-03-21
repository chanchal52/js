// let a=10
// const b=20
// var c=30
// console.log(a)
// console.log(b)
// console.log(c)
if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a)
// console.log(b)
//console.log(c) //30 dega whish is wrong because c ka scope tw loop k bahar hai....vo loop k andr access kr leera h 
// let a=300
// if(true){
//     let a=10
//     const b=20
//     var c=30
//     console.log("Inner",a)
// }
// console.log(a)
    
// function one(){
//     const username="hitesh"
//     function two(){
//             const website="youtube"
//             console.log(username)
//     }
//     // console.log(website)
//     two()

// }
// one()
// if(true){
//     const username="hitesh"
//     if(username==="hitesh"){
//         const website="youtube"
//         console.log(username + website)
//     }
    // console.log(website)  website scope k bahar aake access krna chah rhe h tw ni hoga 
// }
// console.log(username) username ko scope k bahar aake access kr rhe h tw ni hoga 
// const user={
//     username:"hitesh",
//     price:999,
//     welcomemessage:function(){
//         console.log(`${this.username},welcome to website`)
//     }
// }
// user.welcomemessage()
// user.username="chanchal"
// user.welcomemessage()
// function chai(){
//     const name="hitesh"
//     console.log(this) //pr  ab agr console.log(this.name) krenge tw undefined bolega ..function k andr this kaam ni kr rha h 
//     //sirf object k liye work kr rha h 
// }
// chai()
// const chai=function(){
    // console.log(this)// yaha ek error aaega jb apn function ko ek vairable mei strore krte h tw usko expression bolte
    //aur vo error dega ki clling before definition lkn agr nrml function chai() aise krke phle upr chai()krenge tw error ni milega

// }
// const chai=function(){
//     console.log(this)
// }
// chai()
const chai =() => {  //ARROW FUNCTION
    let username="hitesh"
    console.log(this) //arrow function mei bhi ye kaam ni krega empty object return hoga
}
// chai()
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,4))
//++++++ this can be done in other way 
// const addtwo=(num1,num2)=>(num1+num2)
// console.log(addtwo(3,4))

const addtwo=(num1,num2)=>({username:"hitesh"})//agr arrow function use kr rhe ho tw return ni use krenge
//parenthesis use krna hoga.... agr arrow function ni use kr rhe ho tw return keyword lgana pdega
console.log(addtwo(3,4)) 

const myarray=[2,3,4,5,6]
    // myarray.forEach(function(){}) //this is a correct syntax
    // myarray.forEach(()=>{}) //arrow function  or ()=>() aise bhi likhte h arrow functions ko 
