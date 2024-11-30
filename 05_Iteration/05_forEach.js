const lang = ["js","python","c","java","swift"]

// lang.forEach( (element) => {
//     console.log(element);
// });


function print(item){
   
    console.log(item);
}

// lang.forEach(print) // reference of the array 


// lang.forEach( (item,index , arr) =>{

//     console.log(item , index , arr );

// })


const myCode = [ {
    lang : "javascript",
    extension : ".js"
},
{
    lang: "java",
    extension: ".java"
},
{
    lang: "python",
    extension: ".py"
}

]

myCode.forEach( (item) => {
    console.log(item.lang);
})