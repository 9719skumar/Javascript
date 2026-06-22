// STACK AND HEAP MEMORY

// 1. STACK MEMORY ( PRIMITIVE ) => isme value ka copy milta hai 
// 2. HEAP MEMORY  (NON - PRIMITIVE ) => isme original value ka reference milta hai mtlb original value mein change hota hai

// STACK EXAMPLE

let myname = 'sandeep kumar';
let anothername = myname;
anothername = 'deepak kumar';
// console.log(myname);
// console.log(anothername);

// USE HEAP MEMORY

let userone  = {
    fname : 'sandeep',
    lname : 'kumar'
}

// let userTwo  = {
//     fname : 'sandeep',
//     lname : 'kumar'
// }

// console.table(username);
// console.table(userTwo);

let userTwo = userone;
// console.log(userTwo);
// console.log(userTwo.fname);
// console.log(userTwo.lname);

// console.log(userone.fname);
// console.log(userTwo.fname);
// console.log(userone.lname);
// console.log(userTwo.lname);



