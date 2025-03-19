//Immediately invoked function expression(IIFE)
// function chai (){
//     console.log("connected")
// }
// chai()
(function chai(){ //named IIFI
    console.log("db connected")
})(); //this is called iife ()for execution yaha semi colon lgana pdega...agr vo ni lgaenge tw arrow function mei dikkat aaegi 
//ab arrow function bhi bna skte h 
(()=>{
    console.log("db connected")
})(); //yaha agr semicolon ni lgaenge tw next IIFI mei error throw krega
//agr parameter pass krna ho iske andr arrow function k andr
((name)=>{
    console.log(`db connected ${name}`)
})("hitesh")
 