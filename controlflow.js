// if (2==="2") {
//     console.log("executed")
    
// }
// const temp = 45
// if (temp ==39) {
//     console.log("good")
    
// }
// console.log("not good")


// const score = 200
// if ( score > 100) {
//     var power = "fly"// global scope
// //    let power = "fly"
//    console.log(`user power :${power}`)    
// }
// console.log(`user power :${power}`)    

//************implicit scope */

// const balence  = 1000 
// if(balence >500) console.log("test")

// const userloggedIn = true
// const userAtm = true
// const usergoogle = true
// const useremail = false
// //  if (userAtm&&userloggedIn) {
// //     console.log("allow to shoping")
    
// //  }

//  if (usergoogle|| useremail) {
//     console.log("loggedIN")
    
//  }

// switch case 
// const month = 4
// switch (month) {
//     case 1:
//         console.log("january")
        
//         break;
//     case 2:
//         console.log("feb")
        
//         break;
//     case 1:
//         console.log("march")
        
//         break;
//     case 1:
//         console.log("april")
        
//         break;

//     default:
//         console.log("default")
//         break;
// }

//turekey value or false

//falsey value
// false,0 , -0, BigInt , "", null ,undefind,Nan

// truthly value
// "0", 'false' , "" , {} , [], function (){}

// when array is empty
// if(username.lenght===0){
//     console.log("array is empty")
// }

//when object is empty
// if (Object.keys().length=== 0) {
//     console.log("object is empty")
    
// }

//******Nullish Coalescing Operator (??): null undefined

// let val1;

// // val1 = 5 ?? 10
// // val1 = null ?? 10;

// console.log(val1);//  output is 10  agr statement se phle 
// // print kar rhe hai to undefind aayega
// val1 = null ?? 10 ?? 15

// console.log(val1)

/*******ternary operator*******/

const iceTeaprice = 100
iceTeaprice>=40 ? console.log("less than 100") : console.log("more than 80")
