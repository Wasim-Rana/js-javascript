const name="hello ";
const data=23

// console.log(name + data); // don't use this type of syntax 

// use bactics ` ` here appears string interpolation , here you create placholders in whivh you directly inject the data

// console.log(` ${name} here concatination is completed using dollar sign and curly brackets and data is ${data}`);


const name1= new String('Frankenstien')

// console.log(name1[2].toUpperCase());

// console.log(name1.__proto__);


// console.log(name1.charAt('3').toUpperCase());


// console.log(name1.indexOf('s'));


let name2 = name1.substring(1 , 3)
// console.log(name2);

 let name3 =name1.slice(1,7)
console.log(name3);


// let someString = "  helloo-hiii   "
// console.log(someString);            
// console.log(someString.trim()); // remove extra white spaces in the string 

let name4= "hi i am learning javascript and this content is been removed "

console.log(name4.replace('hi i','HI I '));


console.log(name4.includes('hello'));


let sliptName= 'hi-hello-this-is-slipt'
console.log(sliptName.split('-'));