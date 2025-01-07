const name = "hitesh"
const repoCount = 50

//console.log(name+repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('hitesh-hc');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);
const newStringOne = "      hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));

console.log(String.fromCharCode(65)); // Output: "A"
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"


console.log(String.fromCodePoint(128512)); // Output: "😀" (smiley emoji)
console.log(String.fromCodePoint(9731));   // Output: "☃" (snowman symbol)

const myname = "Alice";
console.log(String.raw`Hello, ${myname}\nHow are you?`);
// Output: "Hello, Alice\nHow are you?" (keeps \n raw)

let text = "Click here";
let result = text.anchor("myAnchor");
console.log(result);
//<a name="myAnchor">Click here</a>
//str.at(index)
let str = "Hello, world!";
console.log(str.at(7)); // "w"





