//Primitive

// 7 types : string, Number,Boolean,null,undefined,symbol,Bigint

const score = 100
const scorevalue= 100.3
const isloogin = false
const outsidetemp = null
let useremail;
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);
const bigNumber = 3456543576654356754n




//Reference (Non primitive)

// Array,Objects,Functions
const heros = ["shaktiman","naagraj","doga"]
 let myobj = {
    name:"khushi",
    age: 22,

}
 const myFunction  = function(){
    console.log("Hello world");
 }
 console.log(typeof myFunction);



 //**************************************** */


 //Stack(primative),Heap(non-primitive)

let myYoutubename  = "Hiteshchoudhary.com"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubename);
let userone = {
    email:"user@gmail.com",
    upi: "user@ybl",

}
let usertwo = userone
usertwo.email = "khushi@google.com"
console.log(userone.email);
console.log(usertwo.email);