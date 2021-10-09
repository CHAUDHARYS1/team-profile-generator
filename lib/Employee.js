class Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeRole = 'Employee', employeeGithub, employeeSchool){
        this.name = employeeName;
        this.id = employeeId;
        this.email = employeeEmail;
        this.role = employeeRole;
        this.github = employeeGithub;
        this.school = employeeSchool;
    }
    getName(){ 
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Employee;