const userEmail = "W@gmail.com"

if(userEmail){
    console.log("got email");
}else{
    console.log("not found");
}

// when we have any value assigned it is assumed that the value is true 

//falsy value 

//  - false , 0 , -0 , BigInt  0n , empty string , null , undefined ,  NaN

// truthy value 

// {} , [] , "0" , 'false' , " " , function(){} 

const arr = []

if( arr.length === 0){
    console.log("array");
} 

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty ");
}


//false == 0 // true 

//false == ' ' // true 

// 0 == ' ' // true

// Nullish coalescing operator (??) null , undefined 

let val1 ;
// val1 = 5 ?? 10 
// val1 = null ?? 10

val1 = undefined ?? 15
// console.log(val1);

// ternary operator 

// condition ? true : false 


