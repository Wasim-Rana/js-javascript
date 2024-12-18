// ES6

// class User {
//     constructor(username, email, password){
//             this.username = username
//             this.email = email
//             this.password = password
//     }
//     encryptPass(){
//         return `${this.password} abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newUser = new User("NewUser" , "ABC@GMIAL.COM" , 123) 
// console.log(newUser.encryptPass());
// console.log(newUser.changeUsername());


function User(username,email,password){
            this.username = username
            this.email = email
            this.password = password
}

User.prototype.encryptPass= function (){
    return `${this.password} abc`

}

const newUser2 = new User("NewUser2" , "ABCd@GMIAL.COM" , 123) 
console.log(newUser2.encryptPass());
