const myObj = {
    java : "java",
    cpp : "c++",
    js : "javascript"

}

for (const key in myObj) {
//  console.log(key);  // output : keys   

    // console.log(myObj[key]); // ouput : values 

    // console.log(`key id ${key} and the value is ${myObj[key]}`);
}

const prog = ["js","java","python"]

for (const key in prog) {
    // console.log(key);// output : 0,1,2 

    console.log(prog[key]);
}


// Note : for in loop does not work with map cause maps are not itereable 

