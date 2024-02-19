
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}
var person1 = new Person("John", 25);
var person2 = new Person("Jane", 30);

console.log(person1.name);  
console.log(person2.age);   

person1.sayHello();  
person2.sayHello(); 
