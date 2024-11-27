// for of loop 


const MyArr = [1,2,3]
// object referes to the value which we have to iterate not the Object 

for (const element of MyArr) {
    
    // console.log(element);

    } 

const str = "hello world"

for (const element of str) {
    
    // console.log(`each character is ${element}`);
}



// Maps 

// it is an object which holds key value pair 

const map= new Map()
map.set('state','mumbai')
map.set('city','pune')
// map.set('state','mumbai')

// console.log(map);

for (const [element,value] of map) {
    // console.log(element , ' ' , value);
}


const myObj = {

    'Name' : 'peter parker',
    'alias': 'spider man'
}

for (const [element,value] of myObj) {
    // console.log(element , " " , value);
}