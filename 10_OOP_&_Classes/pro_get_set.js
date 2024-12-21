function user (email ,pass){
    this._email=email
    this._pass=pass

    Object.defineProperty(this , 'email' , {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){   
            this._email=value
        }
    })
        
    
}

const User = new user("emial@email.com","1234")
console.log(User.email);