//+++++++   for of  +++++++++
// ["",","] - array of strings
// [{},{},{}]-array of objects 

// for (const element of object) {    ---------syntax
// }
// const arr=[1,2,3,4,5] 
// for (const num of arr) {
//     // console.log(num)
    
// }
// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
    
// }
// ++++++ MAPS ++++++++++ --- holds key value pairs and remembers the original insertion order of the keys -uniques values no duplicates
const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
// console.log(map)
//for of in map//
for (const [key,value] of map) {
    console.log(key,':-',value)
    
}

// const myobject={
//     "game1":"NFS","game2":"spiderman"
// }
// for (const [key,value] of myobject) {
//     console.log(key,"-",value) //// error throw krega bolega ki ye object iterable ni h 
    
// }
const myobject={
    game1:"NFS",game2:"spiderman"
}
for (const [key,value] of myobject) {
    console.log(key,"-",value) //abhi bhi voi error throw kr rha h 
    
}