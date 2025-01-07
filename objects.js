// signleton

// object literals


const mySym = Symbol("key1")
const jsuser = {
    name: "hitesh",
    "fullname": "Agrawal",
    [mySym]:"mykey1",
    age: 18,
    location: "jaipur",
    email: "khushiagrawal0196@gmail.com",
    isLoggedin: false,
    lastLoginDays:["Monday" , "Saturday"]
}
console.log(jsuser.email);
console.log(jsuser["fullname"]);
console.log(jsuser[mySym]);
jsuser.email = "khushi@gmail.com";
jsuser.greeting = function(){
    console.log("Hello js user");
}

console.log(jsuser.greeting());