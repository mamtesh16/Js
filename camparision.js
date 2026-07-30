// console.log(null> 0);
// console.log(null< 0);
// console.log(null== 0);
// console.log(null<= 0);
// console.log("3"==3);//true
// console.log("3"===3)//false , it check datatype
//  const myfunc =function (){//functin declare
//     console.log("mamtesh")

// }
// console.log (typeof myfunc);//function datatype

//*******************************************

// let myname = "mamteshkumar"
// let name = myname
//  name = "abhi"            **copy of value is change but original value is still same
// console.log(myname);       **stack
// console.log(name);

//++++++++++++
// let user1 = {
//     email : "mamteshk861@gmail.com"
    
// }                          ** change in original value
                               //** heap
// let user2 = user1
// user2.email = "mamtesh627@gmail.com"
// console.log(user1.email)
// console.log(user2.email)
/////////////////////////////////////////////////
//  //String*****
// let str1 = "mamtesh";
// let str2 = "kumar";

// console.log(`hello my name is ${str1} and second string ${str2}`);//for concatinate two string 
//  const gameName = new String("mamtesh")
//  console.log( gameName[0])//op -m
//  console.log( gameName[1])
//  console.log( gameName[2])

 const gameName = new String("mamtesh");

const sTr = gameName.slice(-5, 2);
console.log(sTr);

const sTR = gameName.substring(0, 4);
console.log(sTR);

const mamtesh = sTR
console.log(sTR)  // " "
console.log(sTR.trim)// use for spaces

const url = "https:// mamtesh.com/mamtesh%30kumar"

console.log(url.replace('%30' , '-'))// use for replace url some value

console.log(url.includes ('mamtesh'))//it means this word in present in url or not