// const  informtaion={
//     username : "mamtesh",
//     price :"999",
//     welcomemsg : function(){
//         console.log(`${this.username} , welcome website`)
//         console.log(this)
//     }
       
//     }
//     informtaion.welcomemsg()
//     informtaion.username = "kumar"
//     informtaion.welcomemsg()
    // console.log(this)
//*************************** */
//  function user(){
//     let username ="mamtesh"
//     console.log(this.username)/// this keyword not user in function

//  }
// user()

// const mam = () => {// arrow function
//     let username  = "mamtesh"
//     console.log(this);
    
// }
//  mam()
 // Normal arrow function

//  const addTwo =(num1,num2) => {
//     return num1+num2
// }
// implicit arrow function

//  const addTwo =(num1,num2) =>   num1+num2
//    const addTwo =(num1,num2) =>   (num1+num2)
 const addTwo =(num1,num2) =>   ({username : "mamtesh"})

 console.log(addTwo(5,6))
     