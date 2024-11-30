// objects can be declared in two ways 

//1) literals
//2) constructor

// singleton --> single object of its own kind  --> created from constructor 

//Object.create //singleton

//object literals

//to access the objects value we use " . " notation

const mySym = Symbol("hello this is symbol")

const user = {
    //keys : values; 

    name : "toothless" , 
    "lastname" : "dragon" ,
    [mySym] : mySym ,
    age : 12 ,
    loc : "dragon island" ,
    hobbies : ["reading" , "coding" , Array.of("hello", " hi")]
}

// console.log(user.name);

// console.log(user["name"]);

// console.log(user["lastname"]);

// console.log(typeof user[mySym]);

// console.log(user[mySym]);

//to change the object value 

user.age=14;

// console.log(user);

//to restrict to t=change the value of the object 

// Object.freeze(user)

user.age= 15

// console.log(user);


user.greeting = function(){
    console.log(" good evening");
}



user.greeting2 = function(){

    console.log(`good morning , ${this.name}`);
}
console.log(user.greeting2());