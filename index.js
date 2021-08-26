const fs = require('fs');
const inquirer = require('inquirer');
const generateProfiles = require('./utils/generateProfiles');

const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'mainTitle',
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
            type: 'input',
            name: 'employeePosition',
            message: 'Position of employee',
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
            type: 'input',
            name: 'employeeService',
            message: 'How long have they been with the team?'
        },
        {
            type: 'input',
            name: 'assignedId',
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
        }
       
    ]);
};


// TODO: Create a function to write index file
function writeToFile(data) {
    fs.writeFile('./dist/index.html', generateProfiles(data), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Page created! Checkout out index.html in this directory to see it!');

    });
};

// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        writeToFile(data);
        // console.log(data);
    });
};

// Function call to initialize app
init();