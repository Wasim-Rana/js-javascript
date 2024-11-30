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
// console.log(userLoggedIn(" tom "));

// rest operator 


function addArguements(...number1){
        return number1
}

// console.log(addArguements(2));

// console.log(addArguements(12,23,45,556));

//(...) rest operator converts argument into array it store multiple argument 

//add object to function

const obj1 ={
    username : "tom",
    age: 20
}

function returnObject (anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

// returnObject(obj1)

returnObject({
    username: "hardy",
    age:19
})
//we can also give arguments while we calling of the function

//anyobject can get reference of anyiobject present in to js 


//array in the fucntion 

const arr1 = [12,122,323,"tom"]

function myArray (getArray){
    return getArray[2]
}
// console.log(myArray(arr1))
console.log(myArray([1,11,2,3,]));