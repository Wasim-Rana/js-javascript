const num = [1,2,3,4,5]

// accumulator is an empty variable 

// const intialVal = 0

const myTotal = num.reduce( (accumulator , currentvalue) => {
    // console.log(`accumulator is : ${accumulator} and CurValue is : ${currentvalue}`);
    return accumulator + currentvalue 
}, 0 ) // it is accumulator value , any value given after ' , ' is the value which accumulator holds 

// console.log(myTotal);

// output :

// at first accumulator start with 0 and then after second iteration the value of currentvalue will be shift to accumulator i:e 0 to 1 and now the accumulator holds 1 and after seconde iteration the current value will be 2 and the it will be moved to accumulator and so on..

// accumulator is 0 and CurValue is 1
// accumulator is 1 and CurValue is 2
// accumulator is 3 and CurValue is 3
// accumulator is 6 and CurValue is 4
// accumulator is 10 and CurValue is 5
// 15


const Cart = [ 
    {
        course : 'js',
        price : 299
    },
    {
        course : 'python',
        price : 399
    },
    {
        course : 'java',
        price : 259
    }
]

const Myprice = Cart.reduce( (accumulator, item) => {
    return accumulator + item.price
}, 0 )


console.log(Myprice);