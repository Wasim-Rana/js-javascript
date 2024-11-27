// for 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("5 is good");
//     }
//     console.log(element);
    
// }


for (let index = 0; index <= 10; index++) {
    // console.log(`outer loop ${index}`);
    for (let j = 0; j < 5; j++) {
        // console.log(`INNER LOOP ${j} and outer loop ${index}`);
        // console.log(index + ' * ' +j + '=' + index*j );
    }
    
}

let myArray = ["superman","batman","wonder woman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue 

// for (let index = 0; index <= 15; index++) {
   
//     if(index==5){
//         console.log(`5 is best ${index}`);
//         break
//     }
//      console.log(`value of i ${index}`);
// }

for (let index = 0; index <= 15; index++) {
   
    if(index==5){
        console.log(`5 is best ${index}`);
        continue
    }
     console.log(`value of i ${index}`);
}