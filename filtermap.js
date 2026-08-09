// for each loop kuch return nhi karta

// const coding =["mam","mam", "kum" ,"abcd"]

//   const m =coding.forEach( (item) =>{
//     console.log(item);
//     return m;

// })
// console.log(m)
//filter ****************
// const num=[1,2,3,4,5,6,7,8,9]
//  const newnum =num.filter( (num)=>  num >4 )
// console.log(newnum);
// //scope
// const num=[1,2,3,4,5,6,7,8,9]
//  const newnum=num.filter( (num) => {
//   return num>4
//  })
// console.log(newnum);
// num >4 yha condition dena hota hai

// addition in callback function
// const nums =[1,2,4,3,4,5,7]
//  const newnums =nums.map( (nums)  =>{
//     return nums+20
// })
// console.log(newnums)

//**********map inside map*********************
// const nums=[1,2,3,4,5,6,7,8,9]

// const newnums=nums
//           .map( ( nums) => nums*10)
//           .map( (nums) => nums+4) 
          
//           console.log(newnums);
          
//**************array reduce************** */
 const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);

// o indicate kha se start karna hai

const myTotal = nums( (acc,curr) => acc+curr ,0)
console.log(myTotal);
