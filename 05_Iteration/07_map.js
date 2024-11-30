const numbers = [1,2,3,4,5,6,7,8,9,0]

// const newNum = numbers.map( (num) => num + 10)

// chaining

const newNum = numbers
                        .map( (num) => num * 10 ) // return all values 
                        .map( (num) => num + 4)
                        .filter( (num) => num >= 50) // return true values 

console.log(newNum);