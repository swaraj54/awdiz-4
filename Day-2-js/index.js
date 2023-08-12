// // Datatypes
// // Varibles

// Conditional Statement

// Types:
// if else,
//  switch

// if else
//     syntax -

//  if () {

// } else {

// }

var age = 88;
console.log(age > 18)

if (age > 18) {
    console.log("You are older than 18")
} else {
    console.log("You are smaller than 18..")
}


// =
// ==
// ===

// =
// Value assign

// ==
// compare only data

// ===
// compare data + datatype


console.log(200 === "200")



// &&  -- all condition must be true
// ||  -- one condition is ture then will return true

console.log(13 > 6 && 15 > 10 && 5556 > 987)

console.log(9 > 14 || 998 > 897 || 76 > 987)





var age = 18;
var had = false;

// console.log(had)


if (age >= 19 && age <= 80 && had == false) {
    console.log(`You are allowed for DL age - ${age}`)
} else if (age == 18 && !had) {
    console.log(`You are allow for LL- ${age}`)
} else {
    console.log(`You are not allow for DL. ${age}`)
}


// break - for loops
// return


var age = "Swaraj";

switch (age) {
    case "Swaraj" || "xyz":
        console.log("xyz")
        break;
    case "Awdiz":
        console.log(age)
        break;
    case "xyz":
        console.log(age)
        break;
    case "abc":
        console.log(age)
        break;
    case "poi":
        console.log(age)
        break;
    default:
        console.log("nOT MATCHED")
}


// Loops 
// for 
// while

// for 

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)



var num = 8765; // assign
num = num + 1; // re-assign
num = num + 1; // re-assign
num = num + 1; // re-assign
num = num + 1; // re-assign
num++;
num++;
num++;
num++;
num++;
num = num - 1;
num--;
num--;
num--;
num--;
num--;
num--;
console.log(num)


// for (starting, ending, sequence) {
//     console.log()
// }

for (var i = 1; i <= 100; i = i + 4) {
    console.log(i)
    // i = i + 1
}
// 1st Iteration : i = 1,  1 <= 10 - true, log(1), i = 1 + 1 , i = 2
// 2nd Iteration : i = 2,  2 <= 10 - true, log(2), i = 2 + 1 , i = 3
// 3rd Iteration : i = 3,  3 <= 10 - true, log(3), i = 3 + 1 , i = 4

// 9th Iteration : i = 9, 9 <= 10 - true, log(9),  i = 9 + 1, i = 10
// 10th Iteration :i = 10, 10 <= 10 - true, log(10), i = 10 + 1, i = 11;
// 11th iteration :i = 11, 11 <= 10 - false 


