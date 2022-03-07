/* 

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

// sixth exercise

// seventh exercise

function rotate_elements_left(array)
{
    return [array[1], array[2], array[0]];
} 

*/



// Lab 2
// Exercise 1

/* let meal = [ 
    {name: 'Pizza', price: 14, popularity: 'High'},
    {name: 'Hamburguer', price: 8, popularity: 'High'},
    {name: 'Coxinha', price: 4, popularity: 'Low'},
    {name: 'Pastel', price: 3, popularity: 'Low'},
    {name: 'Pudim', price: 7, popularity: 'Medium'}
]
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(meal[0]);
  generateTableHead(table, data);
  generateTable(table, meal); */


  function contar() {
    var texto = document.ex01.campo.value;
    var quantVet = texto.split(' ').length;

    document.getElementById('alvo').innerHTML = quantVet;
}
console.log()
</script>