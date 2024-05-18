let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let difference = ages[ages.length - 1] - ages[0];
console.log(difference);

ages.push(26);
difference = ages[ages.length - 1] - ages[0];
console.log(difference);

let sum = 0
for (let age of ages) {
    sum += age;
}
let averageAge = sum /ages.length;
console.log(averageAge);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
for (let name of names) {
    totalLetters += name.length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

let concatenatedNames = '';
for (let name of names) {
    concatenatedNames += name + ' ';
}console.log(concatenatedNames.trim());

/*This is to access the last element of the array

let lastElement = array[array.length - 1];

This is to access the first element of the array

let firstElement = array[0]; */

let nameLengths = [];
for (let name of names) {
    nameLengths.push(name.length);
}
console.log(nameLengths);

let totalLenght = 0 ;
for (let length of nameLengths) {
    totalLenght += length;
}
console.log(totalLenght);

function repeatWord(word, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

console.log(repeatWord('Hello', 3));

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullName('Steven', 'Guevara'));

