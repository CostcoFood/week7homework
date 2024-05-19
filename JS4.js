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

function isSumGreaterThan100(numbers) {
    let sum = 0; 
    for (let number of numbers) {
        sum += number;
    }
    return sum > 100;
}
console.log(isSumGreaterThan100([5,10,15,20,25,30,35,40]))

function getAverage(numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}
console.log(getAverage([5,10,15,20,25,30,35,40,45,50]))

function isFirstArrayAverageGreater(arr1, arr2) {
    let avg1 = getAverage(arr1);
    let avg2 = getAverage(arr2);
    return avg1 > avg2;
}
console.log(isFirstArrayAverageGreater([30,60,90],[5,10,15]))

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 15.50;
}
console.log(willBuyDrink(false, 15.49))

const randomNumber = [1,2,3,4,5,6,7,8,9,0]
function getRandomNumber() {
    const randomIndex = Math.floor(Math.random() * randomNumber.length);
    return randomNumber[randomIndex];
}
console.log(getRandomNumber())