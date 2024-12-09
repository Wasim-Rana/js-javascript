// generate random color using random hex values 

const randomcolor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'

    for(let i =0;i<6;i++ ){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color 
}
let intervel
const startChange = () => { 

    if(!intervel){
        intervel = setInterval(changebgColor,2000)
    }
    function changebgColor (){ 
        document.body.style.backgroundColor=randomcolor()
    }
}
const stopChange = () => { 
    clearInterval(intervel) 
    intervel = null ;
}

document.querySelector('#start').addEventListener('click', startChange)
document.querySelector('#stop').addEventListener('click', stopChange)