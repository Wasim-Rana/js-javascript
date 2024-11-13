let a = 1
const b = 2 
var c = 3

if (true){
    let a = 12
    const b = 13
    var c = 14
    // console.log(a); // output 12 
    // console.log(b); // output 13
}

// console.log(a);//1
// console.log(b);//2
// console.log(c);//14  var works as globally 


// var is accessible through out the fucntion it is fucntion scoped 
// var can be declared within the scope 

// let is a blocked scope , it is confined to the block '{ ---- }'
// cant be redeclare within the scope 

// const it works like let 
// can't be redeclare wihtin the scope 

// nested fucntion 

function one (){
    const username = "wasim"
    function two (){
            const fname = "rana"
            // console.log(username); // can be accessed because it is defined parent class block 
    }

    // console.log(fname); // cannot be accessed because it is defined in the childs block  
    two()
}

one()

if(true){
    const username = "wasim"
    if(username === "wasim"){
        const surname = " rana"
        // console.log(username + surname);
    }
}

// console.log(username); // shows error because it is initialize inside the block 


// ++++++++ function hoisting +++++++++++++++++


console.log(addone(6)); // it runs without any error even if we call before its declaration 
function addone (num){
    return num + 1
}

// it is also known as expression 

// console.log(addtwo(4)) // here if we call before it declaration it shows error 

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(4));

// the above example is know as hoisting which means thats how the fucntion is declared and called it is very important to 
