const Obj = {

        _email: "Email@email.com",
        _pass : "1234",

        get email(){
            return this._email.toUpperCase()
        },
        set email(value){
            this._email=value
        }
        
}
 const User =  Object.create(Obj)

 console.log(User.email);