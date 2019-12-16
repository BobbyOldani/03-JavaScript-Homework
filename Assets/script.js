let specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "]", "[", "?"];
let numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let passLength = prompt("How many characters would you like your password to be? Your password must be between 8-128 characters!")
let confSpec = confirm("Press OK if you would like special characters in your password");
let confNum = confirm("Press OK if you would like numbers in your password");
let confLower = confirm("Press OK if you would like lowercase letters in your password");
let confUpper = confirm("Press OK if you would like uppercase letters in your password");

console.log(passLength);
console.log(confSpec);
console.log(confNum);
console.log(confLower);
console.log(confUpper);


