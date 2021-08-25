const fs = require('fs');
const inquirer = require('inquirer');
const generateProfiles = require('./utils/generateProfiles');

const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?'
    }]);
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