// for of loop
// const arr = [2,4,5,6,8,7]
// for (const element of arr) {
//     console.log(element);
    
    
// }
// 
 // String 

// greetings = "mamtesh kumar"
// for (const greet of greetings) {
//     console.log(greet);
    
//     // for a single line print 
//     // process.stdout.write(greet)
    
// }

// map
// not duplicate exist
const map = new  Map()
map.set('in', "delhi")
map.set('gmt', "lko")
map.set('up',"ballia")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,'-',value);
    
    
}
// not itrable
// const abcd={

// 'mamtesh':'kumar',
// 'name': 'mamtesh',
//  'course':'b.tech'

// }
// for (const [key,value] of abcd) {
//     console.log(key,'-',value);
    
// }
// for object key value pair print 
// const abcd={

// 'mamtesh':'kumar',
// 'name': 'mamtesh',
//  'course':'b.tech'

// }
// for (const key in abcd) {
//    console.log(`${key} is name of ${abcd[key]}`);
   
    
    
// }
// forof loop me value aata hai aur forin loop me 
// key aati hai


//for each loop

 const coding =["js", "rudy", "python", "cpp"]

// // coding.forEach( function (val){
// //     console.log(val);
    
// // })
// coding.forEach( (val) => {//for each arrow function
// console.log(val)
// } )

// function printMe(item ){
//     console.log(item)
// }
// coding.forEach(printMe)

//++++++++arrow function+++++++++//
//it is contain not only one variable item it ,
// contain index and array also
// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
    

// })

//***************************object inside array ***********/
const mycodding=[
    {
        "language name" :"java",
        "langugeFilename" :"java",
    }  ,  
    {
        "language name" :"py",
        "langugeFilename" :"pythan",
    },    
    {
        "language name" :"js",
        "langugeFilename" :"javascript",
    }    
]
 
// mycodding.forEach( (item) => {
//     console.log(item);
    

// })

//******** */
for (const [key,value] in mycodding) {
    console.log(key,value)
    
}