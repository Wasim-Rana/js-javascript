class user {
    constructor(email,pass){
        this.email=email
        this.pass=pass
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get pass(){
        return `${this._pass} Frank`
    }
    set pass(number){
        this._pass=number
    }
}

const frank = new user("f@email.com","abc")
console.log(frank.email);
console.log(frank.pass);