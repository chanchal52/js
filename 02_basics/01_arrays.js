const myarr=[0,1,2,3,4,5]
const myheros=["shaktiman","naagraj"]
const myarr2=new Array(0,2,4,5)
// console.log(myarr[0]);

//Array methods
//myarr.push(6)
//myarr.push(7)
//myarr.pop()
// console.log(myarr)
//  myarr.unshift(9)
// console.log(myarr)
// myarr.shift
// console.log(myarr)
//***************Slice and Spice**********

console.log("A",myarr)
const myn1=myarr.slice(1,3)
console.log(myn1)
console.log("B",myarr);
//splice mei array change ho jaega [0,4,5] vo 123 ko nikal dega aur slice mei 3 included ni rhta h 
//aur splice mei 3included rhega aur array changed ho jaega

const myn2=myarr.splice(1,3)
console.log("C",myarr)
console.log(myn2)