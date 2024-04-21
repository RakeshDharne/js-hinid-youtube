// Immediately Invoked Funcion Expressions (IIFE)
/// automatically run

//Named IIFI
(function chai() {
    console.log("DB CONNECTED");
})();
// sometime function doesnt know when to stop the context for that we end the IIFE using ;(simicolon)
//  global scope ke pollution se prblem hoti hai kai baar global scope me jo variable declaretion hue hai usee taklif hoti hai isliye hum iife
// ()()   first paranthesis for function defination and second for execution call


// Unamed iife 
((name) => {
    console.log(`DB connected by ${name}`);
})("Rakesh");// passing











