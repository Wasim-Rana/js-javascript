const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')
// console.log(descriptor);

const obj = {
    name: 'name',
    value : 22,

    order : function(){
        console.log("code crash");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj , 'name'));

Object.defineProperty(obj , 'name', {
    writable: false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(obj , 'name'));

for (let [key , value ] of Object.entries(obj)) {
    if(typeof value !== 'function'){
    console.log(`${key} :  ${value}`);

    }
}
