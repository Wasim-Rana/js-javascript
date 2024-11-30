const thisExample = {
    username : "peter",
    age : 19,
    welcomeMsg : function (){
        console.log(`${this.username},welcome`);
        // console.log(this); // { username: 'peter', age: 19, welcomeMsg: [Function: welcomeMsg] }
    }

}

// thisExample.welcomeMsg()
// thisExample.username = "hanks"
// thisExample.welcomeMsg()

// console.log(this); // {} it contains empty object 


// const username = function (){
//     let uname = "peter"
//     console.log(this.uname);//undefined
// }

// this keyword will not work with function 

const username =  () => {
    let uname = "peter"
    console.log(this.uname);//undefined
}

// username()

// arrow function 

// const var1 = (num1 ,  num2) => {
//     return num1 + num2 
// }

// above is the explicit return , when we return value with return keyword 

// const var1 = (num1 , num2 ) => (num1 +  num2) // implicit return 

const var2 = () => ({username:"peter" , age : 19})
// console.log(var1 (2 ,3));

console.log(var2.username)

