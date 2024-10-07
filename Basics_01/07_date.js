// date 

const MyDate = new Date(); 
// console.log(MyDate);

// console.log(MyDate.toString()); // Thu Aug 01 2024 20:55:09 GMT+0530 (India Standard Time)

// console.log(MyDate.toJSON()); // 2024-08-01T15:24:49.612Z

// console.log(MyDate.toLocaleString()); // 1/8/2024, 8:55:33 pm

// console.log(MyDate.toDateString()); // Thu Aug 01 2024

// console.log(MyDate.toISOString());

// console.log(typeof MyDate); //object 

// declare sepecific date 

// const myDate = new Date(2023,0,23)

// const myDate = new Date(2023,0,23,5 ,3,45)

// const myDate = new Date("2023-01-12") //dd-mm-yyyy

const myDate = new Date("01-12-2024") //mm-dd-yy

// console.log(myDate.toLocaleString());



//Time Stamp

// let MyTimeStamp = Date.now()

// console.log(MyTimeStamp);

// console.log(myDate.getTime());

// console.log( Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate.getMonth() +1);
// console.log(newDate.getday());

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: "GMT"
})