const mynums=[1,2,3,4]
// console.log(mynums.reduce(function(acc,currval){
//     console.log(`value of acc${acc} and value of current value is ${currval}`)
//     return acc+currval
// },0)) yaha 0 isliye add krte h intial valyue k liye jb phli baar 1 ko add krega tw 0 k sath krega fr 1+2+0 aise 

// +++++ using arrow function++++
const total=mynums.reduce((acc,curr)=>acc+curr , 0 )
// console.log(total)
//  another example
const shoppingcart=[{
    itemname:"jscourse",price:2999},
    {itemname:"pycourse",price:199},
    {itemname:"datascience course",price:399}

]
const total_price=shoppingcart.reduce((acc,sc)=>{
    return acc+sc.price
},0)
console.log(total_price)