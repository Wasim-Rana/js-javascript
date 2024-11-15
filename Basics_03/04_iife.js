// IIFE immediatly invole function arguments 


(function fun1 (){
    console.log("this is an example of named IIFE");
}) ();


// to create multiple iife we use  ;  explicitly 

( (name) => {
    console.log(`this is an example of unnamed iife ${name}`);
} ) ('wasim')


