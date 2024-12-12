// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise((resolve, reject) => {
    setTimeout( () => {
        // console.log("task complete ");
        resolve() // if we don't call resolve then .then will not execute 
    },1000)
})

// consumption of promise to perfrom resolve and reject 

promiseOne.then( () => {
    // console.log("Promise consumed");
}) // resolve is connected with .then 


// ------------------------------------------------------------- if promise is not hold by any variable 
new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log(" Async task 2..");
            resolve()
        }, 1000);
}).then( () => {
    console.log("Async two resolve");
})

const promiseThree = new Promise( (resolve,reject) => {
            setTimeout( () => {

            },1000)
            resolve({
                username : "Frank",
                email : "abc@gmail.com"
            })
})

promiseThree.then( (user) => {
        // console.log(user);
})


const promiseFour = new Promise ( (resolve,reject) => {
        setTimeout( () => {
                let error = true
                if(!error){
                    resolve({username:'UserName', password : '1234'})
                }else{
                    reject('Error : something went wrong')
                }
        },1000)
})

promiseFour.then((user) => {
        console.log(user);
        return user.username
}).then( (username) => { 
        // this is known as chaining
        console.log(username);
}).catch( (err) => {
    console.log(err);
}).finally( () => { // finallu executre weather the promise resolve or reject 
    console.log("the promise is either resolved or rejected..");
})


const promiseFive = new Promise ( (resolve,reject) => {
        setTimeout( () => {
            let error = true
            if(!error){
                resolve({username:'JavaScript', password : '1234'})
            }else{
                reject('Error : code went wrong')
            }
        },1000)
})

async function consumePromise5(params) {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5()


// async function getUsers() {
//    try {
//     const response = await fetch('https://api.github.com/users/Wasim-Rana')
//     const data =  await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getUsers()

fetch ('https://api.github.com/users/Wasim-Rana').then( (response) => {
       return response.json()
}).then( (data) => {
        console.log(data);
}).catch( (error) => {
        console.log(error);
})