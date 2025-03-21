//for 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (let i =0;i<10;i++){
//     const element=i
//     if(i== 5){
//         console.log("5is best number")
//     }
//     console.log(i)
// }
// for(let i=0;i<10;i++){
//     console.log(`Outer loop ${i}`)
//     for(let j=0;j<10;j++){
//         console.log(`Inner loop value of j ${j} and inner loop value of i ${i}`)
//     }
// }
for(let i=1;i<10;i++){
    // console.log(`Outer loop ${i}`)
    for(let j=1;j<10;j++){
        // console.log(i+'*'+j+'='+i*j) //this will print the tables
    }
}
let myarray=["flash","batman","superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element)
}
///+++++break and continue+++++
// for (let index = 1; index <20; index++) {
//     if(index==5){
//         console.log("5 is detected")
//         break;
//     }
//     console.log(`value of index ${index}`)
// }
for (let index = 1; index <20; index++) {
    if(index==5){
        console.log("5 is detected")
        continue;
    }
    console.log(`value of index ${index}`)
}