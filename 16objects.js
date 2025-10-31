// Singleton objects   => jab constructor se banega tab hi banta hai

// Object.create()



// object literal

const mysym = Symbol("newk1")
const jsUser = {
    name:"hitesh",
    [mysym] : "hel",
    age:20,
    "fullname":"hiteshcho",
    email: "gooleg.com"
}


console.log(jsUser.name);
console.log(jsUser[mysym]);
console.log(jsUser["name"]);
console.log(jsUser["fullname"]);


Object.freeze(jsUser)
