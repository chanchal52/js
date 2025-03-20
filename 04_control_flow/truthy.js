const useremail="h@hitesh.ai" //agr yahi empty string pass krenge toh false lega ...aur empty array pass krenge toh true manega
// if (useremail){
//     console.log("got user email")
// }else{
//     console.log("dont have user email")
// }
//falsy values - false, 0, -0, BigInt 0n, "", null, undefined, Nan
//truth values - true, 1, "0",'false'(truthy value hai)," "(string with space), [],{}, function(){} (empty function is also truthy)
const email=[] //empty array..lets check ki ye truth h ki ni ...tw iska length ko condition mei dalo
// if(email.length===0){
//     console.log("array is empty")
// }
//ab agr empty object check krna ho tw ki truth h ya ni 
const emptyobject={}
// console.log(Object.keys(emptyobject)) //this returns array tw ab array ka tw pta h ki lengtth check krke nikal lete h 
// if(Object.keys(emptyobject).length===0){
//     console.log("empty object")
// }
// +++++++ NULLISH COALESCING OPERATOR (??): null undefined(only for null and undefined)
let val1;
// val1=5 ?? 10
// console.log(val1)

// val1=null??10;
// console.log(val1)

// val1= null?? undefined
// console.log(val1)

// val1=undefined??null
// console.log(val1)

// val1=undefined ?? 10
// console.log(val1)

// val1=null??10??20
// console.log(val1)
//++++++++++++TERNARY OPERATOR +++++++++   condition? true:false
const iceteaprice=100
iceteaprice<=80 ?console.log("less than 80"):console.log("more than 80")
