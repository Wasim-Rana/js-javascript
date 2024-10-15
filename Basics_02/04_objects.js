// const obj1 = new Object(); // singleton object

const user ={
    // non singleton object 
}

user.id = "121"
user.city="Abad"
user.age="21"

// console.log(user);

const regirsterUser= {
    email: "E@gmail.com",
    fullname : {
        username : {
            firstname : "rana",
            lastname : "wasim"
        }
    }


}
// . operator is use to access the object 
// console.log(regirsterUser.fullname.username); // nested object uaing . operator 

//optional chaining

//if any of the value is not exist then we use ? symbol so if it exist then it return or if it is not no value return 

const obj1 = { 1: "abc" , 2: "cde"}
const obj2 = { 3: "efg", 4 : "stu"}

// const obj3 = Object.assign({},obj1,obj2) //{ '1': 'abc', '2': 'cde', '3': 'efg', '4': 'stu' }

// we user {} as a target value so all the source are assign to the target value 

// if object.assign({}, object1 ,object2) //the  value of object 1 and 2 will be move to the empty object 
// if object.assign( object1 ,object2) //the  value of object  2 will be move to the  object1 and every object that are in the block will assign to object 1


const obj3 = {...obj1 , ...obj2} //{ '1': 'abc', '2': 'cde', '3': 'efg', '4': 'stu' }

// console.log(obj3);

const user1 = [
    {
            id : 1,
            name : "abc"
    },

    {
            id : 2,
            name : "ac"
    },
    
    {
            id : 3,
            name : "bc"
    }
]

user1[1].id

// console.log(user);

// console.log(Object.keys(user)); // return all the keys present in the object 
// console.log(Object.values(user)); // return all the values present in the object 
// console.log(Object.entries(user)); // return all the entries present in the object [ [ 'id', '121' ], [ 'city', 'Abad' ], [ 'age', '21' ] ]

// the entries return array within an array , it convert all key value pair to an array 


const course = {
    name: "javascript",
    price : 300,
    instructor : "chai aur code"
}
const {instructor : inst} = course; // destructure any object 

console.log(inst);


// intro to api 

// {
//  //json
//  "name" : "wasim", // keys and value both are identify as a string 
//  "email" : "abc@gmail.com",    
// }