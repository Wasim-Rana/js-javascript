const user = {
    username : "Human",
    loginCount : 2 ,
    signedIn : true,

    getUserdetails : function(){
        // console.log("Details recieved");
       console.log(`Username : ${this.username}`)
       console.log(this);
    }

}

// console.log(user.getUserdetails());
// console.log(this);

// new keyword is a constructor funtion , it only alows to create multiple instances from one literals 

// const promise1 = new Promise()

function User (username,loginCount,signedIn) {
    this.username = username // left hand side is the variable and right side is value is passed  
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greetings = function(){
            console.log(`${this.username} Welcome`);
    }
    return this
}

const user1 = new User("human",2,true)
const user2 =  new User("javascripts",1,false)
// console.log(user1);
// console.log(user2);

console.log( user2 instanceof User); // true 
console.log( user1 instanceof Object); // true 
