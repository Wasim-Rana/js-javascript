const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click' , (e) => {
        // console.log(e);
        // console.log(e.target); // the origin of event 
        switch(e.target.id){
            case "grey":           
                        // body.style.backgroundColor=e.target.id

                        body.style.backgroundColor="grey"

                 break;
            case "white" : 
                    //  body.style.backgroundColor=e.target.id

                     body.style.backgroundColor="white"

                break ;
            
            case "blue": 
                // body.style.backgroundColor=e.target.id
                 body.style.backgroundColor="blue"
                 break;
                
            case "yellow": 
                //  body.style.backgroundColor="yellow"
                    body.style.backgroundColor=e.target.id

                 break;
            case "purple": 
                 body.style.backgroundColor=e.target.id
                 break;
            case "black": 
                 body.style.backgroundColor=e.target.id
                 break;

        }
    })

})

