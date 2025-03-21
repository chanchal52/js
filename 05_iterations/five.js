const coding=["js","ruby","java","python","cpp"]
// coding.forEach( function (item) { // cl back function hai tw isme function ka naam ni hota h 
//     console.log(item)
    
// })


//+++++++++ ARROW FUNCTION +++++++
// coding.forEach( (item)=>{
//     console.log(item)

// })


// ++ function bna k pass kre tw
// function print(item){
//     console.log(item)
// }
// coding.forEach(print)

coding.forEach((item,index,arr)=> {
    console.log(item,index,arr)
})
const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]
// mycoding.forEach((item)=>{
//     console.log(item)
// })
mycoding.forEach((item)=>{
    console.log(item.languagename)
})