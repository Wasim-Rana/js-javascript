
const myArr =[1,2,3,4,5]
// console.log(myArr);


// const arr= new Array(1,2,3,4,0)
// console.log(arr[0]);

// console.log(arr.length);


//Array Methods 


// myArr.push(7)

// myArr.pop() //remove last value 


// myArr.unshift(6) //insert the value at 0th index 
// myArr.shift() //remove the value at 0th index

// console.log(myArr.includes(8)); // gives the ans in boolean 

// console.log(myArr.indexOf(2)); // check wheater the value or index is there or not

// const newArr = myArr.join() //add all the element of array into a string 

// console.log(newArr);
// console.log(myArr);

// console.log(typeof(newArr));



// SLice , splice 

console.log("a " , myArr);
const myNewArr = myArr.slice(1,3)

console.log(myNewArr);

console.log(" b " , myArr);

const myNewArr1 = myArr.splice(1,3)
console.log(" c " , myArr);
console.log(myNewArr1);