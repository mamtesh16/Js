// local scope
// var c = 100
// let b =400

// // block scope
// if (true) {
//     let a = 20
// const b = 30
// var c = 40
// console.log("inner :" , b)
    
// }
// // console.log(a);
// console.log(b);
// // console.log(c);

//++++++++++++++++++++++
// icecream . bda se== chhota but chhota se bda!=
// function one (){
//     username ="mamtesh"
//     function two(){
//         website = "youtube"
//         console.log(username);
        
//     }
//     // console.log(website)
//     two()
// }
// one()
//********************************
if (true) {
    const username = "mamtesh"
    if (true) {
        const website = "youtube"
        console.log(username + website)

    }
    // console.log(website) not access bcz outof scope
}
// console.log(usernmae)
//____________Hosting______________________
console.log(addone(8))
function addone(num) {
    return num + 1
}
// this is incorrect syntax for access before declaration
addTwo(5)

const addTwo = function(num) {
    return num + 2
}

