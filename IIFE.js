(function chai(){
    ///named iife
    console.log('DB CONNECTED');
}) ();

////IIFE=> jo function imediately exceut ho jaye globalq pollution se bachne k liye iife ka use krte haii
( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TO ${name}`);
})("hitesh");

