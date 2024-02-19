// "if-else"
let number = 9;
if (number > 0) {
    console.log("The number is Positive Number");
} else {
    console.log("The number is Negative");
    
}

let climate = "rainy";
if (climate = "rainy"){
console.log("Carry the Umberella");
} else {
    console.log("Don't carry the Umberella");

}

//Multiple consition using 'else-if'

let value =  -78;

if (value > 0){
    console.log("The number is positive");
}  else if (value < 0 ) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

//For Loop

let fruits = ["apple", "banana", "orange", "grape"];

for ( let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//For In loop

let person = {
    name: "Gayatri",
    age: 23
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

//For of Loop

let message = "Hello";

for (let char of message) {
    console.log(char);
}

//While Loop

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}