// class = same type er onk gula object dorkar tdr template

// new keyword = class theke object banano

class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', ' Balam', 20000);
console.log(heroPerson);

const friendlyPerson = new Person('Hero', ' Golam', 25000);
console.log(friendlyPerson);



// ES6 er aage ei vabe kore use kortw
function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Grand', ' Papa', 1200);
console.log(oldPerson);