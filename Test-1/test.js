// Question 1:
// Write a JavaScript function that takes an array of strings 
// as input and returns a new array containing the lengths of those strings.


var strings = ["Swaraj", "Awdiz", "Institute", "gvbh", "iouyg", 'KJH']

// result = [6,5,9,4,5,3]

function findStringLength(array) {
    // console.log(array, "strings of array")
    var result = []
    for (var i = 0; i < array.length; i++) {
        // console.log(array[i].length)
        result.push(array[i].length)
    }
    return result;
}

console.log(findStringLength(strings))


// Question 2:
// Write a JavaScript function that takes an array of
// numbers as input and returns a new array with only the even 
// numbers from the original array.



var numbers = [2, 4, 5, 6, 7, 8, 9, 2, 5, 7, 8, 4, 3, 6];

function findSumNumber(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result.push(array[i])
        }
    }
    return result;
}

console.log(findSumNumber(numbers))


// Question 3:
// Write a JavaScript function that takes an array of numbers
//  as input and returns the smallest number from the array.


var numbers = [7, 4, 5, 7, 8, 9, 5, 3, 6, 8, 4, 7, 9, 3, 6, 8, 2];
function findSmallNumber(array) {
    var minimum = array[0]; //  7 - 4 -  3 - 2
    for (var i = 1; i < array.length; i++) {
        console.log(minimum, array[i], minimum > array[i])
        if (minimum > array[i]) {
            minimum = array[i]; // 7 -4 - 3 - 2
        }
    }
    return minimum
}
console.log(findSmallNumber(numbers))




// Question 4:
// Write a JavaScript function that takes two arrays
//  as input and returns a new array containing elements
//   that are present in both arrays.

var array1 = [1, 2, 34, 5, 6]
var array2 = [2, 5, 6, 7, 8]

function findSame(array1, array2) {
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                newArray.push(array1[i])
            }
        }
    }
    return newArray;
}

console.log(findSame(array1, array2))