const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function() { // method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) { // method
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000

}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000

}


const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(3000);
console.log(heroPerson.salary);


// call function borrow kore anbe nah but Direct niya asbe
normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
normalPerson.chargeBill.call(heroPerson, 3000, 500, 30);
console.log(heroPerson.salary);


normalPerson.chargeBill.call(friendlyPerson, 500, 200, 10); // parameter comma hisabe jbe
console.log(friendlyPerson.salary);


// apply same kaj kore call er moto but parameter Array er modde deya lage
normalPerson.chargeBill.apply(friendlyPerson, [500, 200, 10]); // parameter array hisabe jbe
console.log(friendlyPerson.salary);