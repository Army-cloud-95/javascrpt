const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}

//console.log(user.welcomeMessage())
// user.welcomeMessage()
user.welcomeMessage();
user.username = "sam"
user.welcomeMessage();

// this =>current
// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);

// }
// chai()

// const  chai = () =>{// arrow function
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
// const addTwo = (num1,num2) =>{

//     return num1+num2

// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1+num2)

// console.log(addTwo(3,4))

const addTwo = (num1,num2) =>{ username: "hitesh"}

console.log(addTwo(3, 4))
const myArray  = [2,3,4,5]
myArray.forEach(() => {})

