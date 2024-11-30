const Arr1=["String1","Integer","Boolean"]
const Arr2=["Alpha_num","Number","True"]

// Arr1.push(Arr2); // it is not sufficent to use this type of merge 

//output : [ 'String1', 'Integer', 'Boolean', [ 'Alpha_num', 'Number', 'True' ] ]

// const arr =Arr1.concat(Arr2) //return new array 

// console.log(arr); // [ 'String1', 'Integer', 'Boolean', 'Alpha_num', 'Number', 'True' ]

// console.log(Arr1.length);


const arr = [...Arr1,...Arr2,..."hello"] //spread operator 
// [
//     'String1', 'Integer',
//     'Boolean', 'Alpha_num',
//     'Number',  'True',
//     'h',       'e',
//     'l',       'l',
//     'o'
//  ]

// console.log(arr); //[ 'String1', 'Integer', 'Boolean', 'Alpha_num', 'Number', 'True' ]

const arrNew = [1,2,4,[5,4,21,23],[3,43,4],5,[9,6,5,1]]

// const newArr = arrNew.flat()
// console.log(newArr);
//output
// [
//     1, 2,  4, 5, 4, 21,
//    23, 3, 43, 4, 5,  9,
//     6, 5,  1
//  ]


console.log(Array.isArray("Shrek"));    //false

console.log(Array.from("Shrek"));   //[ 'W', 'a', 's', 'i', 'm' ]

console.log(Array.from({name:"Shrek"})); // it gives empty space [] , it cannot convert keys into array


let var1=200
let var2="Toothless"
let var3=true

console.log(Array.of(var1,var2,var3,"hello"));  //[ 200, 'Shrek', true, 'hello' ]

