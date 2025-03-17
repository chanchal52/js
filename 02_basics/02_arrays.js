const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel_heros.push(dc)
// console.log(marvel_heros) 
//aise krne se dc array jo h vo as an element treat hoga aur agr dc k elements access krna ho tw fr [3][0] aise krna hoga

// const abc_heros=marvel_heros.concat(dc)
// console.log(abc_heros);

//USING SPREAD OPTION
// const all_heros=[...marvel_heros,...dc]
// console.log(all_heros)

//  const another_array=[1,2,3,[4,5,6,],7,[6,7,[4,5]]]
//  const real_another_array=another_array.flat(Infinity)
//  console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) // empty isliye return kiya kyuki apn usme key value pair dere tw confuse ho jaega ki value
//ka array bnanan hai ya keys ka
 let score1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3))

