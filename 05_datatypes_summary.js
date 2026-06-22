//  primitive data type

//  String , Number , Boolean , null , undefined , Symbol ,BigInt
 
const score = 100;
const scoreValue = 100.3;

const isLoggedin = false;
const outsideTemp = null;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId); => Give value false

// const BigNumber = 5345373543534735n;

 
// REFERENCE ( NON PRIMITIVE )

//  Array , Oject , functions

const arr = [10,20,30];
// console.table(arr);

let myobj = {
    fname : 'sandeep',
    lname : 'kumar',
    age : 22
}
// console.table(myobj);

const myfun = function(){
    console.log('function datatypes');
}
// console.log(typeof myfun);
// console.log(typeof arr);
// console.log(typeof myobj);