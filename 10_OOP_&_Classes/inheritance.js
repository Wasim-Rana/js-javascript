class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends User{
    
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }


}

const User1 = new teacher("human", "human@earth.com" , 1234)
User1.addCourse()

const USER = new User ("Tom")
USER.logMe()

console.log(User1 instanceof User);