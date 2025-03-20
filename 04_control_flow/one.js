// //if condition
// //comparison operator - <,>,<=, >=, ==,===(ye value aur type dono check krta h ), !==, !=
// if (2=="2"){
//     // console.log("executed")
// } //iska op ajaega kuki ye bs value check kr rhrha h 
// if (2==="2"){
//     // console.log("Executed")
// } //ye ni hoga execute kuki type bhi check krega aur ek string hai 
// const temp=41
// if(temp<50){
//     // console.log("less than 50")
// }
// // console.log("Greater than 50") // ye toh execute hoga hee 
// if(temp<50){
//     console.log("less than 50")
// }
// else{
//     console.log("greater")
// }
// const score =200
// if (score>100){
//     let power="fly"
//     console.log(`User power ${power}`)
// }
// // console.log(`User power ${power}`) //yaha mei power scope k bahar access krne ka try kr rha h tw ni hoga error throw krega
// const balance=1000
// if(balance<500){
//     console.log("less than")
// }else if (balance<750){
//     console.log("LESS THAN 750")
// }else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }
const userloggedin=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true
if (userloggedin && debitcard){ //LOGICAL AND
    console.log("allow to buy course")
}
if(loggedinfromgoogle || loggedinfromemail){ //LOGICAL OR
    console.log("user logged in")
}