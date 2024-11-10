// function function_name( num1 , num2 ){
//     console.log(num1 + num2) 
// }


function function_name( num1 , num2 ){
    let var1= num1 + num2 
    return var1
}

//function_name(2 , 4);

const var1= function_name(4,5)

// console.log("Result : " , var1); // Result : undefined 
// why ?? --> cause we have use console log in the function , it only return console 
// to use var for funtion we must declare a variable in the function


function userLoggedIn(username){
    if (!username){
        console.log("enter username");
        return 
    }
    return `${username} just logged in `
}
console.log(userLoggedIn("wasim "));