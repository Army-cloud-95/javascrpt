// function addTwoNumber(number1, number2){
//     // console.log("H");
//     // console.log("I");
//     // console.log("T");
//     // console.log("E");
//     // console.log("S");
//     // console.log("H");
//     //console.log(number1+number2);
//     let result  = number1+number2
//     return result
    
// }
//  const result = addTwoNumber(5,7)
//  console.log("Result : ",result);
function loginUserMessage(username){
    if(username === undefined){
        console.log("Pleasee enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Khushi"));

function calculatecarprice(...num1){
    return num1
}
 //console.log(calculatecarprice(200,400,500))

 const user = {
    username: "Hitesh",
    price: 199
 }
 function handleobject(anyobject){
        console.log(` username is ${anyobject.username} and price is ${anyobject.price}`)
 }
 //onsole.log(handleobject(user))
 handleobject({
    username: "sam",
    price: 399

 })

 const myNewArray = [200,400,800,900]


 function returnsecondvalue(getarray){
        return getarray[3]
 }
 console.log(returnsecondvalue(myNewArray));

