const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

const height =parseInt(document.querySelector('#height').value)    
const weight =parseInt(document.querySelector('#weight').value)
const results =document.querySelector('#results')

if  (height==='' || height < 0 || isNaN(height)) {
   results.innerHTML=`Give a valid height ${height}` 
}   else if  (weight==='' || weight < 0 || isNaN(weight)) {
   results.innerHTML=`Give a valid wright ${weight}` 
}else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2)
   if(bmi < 18.6){
    results.innerHTML=`<span> BMI : ${bmi} <span><p style="Color:red;">under weight</p></span> </span>`
   }else if(bmi >= 18.6 && bmi < 24.9){
    results.innerHTML=`<span> BMI : ${bmi} <span><p style="Color:green;">normal weight</p></span> </span>`

   }else{
    results.innerHTML=`<span> BMI : ${bmi} <span><p style="Color:red;">over-weight</p></span> </span>`

   }
   
}

})
