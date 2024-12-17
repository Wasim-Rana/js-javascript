function setUSER(username){
    this.username = username

}

function createUSER(username, email , password ){
        this.email = email
        this.password = password
        setUSER.call(this ,username)
}   

const newUSER = new createUSER("Eddie" , "eddie@venom" , 102938)

console.log(newUSER);