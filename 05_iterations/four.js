const  myobject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}// objects ko iterate krne k liye we use "FOR IN " loop
// for (const key in object) { -------------syntax
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// for (const keys in myobject) {
//     console.log(keys)
// }
// for values in the object we use myobject[keys] isse value mil jaegi 
// for(const keys in myobject){
//     console.log(myobject[keys])
// }
const program=["js","ruby","python","java","cpp"]
for (const key in program) {
    console.log(program[key])

}
