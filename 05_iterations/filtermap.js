const mynum=[1,2,3,4,5,6,7,8,9,10]
// console.log(mynum.filter((num)=>num>4)) //arrow function use kr rhe h as a call back function and we wnt number greater than 4 num => num>4
//ek tarike se aur likh skte arrow function hee use krke
const nums=mynum.filter((num)=>{
    return num>4                 // agr {} scope open kr rhe h arrow function mei tw fr return use krna hoga
}
)
// console.log(nums)
// /+++++ using for each ++++++
const newnums=[]
mynum.forEach((numy)=>{
    if(numy>4){
        newnums.push(numy)
    }
})
// console.log(newnums)
//////
/////
////
const books=[
    {title: "book one",genre:"fiction",publish:1981,edition:2004},

    {title:"book two",genre:"non-fiction",publish:1992,edition:2008},

    {title:"book three",genre:"history",publish:1999,edition:2007},

    {title:"book four",genre:"non-fiction",publish:1989,edition:2010},

    {title:"book five",genre:"science",publish:2009,edition:2014},

    {title:"book six",genre:"fiction",publish:1987,edition:2010},
    {title:"book seven",genre:"history",publish:1986,edition:1996},
    {title:"book eight",genre:"science",publish:2009,edition:2014},
    {title:"book nine",genre:"non-fiction",publish:1981,edition:1989}
];
// const userbooks=books.filter((bk)=>bk.genre==="history") ///books is an array of objects...hr ek object ko bk bolre h ..tw bk .genre aur
//fr check kr rhe h ki history genre h ki ni ..jiska hoga vo return hoga

// const userbooks=books.filter((bk)=>{ return bk.publish>2000}) // ab{} use krke scope open kre h tw return keyword use krenge
const userbooks=books.filter((bk)=>{return bk.publish>=1995 && bk.genre==="history"
})
console.log(userbooks)