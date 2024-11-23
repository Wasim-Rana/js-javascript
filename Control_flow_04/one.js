// if 
//  if (true){

//  }

//  if (flase){

//  }


 // operators for comparison > , < ,  <= , >= , == , === , !== , !=

//  const temp = 3
//  if(temp === 2 ){
//     console.log("yes!");

//  } else {
//     console.log("no temp is not 2 ");
//  }

//  console.log("no it is not ");

const score = 200 

// if (score < 100 ){
//     const power = "fly"
//     console.log(`user power ${power}`);
// }


// short hand 

// const balance = 1200 

// if( balance > 500) console.log("test");

// nesting 

// if(balance < 500){
//     console.log("less than 500");

// }else if ( balance < 700 ){
//     console.log("less than 700");
// }else if ( balance <=1000){
//     console.log("yess it is equal to 1000");
// }else {
//     console.log("balance is greater than 1200");
// }


const userLoggedIn = true 
const debitCard =  true 
const loggedInGoogle = flase 
const LogEmail = true 

if ( userLoggedIn  && debitCard ) {
    console.log("is allowed");
}else {
    console.log("not allowed");
}

if ( loggedInGoogle || LogEmail){
    console.log("logged in ");
}else {
    console.log("logged out ");
}