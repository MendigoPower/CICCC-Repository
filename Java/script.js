// First exercise


var baseValue = 5
var heightValue = 7
var areaValue = (baseValue * heightValue) / 2;

console.log(
    `The area of the triangle is ${areaValue}`
);

baseValue = prompt("Type a number to change the Base.");
heightValue = prompt("Type a number to change the Height.")
areaValue = (baseValue * heightValue) / 2;

console.log(
    `The area of the triangle is ${areaValue}`
);

// Second exercise

let firstNumber = prompt("Type the first number");
let secondNumber = prompt("Type a second number");
let numberResult = (firstNumber + secondNumber);

alert(numberResult);

if (numberResult = 50) {
    return (alert("Your number is 50."));
} else {
    return (alert("Your number is not 50."));
}

// Third exercise

// Fourth exercise

let randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;
let userChoise = prompt("Type a number");

if (userChoise == randomNumber) {
    alert(`You matched with computer choise! ${randomNumber}`);
} else {
    alert(`The computer choosed ${randomNumber}  :(`);
}

// fith exercise


var firstNumber = prompt("Type the first number");
var secondNumber = prompt("Type a second number");
var numberResult = (firstNumber + secondNumber);

if (numberResult >= 50 && numberResult <= 80) {
    alert("65")
} else {
    alert("80")
}

