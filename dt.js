// let myDate = new Date();



// console.log(myDate.toString());//  date time
// console.log(myDate.toDateString());//date only
// console.log(myDate.toLocaleString());// mm/dd/yyyy format
// console.log(myDate.toLocaleDateString('en-IN'));//for dd/mm/yyyy
// console.log(typeof myDate)// object

//for specific date
let mycreateDate = new Date(2004,0,16)
// console.log(mycreateDate.toDateString())
// //month starting from 0

let myTimeStamp = Date.now()
// console.log(mycreateDate.getTime())//mili second
// console.log(myTimeStamp.toString())//mili second

// (((((((((((for minite)))))))))))

//console.log(Math.floor(Date.now()/1000));// in min...

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getTime());