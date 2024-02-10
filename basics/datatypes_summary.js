// Primitive
// seven types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score=100
const scoreValue=100.1
const isLoggedIn=false
const temp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId)
const bigNumber=1234567909876543211234567890n

// Reference(Non primitive)
// Array, objects, functions
const heroes=["shakti","nagesh"];
let myObj={
    name:"faizan",
    age:22,
}

const myFunction=function()
{
    console.log("hello");
}
//console.log(typeof myFunction);

/////////////////////////////////////////////////////////////////////////////////////////////
// Stack(primitive)    Heap(non primitive)

let name="Faizan"
let anotherName="name"
anotherName="Akram"
// console.log(name);
// console.log(anotherName);

let user1={
    name:"akbar",
    age:20
}
let user2=user1
user2.name="faiz"
console.log(user1.name);
console.log(user2.name);
