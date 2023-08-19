// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 94, 23, 45, 67, 12];
// const target = 10;

// // i j k
// // 0 1 2
// // 0 1 3
// // 0 1 4
// // 0 1 5
// // 0 1 6
// // 0 1 x

// for (var i = 0; i < array.length - 2; i++) {
//     // console.log(array[i])
//     for (var j = i + 1; j < array.length - 1; j++) {
//         // if (array[i] + array[j] == target) {
//         //     console.log(array[i], array[j])
//         // }
//         for (var k = j + 1; k < array.length; k++) {
//             if (array[i] + array[j] + array[k] == target) {
//                 console.log(array[i], array[j], array[k])
//             }
//             // console.log(i, j, k)
//             // k++  - 2 - 3 - 4 -5 - 6 -7 -8
//             // k 3
//         }
//         // j++ 1- 2
//     }
//     // i++
// }


// console.log("First")
// console.log("second")
// console.log("3")
// console.log("4")
// console.log("5")


// function kuchBhi() {
//     console.log("Inside function")
//     console.log("Inside function")
//     console.log("Inside function")
//     console.log("Inside function")
//     console.log("Inside function")
//     console.log("Inside function")
//     console.log("Inside function")
// }
// kuchBhi()

// function addition() {
//     var a = 34;
//     var b = 98;
//     // console.log(a + b)
//     return a + b;
// }

// console.log(addition())

// function subtraction() {
//     var a = 98;
//     var b = 98;
//     return a - b;
// }

// console.log(subtraction())


// function multi(firstNumber, secondNumber, third) {
//     console.log(firstNumber, secondNumber, third)
//     const result = firstNumber * secondNumber;
//     const result2 = firstNumber + secondNumber + third;
//     return result + result2;
// }
// console.log(multi(23, 39876, 76));


// function Welcome(name, surname, city, age) {
//     console.log(`I'm ${name} my surname is ${surname} and im from ${city} and my age is ${age}`)
// }
// Welcome("Rahul", "Surname", "Pune", 87)



// var array = [1, 2, 4, 6, 7, 8, 0, 12, 34, 54, 76];

// function additionOfAllElement(array) {
//     // console.log(array,"- array")
//     var result = 0;
//     for (var i = 0; i < array.length; i++) {
//         result = result + array[i]
//     }
//     return result ;
// }

// console.log(additionOfAllElement(array))


// var myArray = [32, 34, 56, 67, 78, 34, 65, 52, 73, 23, 12];

// var target = 23;

// function find(array, target) {
//     // var gotIt = false;

//     for (var i = 0; i < array.length; i++) {
//         if (array[i] == target) {
//             // gotIt = true;
//             return "Got it"; // function stop
//         }
//     }

//     // if (gotIt == false) {
//     return "No"
//     // }

// }

// console.log(find(myArray, target))


var myArray = [32, 34, 56, 67, 78, 34, 65, 52, 73, 23, 23,23, 12];

var target = 23;

function find(array, target) {
    // type your code
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == target) {
            count++;
        }
    }
    return count;

}

console.log(find(myArray, target))