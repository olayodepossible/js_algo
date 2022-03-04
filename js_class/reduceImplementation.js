const obj = [
    {name: 'ade', age: 3},
    {name: 'david', age: 4},
    {name: 'do', age: 2},
    {name: 'bola', age: 5},
]

// let result = []
//  obj.forEach(element => {
//     result.push(element.name)   
// });

// const totalAge = obj.reduce((a, val) =>{
//  return a + val.age
// }, 0);

// const newValue = {
//     names: result,
//     totalAge: totalAge
// }

const newObj = obj.reduce((acc, val) =>{
    acc.names.push(val.name)
    acc.totalAge += val.age
    return acc
}, {names:[], totalAge: 0});

console.log(newObj)