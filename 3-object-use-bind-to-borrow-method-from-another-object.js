// object use bind to borrow method from another object

// bind function er kaj = ek object er function ke onno object er modde use kora.
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount;
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

// console.log(normalPerson.chargeBill(200));

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson)
friendlyChargeBill(1500);