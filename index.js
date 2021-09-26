const fs = require('fs');
const inquirer = require('inquirer');
const generateProfiles = require('./utils/generateProfiles');

// import all classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// TODO: Global Variables
let employee = [];

// TODO: Create a function that prompt's for team manager/team lead info
const promptTeamLeadQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'What would you like to name your team?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerName',
            message: "Please add manager's name: (required)",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmployeeId',
            message: "Please add manager's employee id: (required)",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter an employee id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please add manager's full email address: (required)",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Please add manager's office number: (not required)"
        },
        {
            type: 'list',
            name: 'teamMembers',
            message: 'Add a team member:',
            choices: ['Engineer', 'Intern']
        }
    ]);
}

// TODO: Create a function that prompts user for team name
// const promptTeamName = () => {
//     return inquirer.prompt([]);

// }

// TODO: Create a function that prompts user about team memeber that they want to add
const promptQuestions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'employeeName',
            message: 'Name of employee',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a name of the employee!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employeePosition',
            message: 'Position of employee',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'employeeService',
            message: 'How long have they been with the team?'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter 5 Digit Employee ID number:'
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please enter the email address of the employee:'
        },
        {
            type: 'input',
            name: 'employeePhone',
            message: 'Please enter the phone number of the employee:'
        },
        {
            type: 'input',
            name: 'employeeSchool',
            message: 'Please enter the school of the employee:'
        },
        {
            type: 'input',
            name: 'employeeGithub',
            message: 'Please enter the github username of the employee:'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another team member?',
            default: false
        }
    ]);
};


// TODO: Create a function to write index file
function writeToFile(employee) {
    fs.writeFile('./dist/index.html', generateProfiles(employee), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Page created! Checkout out index.html in this directory to see it!');
    });
};
// TODO: Crete a function to write another profile based on user's answer to prompt
function nextProfile() { 
    promptQuestions().then((anotherProfileData) => {
        console.log(anotherProfileData);
        if (anotherProfileData.employeePosition === 'Engineer') {
            employee.push(new Engineer(anotherProfileData.employeeName, anotherProfileData.employeeId, anotherProfileData.employeeEmail, anotherProfileData.employeeGithub));    
        } else if(anotherProfileData.employeePosition ==='Intern') {
            employee.push(new Intern(anotherProfileData.employeeName, anotherProfileData.employeeId, anotherProfileData.employeeEmail, anotherProfileData.employeeSchool))
        }
        if (!anotherProfileData.confirmAddEmployee) {
            console.log("inside while loop", employee);
            writeToFile(employee);
        } else{
            nextProfile();
        }
    });
}

// TODO: Create a function to initialize app
function init() {
        promptTeamLeadQuestions()
        .then((data) => {
            employee.push(new Manager(data.managerName, data.managerEmployeeId, data.managerEmail, data.managerOfficeNumber));
            console.log(data)
        })
        .then(promptQuestions)
        .then((data) => {
            if (data.employeePosition === 'Engineer') {
                employee.push(new Engineer(data.employeeName, data.employeeId, data.employeeEmail, data.employeeGithub));    
            } else if(data.employeePosition ==='Intern') {
                employee.push(new Intern(data.employeeName, data.employeeId, data.employeeEmail, data.employeeSchool))
            }
            console.log(data);
            if (data.confirmAddEmployee) {
                nextProfile();
            }else{
                writeToFile(employee);
            };
        });
};

// Function call to initialize app
init();