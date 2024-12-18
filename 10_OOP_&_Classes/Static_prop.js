class User {
    constructor(name) {
        this.name = name
    }

    logIn(){
        console.log(`Username is ${this.name}`);
    }

   static createID (){
        return `123`
    }
}

const Tom = new User ("Jerry")
// console.log(Tom.createID());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email =email
    }
}

const teacher = new Teacher("Principle","I@PJOn.com")
teacher.logIn()
console.log(teacher.createID());