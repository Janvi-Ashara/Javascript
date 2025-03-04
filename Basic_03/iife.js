// Immeadiately invoked function expression
//solution for global variable polution and objects
(
function chai(){
    console.log('DB connected');
})();   //DB connected

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('janvi')   //DB CONNECTED TWO janvi