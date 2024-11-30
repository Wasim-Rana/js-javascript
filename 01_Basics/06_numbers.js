const num = 100;
console.log(num);


const num1 = new Number(120)
// console.log(num1);


// console.log(num1.toString());
// console.log(num1.toFixed(3)); // it shows how many numbers are used after decimal OutPut: 120.000

const precision_number = 123.499
// console.log(precision_number.toPrecision(3)); // get the round of precision  Output: 123

const another_number = 1000000
// console.log(another_number.toLocaleString());// output : 1,00,00,000

// console.log(another_number.toLocaleString('en-IN'));


// ---------------MATHS-----------------------------//

// console.log(Math);
// console.log(Math.abs(-4));// output : 4
// console.log(Math.abs(4)); // output : 4

// console.log(Math.round(4.7)); // output : 5

// console.log(Math.ceil(4.2)); // output : 5 choose the higher value 
// console.log(Math.floor(2.9)); // output : 2


// console.log(Math.min(4,3,4,65,6)); 
// console.log(Math.max(4,3,4,65,6)); 



// console.log(Math.random()); // gives random value between 0 to 1 
// console.log((Math.random()*10) + 1); // gives minimum atleast 1 not 0

const max=19;
const min =11;

console.log(Math.random() * (max-min+1))

console.log(Math.floor(Math.random()* (max - min + 1 ) ) + min);

