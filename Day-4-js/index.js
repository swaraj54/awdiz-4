// Datatypes 
// Varibles 
// if else 
// switch 
// for 

// varibles 

// var 
// let 
// const 

// var myName = "Awdiz";
// console.log(myName , "first log")
// myName = "Institute"; // Re-Assign
// console.log(myName , "second log")
// var myName  = 'Awdiz Institute'; // Re-Declare
// console.log(myName,"final")


// let mySurname = "xyz";
// console.log(mySurname)
// mySurname = "abc"; // Re-Assign
// console.log(mySurname);
// let mySurname = "PQR"; // Re-Declare not possible
// console.log(mySurname)


// const myAge = 34;
// console.log(myAge)
// myAge = 87; // Re-assign is not possible
// console.log(myAge)
// const myAge = 89; // Re-declare is not possible
// console.log(myAge)


// in var re-assign and re-declare both are possible
// in let re-assign is possible but re-declare is not possible
// in const re-assign or re-declare both are not possible


Array  []

var kuchBhi = [];

var numbers = [1,2,3,4,5,66,7,8,9,90];

var names = [a,b,c,d,e,f,g]

var allDataTypes = [12,34,34.34, true, "sjknn", names ]


var myStudents = ["Sagar", "Pratik", "Pranay", "Om"];
console.log(myStudents)
console.log(myStudents[0])
console.log(myStudents[1])
console.log(myStudents[2])
console.log(myStudents[3])
console.log(myStudents.length)


// Q Find out is "Om" present in given array or not ?
var myStudents = ["Sagar", "Pratik", "Pranay", "Om","Swaraj","XYZ","abc"];
// console.log(myStudents.length)
// console.log(myStudents[0])
for(var i = 0; i < myStudents.length ; i++){
    // console.log(myStudents[i])
    if(myStudents[i] == "Swaraj"){
        console.log("We got Swaraj & value is ->",myStudents[i], "and indec is " , i )
        break;
    }
}