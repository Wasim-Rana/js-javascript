// const code = ["js","c","python","java","django"]

// const values = code.forEach( (item) => {
//     console.log(item);
//     // for each does not return any value 
// })


// console.log(values);


const Mynumbers = [1,2,3,4,5,6,7,8,9,0]

// const newNumbers = Mynumbers.filter( (num) => num > 5)

// const newNumbers = Mynumbers.filter( (num) => {
//     return num > 5 
    
// })

// const newNumbers = []

// Mynumbers.forEach( (num) => {
//     if(num>5){
//         newNumbers.push(num)
//     }
// })
// console.log(newNumbers);



const books = [
    {
        title: 'Book1',genre:'fiction', published:'1991',price: '22$'
    },
    {
        title: 'Book2',genre:'science', published:'1941',price: '52$'
    },
    {
        title: 'Book3',genre:'myth', published:'1951',price: '54$'
    },
    {
        title: 'Book4',genre:'space', published:'1996',price: '23$'
    },
    {
        title: 'Book5',genre:'fiction', published:'1997',price: '24$'
    },
    {
        title: 'Book6',genre:'science', published:'1998',price: '33$'
    },
    {
        title: 'Book7',genre:'science', published:'1992',price: '63$'
    }
]

// const userBOOK= books.filter( (bks) => {
//     return bks.genre === 'science'
// })
const userBOOK= books.filter( (bks) => {
    return bks.published >= 1992 && bks.genre ==='space'
})


console.log(userBOOK);