const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, employeeSchool, employeeGithub){
        super(name, id, email);
        this.school = employeeSchool;
        this.github = employeeGithub;
    }

    getSchool() {
        return this.school;
    } 
    getRole(){ 
        return 'Intern';
    }
    getGithub(){
        return this.github;
    }

}

module.exports = Intern;