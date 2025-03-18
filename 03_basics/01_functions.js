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
function loginusername(username="sam"){
    if (username=== undefined) {
        console.log("please enter valid username")
        return
    }
        
    return `${username} just logged in`
}
console.log(loginusername())