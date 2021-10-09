const Employee = require('./Employee');

class Engineer extends Employee{
        constructor(name, id, email, employeeGithub){
        super(name, id, email)
        this.github = employeeGithub;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;