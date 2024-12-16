let myName = "human          "
// console.log(myName.truelength);

let heroes = ["spiderMan","batman"]

let power = {
    spiderMan : "responsiblities",
    batman : "he is rich",

    getSpidyPower: () =>{
        console.log(`with great power comes great ${this.spiderMan}`);
        
    }
}

Object.prototype.human = function () {
    // console.log("human is present in all object");
}

Array.prototype.helloHuman = function(){
    // console.log("Human says hello");
}
heroes.human()
heroes.helloHuman()
// power.helloHuman()


// inheritance

const user = {
    username : "Human",
    email : 'HUMAN@gmail.com'
}
const teacher = {
    makeVideo : true 
}

const support = {
    Availability : false 
}

const TAsupport = {
    assigment : "js assignment",
    time : "full time ",
    __proto__ : teacher
}
teacher.__proto__ = user

// modern syntax 

Object.setPrototypeOf(TAsupport,teacher)


let anotherUser = "Bond      "

String.prototype.trueLenght = function(){
    // console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`true lenght is : ${this.trim().length}`);
}

anotherUser.trueLenght()
"human".trueLenght()