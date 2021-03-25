// Created a function that will add two arguments then multiply the result by 5. The arguments are expected to be integers. It will return the result.
function add_multiply5(numOne, numTwo) {
    return (numOne + numTwo) * 5;
}

// Created a function that checks if the number of characters in an argument is more than 10 or not. The argument is expected to be a string. If the number of characters in the string is more than 10, the function will return true. If the numebr of characters in the string is less than or equal to 10, the function will return as false. If the number of characters in the string is neither greater than 10, or less than or equal to 10, then the function will print to the console, "There has been an error!"
function longer_orshorterthan_10(string) {
    if (string.length > 10) {
        return true;
    } else if (string.length <= 10) {
        return false;
    } else {
        console.log("There has been an error!");
    }
}

// Created a function that will take in an argument expected to be an array of strings. The function will go through the array and return the first element in the array that starts wtih "ph". If no string starts with "ph", the function will return the message "No string starts with ph!"
function ph_or_no(array) {
    for (var index = 0; index < array.length; index++) {
        if (array[index].startsWith("ph")) {
            return array[index];
        }
    }
    return "No string starts with ph!";
}

// Testing the functions by calling each function 3 times and console logging the result

console.log(add_multiply5(2, 2));
console.log(add_multiply5(3, 4));
console.log(add_multiply5(1, 5));

console.log(longer_orshorterthan_10("aaa"));
console.log(longer_orshorterthan_10("aaaaaaaaaaaaaaaaa"));
console.log(longer_orshorterthan_10("aaaaaaaaaa"));

console.log(ph_or_no(["phooey", "kablooey"]));
console.log(ph_or_no(["bah hambug", "phood"]));
console.log(ph_or_no(["gooey", "louieee", "Rick"]));