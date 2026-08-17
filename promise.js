// promise is created
// const prone = new Promise(function(resolve, reject) {

//     setTimeout(function() {
//         console.log("task is completed");
//         resolve();//called
//     }, 1000);

// });

// prone.then(function() {
//     console.log("promise consumed");
// });
//***********************
// const promisthree = new Promise(function (resolve,reject ){
//   setTimeout(function(){
//     resolve({username : "mamtesh", email : "mamtesh@gmail.com"})//when data is present
//   },1000)
// })
// promisthree.then(function(user){
//     console.log(user);
    
// })
// //++++++++++++++++++++++++++++++++++++++
// const promisefour = new Promise(function(resolve,reject ){
//     setTimeout( function(){
//     //   let error = false;
//       let error = true;
//       if(!error){
//         resolve({name: "mamtesh", pass: "12345"})
//       }
//       else{
//         reject('something went wrong')
//       }
      
 
//     },1000)
// })
// promisefour
// .then( (user)=>{// chaining of data 
//     console.log(user);
//     return user.name;

// })
// .then( (name )=> {
// console.log(name)
// })
// .catch( (error)=> {
//    console.log(error) 
// }).finally( ()=>
//     'the promise is either resolved or rejected'
// )//*************************** */
// const promisefive = new Promise(function(resolve, reject) {
//     let error = true;
   
//  setTimeout( function(){
//     if (!error) {
//         resolve({ name: "js", pass: "12345" });
//     } else {
//         reject("something went wrong");
//     }
// }, 1000);
// })

// async function consume() {
//     try {
//           const response =await promisefive;
//      console.log(response);
        
//     } catch (error) {

        
//     }
//    }
