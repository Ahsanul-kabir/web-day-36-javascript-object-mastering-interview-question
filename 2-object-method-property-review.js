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

console.log(normalPerson.getFullName);
console.log(normalPerson.firstName);
normalPerson.getFullName();

console.log(normalPerson.salary);