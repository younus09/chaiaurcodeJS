const myheroes = ["thor","naruto","spiderman"]
const dc = ["superman", "flash", "batman"]

// myheroes.push(dc)

const allheroes = myheroes.concat(dc)
// console.log(myheroes);
// console.log(dc);

console.log(allheroes);

const newheroes = [...myheroes, ...dc]

console.log(newheroes);

const arr = [1,2,[2,4,3,[4,21,1]]]

const newarr = arr.flat(Infinity)

console.log(newarr);