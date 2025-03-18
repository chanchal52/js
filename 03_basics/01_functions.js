// console.log("h")
// console.log("i")
// console.log("t")
// console.log("e")
// console.log("s")
// console.log("h")
// function saymyname(){
//     console.log("h")
// console.log("i")
// console.log("t")
// console.log("e")
// console.log("s")
// console.log("h")

// }
// saymyname()
// function addtwonumber(n1,n2){
//     console.log(n1+n2)
// }
// addtwonumber(3,5)
// addtwonumber(3,"4")
// addtwonumber(3,"a")
// addtwonumber(3,null)
// function addtwonumber(n1,n2){
//     console.log(n1+n2)
// }
// const result=addtwonumber(3,5) aise mei result: undefined aaega 
// console.log("result",result)
// function addtwonumber(n1,n2){
    // let result=n1+n2
    // return result
//     return n1+n2
// }
// const result=addtwonumber(3,5)
// console.log("result",result)
// function loginusername(username){
//     return `${username} just logged in`
// }
// console.log(loginusername("hitesh"))
// console.log(loginusername("")) //empty string tw just logged in 
// console.log(loginusername()) // kuch string hee ni pass kr rhe h ...empty string bhi ni ..tw undefined bolega undefined just logged in 
// to avoid undefined we can use if loop
// function loginusername(username){
//     if (username=== undefined) //or if (!username) empty string is also treated as invalid input
//         {console.log("please enter valid username")
//         return}
//     return `${username} just logged in`
// }
// console.log(loginusername())

//**we can also set a default value
// function loginusername(username="sam"){
//     if (username=== undefined) {
//         console.log("please enter valid username")
//         return
//     }
        
//     return `${username} just logged in`
// }
// console.log(loginusername())
// function calculatecartprice(n1){
//     return n1
// }
// console.log(calculatecartprice(200))
// function calculatecartprice(...n1){
//     return n1
// }
// console.log(calculatecartprice(20,30,40)) //agr multiple values pass krni ho tw (...n1) aise likho...just like spread...
//spread hee hai isme isko flat bolte
function calculatecartprice(val1,val2,...n1){
    return n1
}
// console.log(calculatecartprice(20,30,40,50)) //val1 20,val2-30 fr n1 40 50 retyrn krega
const user={
    username:"hitesh",
    price:19
}
function handleobject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user) //abhi object bna k pass kiye the
//direct object bhi pass kr skte hai like below
handleobject({
    username:"sam",price:10
})
//** ab array ka krke dekhte hai ..functions aur object ko pass krke dekhe
const mynewarray=[20,40,60]
function returnsecondelement(getarray){
    return getarray[1]
}
// console.log(returnsecondelement(mynewarray)) 
console.log(returnsecondelement([20,40,60])) //direct array passs kr rhe h 