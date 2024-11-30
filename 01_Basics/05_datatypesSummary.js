// how we can store the data in the memmory and access it on this basis the datatype sare decribed 
// 1) primitive 2) non primitive / reference type 

// 1) primitve/call by value  : => string , number , boolean , null , undefined , symbol(use to create a unique value)  , BigInt : 



let id=Symbol("222")

let id2 = Symbol("222")

//console.log(id===id2); //false 


// 2) non-primitive / reference type :
//    =>    array , object , functions



let arrayData=["abc","abca","dasd"]
 let myObj = {
    name: "alphabet" // every thing inside the braces are identified as object 
}

let mufunction = function(){
   // console.log("hello world : ");

}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object


let myName= "Frank"
let myName2= myName

 myName2="Frankenstien"

console.log(myName);
console.log(myName2);



let user ={
    email:"abc@gmail.com",
    city: "New Jersey"
}

let user2=user 

user2.city="Sydney"
console.log(user.city);
console.log(user2.city);