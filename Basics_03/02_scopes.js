let a = 1
const b = 2 
var c = 3

if (true){
    let a = 12
    const b = 13
    var c = 14
    console.log(a); // output 12 
    console.log(b); // output 13
}

console.log(a);//1
console.log(b);//2
console.log(c);//14  var works as globally 


// var is accessible through out the fucntion it is fucntion scoped 
// var can be declared within the scope 

// let is a blocked scope , it is confined to the block '{ ---- }'
// cant be redeclare within the scope 

// const it works like let 
// can't be redeclare wihtin the scope 